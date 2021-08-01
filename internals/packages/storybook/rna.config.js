import { resolveToImportMetaUrl } from '@chialab/node-resolve';

process.env.NODE_ENV = 'production';

const ADDON_EXTERNALS = [
    '@storybook/api',
    '@storybook/addons',
    '@storybook/client-api',
    '@storybook/client-logger',
    '@storybook/components',
    '@storybook/core-events',
    '@storybook/theming',
    '@storybook/addon-docs',
    'react',
    'react-dom',
    'react-is',
];

/**
 * @type {import('@chialab/rna-config-loader').Config}
 */
const config = {
    root: resolveToImportMetaUrl(import.meta.url, '.'),
    entrypoints: [
        {
            input: './src/manager/index.js',
            output: './dist/manager/index.js',
        },
        {
            input: './src/frameworks/web-components/index.js',
            output: './dist/frameworks/web-components/index.js',
        },
        {
            input: './src/addons/essentials/register.js',
            output: './dist/addons/essentials/register.js',
            external: ADDON_EXTERNALS,
        },
        {
            input: './src/addons/essentials/config.js',
            output: './dist/addons/essentials/config.js',
            external: ADDON_EXTERNALS,
        },
    ],
    format: 'esm',
    platform: 'browser',
    bundle: true,
    // minify: true,
    sourcemap: false,
    clean: true,
};

export default config;
