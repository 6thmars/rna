/**
 * @typedef {Object} ManagerOptions
 * @property {string} [managerHead]
 */

/**
 * @typedef {Object} ManagerScriptOptions
 * @property {string[]} [addons]
 */

/**
 * @param {ManagerScriptOptions} [options]
 */
export function createManagerScript({ addons = [] } = {}) {
    return `import '/storybook/global.js';
import '@storybook/core-client/dist/cjs/globals/polyfills.js';
import '@storybook/core-client/dist/cjs/manager/index.js';
${addons.map((a) => `import '${a}';`).join('\n')}`;
}

export function createManagerStyle() {
    return `html,
body {
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

#root[hidden],
#docs-root[hidden] {
    display: none !important;
}`;
}

/**
 * @param {ManagerOptions} [options]
 */
export function createManagerHtml({ managerHead = '' } = {}) {
    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Storybook</title>
        <link href="/storybook/manager.css" rel="stylesheet">
        ${managerHead || ''}
    </head>
    <body>
        <div id="root"></div>
        <div id="docs-root"></div>
        <script type="module" src="/storybook/manager.js"></script>
    </body>
</html>`;
}
