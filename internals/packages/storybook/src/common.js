import './global.js';

export function createRegisterPreviewEntry({ addDecorator, addParameters }) {
    return (entry) => {
        if (entry.decorators) {
            entry.decorators.forEach((decorator) => {
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
    };
}

export * from 'react';
export { createElement, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
export * from 'react-dom';
export * from '@storybook/api';
export { useArgs, useChannel, useGlobals, useParameter } from '@storybook/api';
export * from '@storybook/addons';
export * from '@storybook/client-logger';
export * from '@storybook/components';
export * from '@storybook/core-events';
export * from '@storybook/theming';
export { styled } from '@storybook/theming';
export * from '@storybook/addon-docs';
export {
    ArgsTable,
    Canvas,
    Description,
    DocsContext,
    DocsPage,
    DocsContainer,
    DocsStory,
    Heading,
    Meta,
    Preview,
    Primary,
    Props,
    Source,
    SourceContainer,
    Stories,
    Story,
    Subheading,
    Subtitle,
    Title,
    Wrapper
} from '@storybook/addon-docs';
export { mdx } from '@mdx-js/react';
