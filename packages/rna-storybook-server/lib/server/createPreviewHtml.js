/**
 * @typedef {Object} PreviewOptions
 * @property {string} [previewHead]
 * @property {string} [previewBody]
 */

/**
 * @typedef {Object} PreviewScriptOptions
 * @property {string} type
 * @property {string[]} storyImports
 * @property {string[]} [previewScripts]
 */

/**
 * @param {PreviewScriptOptions} options
 */
export async function createPreviewScript({
    type,
    storyImports = [],
    previewScripts = [],
}) {
    return `import '/storybook/global.js';
import { configure, addDecorator, addParameters } from '@storybook/${type}';
${previewScripts.map((previewScript, index) => `import * as preview${index} from '${previewScript}';`).join('\n')}
${storyImports.map((s, i) => `import * as stories${i} from '${s}';`).join('\n')}

function loadPlugin(m) {
    if (m.decorators) {
        m.decorators.forEach(function(decorator) {
            addDecorator(decorator, false);
        });
    }

    if (m.parameters || m.globals || m.globalTypes) {
        addParameters({
            ...(m.parameters || {}),
            globals: m.globals,
            globalTypes: m.globalTypes,
        }, false);
    }
}

${previewScripts.map((previewScript, index) => `loadPlugin(preview${index});`).join('\n')}

setTimeout(() => {
    configure(() => [${storyImports.map((s, i) => `stories${i}`)}], {}, false);
});

try {
    if (window.top !== window) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.top.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__ = window.top.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        window.top.__VUE_DEVTOOLS_CONTEXT__ = window.document;
    }
} catch (e) {
    console.warn('unable to connect to top frame for connecting dev tools');
}`;
}

export function createPreviewStyle() {
    return `:not(.sb-show-main) > .sb-main,
:not(.sb-show-nopreview) > .sb-nopreview,
:not(.sb-show-errordisplay) > .sb-errordisplay {
    display: none;
}

.sb-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;
    overflow: auto;
}

.sb-heading {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.2px;
    margin: 10px 0;
    padding-right: 25px;
}

.sb-nopreview {
    display: flex;
    align-content: center;
    justify-content: center;
}

.sb-nopreview_main {
    margin: auto;
    padding: 30px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.03);
}

.sb-nopreview_heading {
    text-align: center;
}

.sb-errordisplay {
    border: 20px solid rgb(187, 49, 49);
    background: #222;
    color: #fff;
    z-index: 999999;
}

.sb-errordisplay_code {
    padding: 10px;
    background: #000;
    color: #eee;
    font-family: 'Operator Mono', 'Fira Code Retina', 'Fira Code', 'FiraCode-Retina', 'Andale Mono', 'Lucida Console', Consolas, Monaco, monospace;
}

.sb-errordisplay pre {
    white-space: pre-wrap;
}`;
}

/**
 * @param {PreviewOptions} [options]
 */
export async function createPreviewHtml({
    previewHead = '',
    previewBody = '',
} = {}) {
    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Storybook</title>
        <base target="_parent" />
        <link rel="stylesheet" href="/storybook/preview.css">
        ${previewHead || ''}
    </head>
    <body>
        ${previewBody || ''}
        <div id="root"></div>
        <div id="docs-root"></div>
        <div class="sb-errordisplay sb-wrapper">
            <div id="error-message" class="sb-heading"></div>
            <pre class="sb-errordisplay_code"><code id="error-stack"></code></pre>
        </div>
        <script type="module" src="/storybook/preview.js"></script>
    </body>
</html>`;
}
