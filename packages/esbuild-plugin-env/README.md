<p align="center">
    <strong>Esbuild Plugin Env</strong> • Define all environement variables for <a href="https://esbuild.github.io/">esbuild</a>.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@chialab/esbuild-plugin-env"><img alt="NPM" src="https://img.shields.io/npm/v/@chialab/esbuild-plugin-env.svg?style=flat-square"></a>
</p>

---

## Install

```sh
$ npm i @chialab/esbuild-plugin-env -D
$ yarn add @chialab/esbuild-plugin-env -D
```

## Usage

```js
import esbuild from 'esbuild';
import envPlugin from '@chialab/esbuild-plugin-env';

await esbuild.build({
    plugins: [
        envPlugin(),
    ],
});
```

---

## License

**Esbuild Plugin Env** is released under the [MIT](https://github.com/chialab/rna/blob/master/packages/esbuild-plugin-env/LICENSE) license.
