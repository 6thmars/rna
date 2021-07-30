import path from 'path';
import { getRequestFilePath } from '@web/dev-server-core';
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
 * @property {string[]} [previewScripts]
 * @property {string} [managerHead]
 * @property {string} [previewHead]
 * @property {string} [previewBody]
 */

/**
 * @param {StorybookServeOptions} options
 */
export function servePlugin({ type, stories: storiesPattern, addons, previewScripts, managerHead, previewHead, previewBody }) {
    /**
     * @type {import('@web/dev-server-core').DevServerCoreConfig}
     */
    let serverConfig;

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

        async resolveImport({ source, code, line, column }) {
            if (source.startsWith('/storybook/')) {
                return source;
            }

            if (source === '@storybook/manager') {
                return resolveImport('../storybook/manager/index.js', import.meta.url, serverConfig.rootDir, { code, line, column });
            }

            if (source === `@storybook/${type}`) {
                return resolveImport(`../storybook/${type}/index.js`, import.meta.url, serverConfig.rootDir, { code, line, column });
            }

            if (source === `@storybook/${type}` ||
                source === '@storybook/addon-docs' ||
                (type === 'web-components' && source === 'lit-html')) {
                return resolveImport(`../storybook/${type}/index.js`, import.meta.url, serverConfig.rootDir, { code, line, column });
            }
        },

        async transformImport({ source, context }) {
            const filePath = getRequestFilePath(context.url, serverConfig.rootDir);
            const modulePath = path.resolve(path.dirname(filePath), source);
            if (modulePath.includes('/@storybook/')) {
                return source.replace('/dist/esm/', '/dist/cjs/');
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
                        path: '/storybook/manager.css',
                    },
                    js: {
                        path: '/storybook/manager.js',
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
                            path: '/storybook/preview.css',
                        },
                        js: {
                            path: '/storybook/preview.js',
                            type: 'module',
                        },
                    }),
                };
            }

            if (context.path.startsWith('/storybook/manager.js')) {
                return createManagerScript({
                    addons,
                });
            }

            if (context.path.startsWith('/storybook/manager.css')) {
                return createManagerStyle();
            }

            if (context.path.startsWith('/storybook/preview.js')) {
                const stories = await findStories(serverConfig.rootDir, storiesPattern);
                return createPreviewScript({
                    type,
                    stories: stories
                        .map((storyFilePath) => `./${path.relative(
                            path.join(serverConfig.rootDir, 'storybook'),
                            storyFilePath
                        ).split(path.sep).join('/')}`)
                        .map(i => `${i}?story=true`),
                    previewScripts,
                });
            }

            if (context.path.startsWith('/storybook/preview.css')) {
                return createPreviewStyle();
            }
        },
    };

    return plugin;
}
