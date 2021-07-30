import path from 'path';
import { getRequestFilePath } from '@web/dev-server-core';
import { resolveImport } from '@chialab/wds-plugin-rna';
import { createManagerHtml, createManagerScript, createManagerStyle } from './server/createManagerHtml.js';
import { createPreviewHtml, createPreviewScript, createPreviewStyle } from './server/createPreviewHtml.js';
import { transformMdxToCsf } from './server/transformMdxToCsf.js';
import { findStories } from './server/findStories.js';

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
 * @param {string} type
 */
export function createDefaultAddons(type) {
    return {
        '@storybook/addon-docs/dist/cjs/register.js': [
            '@storybook/addon-docs/dist/cjs/frameworks/common/config.js',
            `@storybook/addon-docs/dist/cjs/frameworks/${type}/config.js`,
        ],
        '@storybook/addon-actions/dist/cjs/register.js': [],
        '@storybook/addon-backgrounds/dist/cjs/register.js': [],
        '@storybook/addon-controls/dist/cjs/register.js': [],
        '@storybook/addon-measure/dist/cjs/preset/manager.js': [],
        // '@storybook/addon-outline/dist/cjs/register.js': [],
        '@storybook/addon-toolbars/dist/cjs/register.js': [],
        '@storybook/addon-viewport/dist/cjs/register.js': [],
        '@storybook/addon-a11y/dist/cjs/register.js': [],
    };
}

/**
 * @param {StorybookOptions} options
 */
export function storybookPlugin({ type = 'web-components', stories, addons, previewScripts }) {
    const DEFAULT_ADDONS = createDefaultAddons(type);

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

            if (source.startsWith('@storybook/')) {
                return resolveImport(source, import.meta.url, serverConfig.rootDir, { code, line, column });
            }

            if (type === 'web-components') {
                if (source === 'lit-html') {
                    return resolveImport(source, import.meta.url, serverConfig.rootDir, { code, line, column });
                }
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

            if (context.URL.searchParams.get('story') !== 'true') {
                return;
            }

            const filePath = getRequestFilePath(context.url, serverConfig.rootDir);
            if (context.path.endsWith('.mdx')) {
                context.body = await transformMdxToCsf(type, context.body, filePath);
            }
        },

        async serve(context) {
            if (!serverConfig) {
                return;
            }

            if (context.path === '/') {
                return createManagerHtml();
            }

            if (context.path === '/storybook/global.js') {
                return 'globalThis.module = {};';
            }

            if (context.path === '/iframe.html') {
                return {
                    type: 'html',
                    body: await createPreviewHtml(),
                };
            }

            if (context.path.startsWith('/storybook/manager.js')) {
                return createManagerScript({
                    addons: addons || Object.keys(DEFAULT_ADDONS),
                });
            }

            if (context.path.startsWith('/storybook/manager.css')) {
                return createManagerStyle();
            }

            if (context.path.startsWith('/storybook/preview.js')) {
                const storyImports = await findStories(serverConfig.rootDir, stories);
                return createPreviewScript({
                    type,
                    previewScripts: previewScripts || Object.values(DEFAULT_ADDONS).flat(),
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
