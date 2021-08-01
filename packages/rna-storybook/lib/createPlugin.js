import { buildPlugin } from './buildPlugin.js';
import { servePlugin } from './servePlugin.js';

/**
 * @typedef {'build'|'serve'} StorybookMode
 */

/**
 * @typedef {Object} StorybookConfig
 * @property {string} type
 * @property {string[]} stories
 * @property {string[]} [addons]
 * @property {string[]} [managerEntries]
 * @property {string[]} [previewEntries]
 * @property {string} [managerHead]
 * @property {string} [previewHead]
 * @property {string} [previewBody]
 */

/**
 * @param {StorybookConfig} config
 * @param {StorybookMode} mode
 */
export function createPlugin(config, mode) {
    if (mode === 'build') {
        return buildPlugin(config);
    }
    if (mode === 'serve') {
        return servePlugin(config);
    }

    throw new Error('Invalid mode. Supported values are "build" and "serve".')
}
