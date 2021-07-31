import mdx from '@mdx-js/mdx';
import esbuild from 'esbuild';
import { createCompiler } from '@storybook/csf-tools/mdx.js';

const compilers = [createCompiler({})];

/**
 * @param {string} type
 * @param {string} body
 * @param {string} filePath
 */
export async function transformMdxToCsf(type, body, filePath) {
    const { code } = await esbuild.transform(`import React, { mdx } from '@storybook/${type}';

${await mdx(body, { compilers, filepath: filePath })}
`, { loader: 'jsx', sourcemap: false, tsconfigRaw: '{}' });

    return code;
}
