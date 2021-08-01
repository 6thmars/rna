import typescript from 'typescript';
import path from 'path';
import { pipe } from '@chialab/estransform';
import { getEntry, finalizeEntry, createFilter } from '@chialab/esbuild-plugin-transform';
import { create } from '@custom-elements-manifest/analyzer/src/create.js';

/**
 * @typedef {Object} PluginOptions
 * @property {*[]} [plugins]
 */

/**
 * @param {PluginOptions} [options]
 * @return An esbuild plugin.
 */
export default function({ plugins = [] } = {}) {
    /**
     * @type {import('esbuild').Plugin}
     */
    const plugin = {
        name: 'rna-storybook-wc-manifest',
        setup(build) {
            const options = build.initialOptions;

            build.onLoad({ filter: createFilter(build), namespace: 'file' }, async (args) => {
                if (args.path.includes('/node_modules/')) {
                    return;
                }

                /**
                 * @type {import('@chialab/estransform').Pipeline}
                 */
                const entry = args.pluginData || await getEntry(build, args.path);

                const modules = [
                    typescript.createSourceFile(args.path, entry.contents, typescript.ScriptTarget.ES2015, true),
                ];

                const customElementsManifest = create({ modules, plugins });
                if (!customElementsManifest.modules || customElementsManifest.modules.length === 0) {
                    return;
                }

                customElementsManifest.modules.forEach((mod) => {
                    if (!mod.declarations) {
                        return;
                    }

                    mod.declarations
                        .filter(
                            /** @param {*} decl */
                            (decl) => decl.customElement && decl.attributes && decl.members
                        )
                        .forEach(
                            /** @param {*} decl */
                            (decl) => {
                                decl.attributes.forEach(
                                    /** @param {*} attr */
                                    (attr) => {
                                        const member = decl.members.find(
                                            /** @param {*} m */
                                            (m) => m.name === attr.fieldName
                                        );
                                        if (!member) {
                                            return member;
                                        }

                                        attr.name += ' ';
                                        attr.description = `🔗 **${member.name}**`;
                                        attr.type = undefined;
                                        attr.default = undefined;
                                    }
                                );
                            }
                        );
                });

                await pipe(entry, {
                    source: path.basename(args.path),
                    sourcesContent: options.sourcesContent,
                }, async ({ magicCode }) => {
                    magicCode.prepend('import * as __STORYBOOK_WEB_COMPONENTS__ from \'@storybook/web-components\';\n');
                    magicCode.append(`
;(function() {
    const { getCustomElements, setCustomElementsManifest } = __STORYBOOK_WEB_COMPONENTS__;
    if (!setCustomElementsManifest) {
        console.debug('Custom Element Manifest is not supported by this version of Storybook.');
        return;
    }

    const CUSTOM_ELEMENT_JSON = ${JSON.stringify(customElementsManifest)};
    const CUSTOM_ELEMENTS_JSON = getCustomElements() || {};
    setCustomElementsManifest({
        ...CUSTOM_ELEMENTS_JSON,
        ...CUSTOM_ELEMENT_JSON,
        modules: [
            ...(CUSTOM_ELEMENTS_JSON.modules || []),
            ...(CUSTOM_ELEMENT_JSON.modules || []),
        ],
    });
}())`);
                });

                return finalizeEntry(build, args.path);
            });
        },
    };

    return plugin;
}
