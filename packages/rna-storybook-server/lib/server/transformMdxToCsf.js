import mdx from '@mdx-js/mdx';
import esbuild from 'esbuild';
import { createCompiler } from '@storybook/csf-tools/mdx.js';
import { resolve } from '@chialab/wds-plugin-rna';

const compilers = [createCompiler({})];

/**
 * @param {string} type
 * @param {string} body
 * @param {string} filePath
 */
export async function transformMdxToCsf(type, body, filePath) {
    const reactImport = await resolve('react', import.meta.url);
    const mdxImport = await resolve('@mdx-js/react', import.meta.url);
    const { code } = await esbuild.transform(`import React from '${reactImport}';
import { mdx } from '${mdxImport}';

${await mdx(body, { compilers, filepath: filePath })}
`, { loader: 'jsx', sourcemap: false, tsconfigRaw: '{}' });

    console.log(code);
    return code;
}
