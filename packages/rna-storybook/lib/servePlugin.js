import path from 'path';
import { getRequestFilePath } from '@web/dev-server-core';
import { CSS_EXTENSIONS } from '@chialab/node-resolve';
import { resolveImport } from '@chialab/wds-plugin-rna';
import { findStories } from './findStories.js';
import { createManagerHtml, createManagerScript, createManagerStyle } from './createManager.js';
import { createPreviewHtml, createPreviewScript, createPreviewStyle } from './createPreview.js';
import { transformMdxToCsf } from './transformMdxToCsf.js';

const regexpReplaceWebsocket = /<!-- injected by web-dev-server -->(.|\s)*<\/script>/m;

/**
 * @typedef {import('@web/dev-server-core').Plugin} Plugin
 */

/**
 * @typedef {Object} StorybookServeOptions
 * @property {string} type
 * @property {string[]} stories
 * @property {string[]} [addons]
 * @property {string[]} [managerScripts]
 * @property {string[]} [previewScripts]
 * @property {string} [managerHead]
 * @property {string} [previewHead]
 * @property {string} [previewBody]
 */

/**
 * @param {StorybookServeOptions} options
 */
export function servePlugin({ type, stories: storiesPattern, addons = [], managerScripts = [], previewScripts = [], managerHead, previewHead, previewBody }) {
    /**
     * @type {import('@web/dev-server-core').DevServerCoreConfig}
     */
    let serverConfig;

    /**
     * @type {string[]}
     */
    const managerModules = ['/manager.js'];

    /**
     * @type {string[]}
     */
    const previewModules = ['/preview.js'];

    /**
     * @type {Plugin}
     */
    const plugin = {
        name: 'rna-storybook',

        serverStart(args) {
            serverConfig = args.config;
        },

        resolveMimeType(context) {
            if (context.URL.searchParams.get('story') !== 'true') {
                return;
            }

            if (context.path.endsWith('.mdx')) {
                return 'js';
            }
        },

        transformImport({ source, context }) {
            if (context.response.is('js') && CSS_EXTENSIONS.includes(path.extname(source))) {
                return `${source}?module=style`;
            }
        },

        async resolveImport({ source, context, code, line, column }) {
            if (source === '@storybook/manager') {
                return await resolveImport('../storybook/manager/index.js', import.meta.url, serverConfig.rootDir, { code, line, column });
            }

            if (source === `@storybook/${type}`) {
                return await resolveImport(`../storybook/${type}/index.js`, import.meta.url, serverConfig.rootDir, { code, line, column });
            }

            const rootDir = serverConfig.rootDir;
            const filePath = decodeURIComponent(getRequestFilePath(context.url, rootDir));
            const bundledModules = [
                `@storybook/${type}`,
                '@storybook/api',
                '@storybook/addons',
                '@storybook/client-logger',
                '@storybook/components',
                '@storybook/core-events',
                '@storybook/theming',
                '@storybook/addon-docs',
                'react',
                'react-dom',
                'react-is',
            ];

            if (type === 'web-components') {
                bundledModules.push('lit-html');
            }

            if (bundledModules.includes(source)) {
                if (managerModules.includes(filePath)) {
                    return resolveImport('../storybook/manager/index.js', import.meta.url, serverConfig.rootDir, { code, line, column });
                }

                if (previewModules.includes(filePath)) {
                    return resolveImport(`../storybook/${type}/index.js`, import.meta.url, serverConfig.rootDir, { code, line, column });
                }
            }

            const url = await resolveImport(source, filePath, rootDir, { code, line, column });
            const fullSpec = path.resolve(path.dirname(filePath), url);
            if (context.path === '/manager.js' || managerModules.includes(filePath)) {
                managerModules.push(fullSpec);
            } else if (context.path === '/preview.js' || previewModules.includes(filePath)) {
                previewModules.push(fullSpec);
            }
        },

        async transform(context) {
            if (typeof context.body !== 'string') {
                return;
            }

            if (context.path === '/') {
                // replace the injected websocket script to avoid reloading the manager in watch mode
                context.body = context.body.replace(regexpReplaceWebsocket, '');
                return;
            }

            if (context.URL.searchParams.get('story') === 'true') {
                const filePath = getRequestFilePath(context.url, serverConfig.rootDir);
                if (context.path.endsWith('.mdx')) {
                    context.body = await transformMdxToCsf(type, context.body, filePath);
                }
            }
        },

        async serve(context) {
            if (!serverConfig) {
                return;
            }

            if (context.path === '/') {
                return createManagerHtml({
                    managerHead,
                    css: {
                        path: '/manager.css',
                    },
                    js: {
                        path: '/manager.js',
                        type: 'module',
                    },
                });
            }

            if (context.path === '/iframe.html') {
                return {
                    type: 'html',
                    body: await createPreviewHtml({
                        previewHead,
                        previewBody,
                        css: {
                            path: '/preview.css',
                        },
                        js: {
                            path: '/preview.js',
                            type: 'module',
                        },
                    }),
                };
            }

            if (context.path.startsWith('/manager.js')) {
                return createManagerScript({
                    addons,
                    managerScripts,
                });
            }

            if (context.path.startsWith('/manager.css')) {
                return createManagerStyle();
            }

            if (context.path.startsWith('/preview.js')) {
                const stories = await findStories(serverConfig.rootDir, storiesPattern);
                previewModules.push(...stories);
                return createPreviewScript({
                    type,
                    stories: stories
                        .map((storyFilePath) => `./${path.relative(
                            serverConfig.rootDir,
                            storyFilePath
                        ).split(path.sep).join('/')}`)
                        .map(i => `${i}?story=true`),
                    previewScripts,
                });
            }

            if (context.path.startsWith('/preview.css')) {
                return createPreviewStyle();
            }
        },
    };

    return plugin;
}
