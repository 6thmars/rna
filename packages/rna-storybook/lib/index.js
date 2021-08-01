import { createPlugin } from './createPlugin.js';
export * from './findStories.js';
export * from './createManager.js';
export * from './createPreview.js';
export * from './transformMdxToCsf.js';
export * from './buildPlugin.js';
export * from './servePlugin.js';

export { createPlugin };

/**
 * @param {import('./createPlugin').StorybookConfig} config
 */
export function createPlugins(config) {
    return [
        createPlugin(config, 'build'),
        createPlugin(config, 'serve'),
    ];
}
