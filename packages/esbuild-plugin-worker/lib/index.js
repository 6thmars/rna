import { readFile } from 'fs/promises';
import path from 'path';
import { resolve as defaultResolve } from '@chialab/node-resolve';
import { TARGETS, pipe, walk, createTypeScriptTransform, getOffsetFromLocation } from '@chialab/estransform';
import { getEntry, finalizeEntry, createFilter } from '@chialab/esbuild-plugin-transform';

/**
 * @typedef {{ resolve?: typeof defaultResolve, transformUrl?: (filePath: string, importer: string) => string|void }} PluginOptions
 */

export const REQUEST_PARAM = {
    name: 'loader',
    value: 'worker',
};

/**
 * @param {string} source
 */
export function appendWorkerParam(source) {
    if (source.match(/(\?|&)loader=worker/)) {
        return source;
    }
    if (source.includes('?')) {
        return `${source}&loader=worker`;
    }
    return `${source}?loader=worker`;
}

/**
 * Instantiate a plugin that collect and builds Web Workers.
 * @param {PluginOptions} [options]
 * @return An esbuild plugin.
 */
export default function({ resolve = defaultResolve, transformUrl } = {}) {
    /**
     * @type {import('esbuild').Plugin}
     */
    const plugin = {
        name: 'worker',
        setup(build) {
            const options = build.initialOptions;

            build.onResolve({ filter: /(\?|&)loader=worker$/ }, async ({ path: filePath }) => ({
                path: filePath.split('?')[0],
                namespace: 'worker',
            }));

            build.onLoad({ filter: /\./, namespace: 'worker' }, async ({ path: filePath }) => (
                {
                    contents: await readFile(filePath),
                    loader: 'file',
                }
            ));

            build.onLoad({ filter: createFilter(build), namespace: 'file' }, async (args) => {
                /**
                 * @type {import('@chialab/estransform').Pipeline}
                 */
                const entry = args.pluginData || await getEntry(build, args.path);
                if (!entry.code.includes('Worker')) {
                    return;
                }

                if (entry.target === TARGETS.typescript) {
                    await pipe(entry, {
                        source: path.basename(args.path),
                        sourcesContent: options.sourcesContent,
                    }, createTypeScriptTransform({
                        loader: entry.loader,
                        jsxFactory: options.jsxFactory,
                        jsxFragment: options.jsxFragment,
                    }));
                }

                await pipe(entry, {
                    source: path.basename(args.path),
                    sourcesContent: options.sourcesContent,
                }, async ({ magicCode, code, ast }) => {
                    /**
                     * @type {{ [key: string]: string }}
                     */
                    const ids = {};

                    /**
                     * @type {Promise<void>[]}
                     */
                    const promises = [];

                    let baseUrl = 'import.meta.url';
                    if (options.platform === 'browser' && options.format !== 'esm') {
                        baseUrl = 'document.baseURI';
                    } else if (options.platform === 'node' && options.format !== 'esm') {
                        baseUrl = '\'file://\' + __filename';
                    }

                    walk(ast, {
                        /**
                         * @param {*} node
                         */
                        NewExpression(node) {
                            let callee = node.callee;
                            if (callee.type === 'MemberExpression') {
                                if (callee.object.name !== 'window' &&
                                    callee.object.name !== 'self' &&
                                    callee.object.name !== 'globalThis') {
                                    return;
                                }
                                callee = callee.property;
                            }
                            if (callee.type !== 'Identifier' || callee.name !== 'Worker') {
                                return;
                            }
                            if (!node.arguments.length) {
                                return;
                            }
                            if (typeof node.arguments[0].value !== 'string') {
                                return;
                            }

                            promises.push(Promise.resolve().then(async () => {
                                const value = node.arguments[0].value;
                                const entryPoint = await resolve(value, args.path);
                                const startOffset = getOffsetFromLocation(code, node.loc.start.line, node.loc.start.column);
                                const endOffset = getOffsetFromLocation(code, node.loc.end.line, node.loc.end.column);
                                const transformedUrl = transformUrl && transformUrl(entryPoint, args.path);
                                if (transformedUrl) {
                                    magicCode.overwrite(startOffset, endOffset, `new Worker(new URL('${transformedUrl}', ${baseUrl}).href)`);
                                    return;
                                }

                                if (!ids[entryPoint]) {
                                    const identifier = ids[entryPoint] = `_${value.replace(/[^a-zA-Z0-9]/g, '_')}`;
                                    if (code.startsWith('#!')) {
                                        magicCode.appendRight(code.indexOf('\n') + 1, `import ${identifier} from '${appendWorkerParam(entryPoint)}';\n`);
                                    } else {
                                        magicCode.prepend(`import ${identifier} from '${appendWorkerParam(entryPoint)}';\n`);
                                    }
                                }

                                magicCode.overwrite(startOffset, endOffset, `new Worker(new URL(${ids[entryPoint]}, ${baseUrl}).href)`);
                            }));
                        },
                    });

                    await Promise.all(promises);
                });

                return finalizeEntry(build, args.path);
            });
        },
    };

    return plugin;
}
