import path from 'path';
import glob from 'fast-glob';

/**
 * @param {string} rootDir
 * @param {string[]} storiesPatterns
 */
export async function findStories(rootDir, storiesPatterns) {
    const storyPaths = await glob(storiesPatterns, { cwd: rootDir, absolute: false });
    const storyFilePaths = storyPaths.map((p) => path.join(rootDir, p.split('/').join(path.sep)));
    const storyImports = storyFilePaths.map((storyFilePath) => `./${path.relative(path.join(rootDir, 'storybook'), storyFilePath).split(path.sep).join('/')}`);

    return storyImports;
}
