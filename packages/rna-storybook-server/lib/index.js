import path from 'path';
import { getRequestFilePath } from '@web/dev-server-core';
import { resolveImport } from '@chialab/wds-plugin-rna';
import {
    findStories,
    createManagerHtml,
    createManagerScript,
    createManagerStyle,
    createPreviewHtml,
    createPreviewScript,
    createPreviewStyle,
    transformMdxToCsf,
} from '@chialab/rna-storybook-builder';

const regexpReplaceWebsocket = /<!-- injected by web-dev-server -->(.|\s)*<\/script>/m;

/**
 * @typedef {import('@web/dev-server-core').Plugin} Plugin
 */

/**
 * @typedef {Object} StorybookOptions
 * @property {string} type
 * @property {string[]} stories
 * @property {string[]} [addons]
 * @property {string[]} [previewScripts]
 */

/**
 * @param {StorybookOptions} options
 */
export function storybookPlugin({ type = 'web-components', stories, addons, previewScripts }) {
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
                return resolveImport('@chialab/storybook-static/dist/manager/index.js', import.meta.url, serverConfig.rootDir, { code, line, column });
            }

            if (source === `@storybook/${type}`) {
                return resolveImport(`@chialab/storybook-static/dist/${type}/index.js`, import.meta.url, serverConfig.rootDir, { code, line, column });
            }

            if (source === `@storybook/${type}` ||
                source === '@storybook/addon-docs' ||
                (type === 'web-components' && source === 'lit-html')) {
                return resolveImport(`@chialab/storybook-static/dist/${type}/index.js`, import.meta.url, serverConfig.rootDir, { code, line, column });
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
                return createManagerHtml();
            }

            if (context.path === '/iframe.html') {
                return {
                    type: 'html',
                    body: await createPreviewHtml(),
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
                const storyImports = await findStories(serverConfig.rootDir, stories);
                return createPreviewScript({
                    type,
                    previewScripts,
                    storyImports: storyImports.map(i => `${i}?story=true`),
                });
            }

            if (context.path.startsWith('/storybook/preview.css')) {
                return createPreviewStyle();
            }
        },
    };

    return plugin;
}
