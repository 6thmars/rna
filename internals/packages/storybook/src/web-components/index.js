import '../global.js';
import { createRegisterPreviewEntry } from '../common.js';
export { html } from 'lit-html';
import * as framework from '@storybook/web-components/dist/cjs/client/index.js';
import * as commonConfig from '@storybook/addon-docs/dist/cjs/frameworks/common/config.js';
import * as wcConfig from '@storybook/addon-docs/dist/cjs/frameworks/web-components/config.js';

export const registerPreviewEntry = createRegisterPreviewEntry(framework);
registerPreviewEntry(commonConfig);
registerPreviewEntry(wcConfig);

export * from '../common.js';
export * from '@storybook/web-components/dist/cjs/client/index.js';
