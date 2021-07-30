export * as React from 'react';
export * as ReactDOM from 'react-dom';
export { mdx } from '@mdx-js/react';
export * from '@storybook/addon-docs/dist/cjs/index.js';
import '@storybook/addon-docs/dist/cjs/frameworks/common/config.js';
export const version = '6.3.6';
export function createRegisterPreviewEntry({ addDecorator, addParameters }) {
    return (entry) => {
        if (entry.decorators) {
            entry.decorators.forEach(function(decorator) {
                addDecorator(decorator, false);
            });
        }

        if (entry.parameters || entry.globals || entry.globalTypes) {
            addParameters({
                ...(entry.parameters || {}),
                globals: entry.globals,
                globalTypes: entry.globalTypes,
            }, false);
        }
    }
}
