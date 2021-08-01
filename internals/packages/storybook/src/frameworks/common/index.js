export * from '../../common.js';
export { useMemo, useEffect } from '@storybook/addons';
export * from '@storybook/client-api';
export { useAddonState } from '@storybook/client-api';
export * from '@storybook/addon-docs';

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
