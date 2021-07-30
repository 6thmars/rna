import path from 'path';

process.env.NODE_ENV = 'production';

/**
 * @type {import('@chialab/rna-config-loader').Config}
 */
const config = {
    root: path.dirname(import.meta.url.replace('file://', '')),
    entrypoints: [
        {
            input: './src/manager/index.js',
            output: './dist/manager/index.js',
        },
        {
            input: './src/web-components/index.js',
            output: './dist/web-components/index.js',
        },
    ],
    format: 'esm',
    bundle: true,
    minify: true,
    sourcemap: false,
    clean: true,
};

export default config;
