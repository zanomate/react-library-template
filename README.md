# react-library-template

A basic [Typescript](https://www.typescriptlang.org/) + [React](https://it.reactjs.org/) **library** template.

- *Base*
  - [react](https://github.com/facebook/react)
  - [typescript](https://github.com/Microsoft/TypeScript).

### Bundle

The project contains a custom script (`scripts/bundle.js`) that contains the whole sequence of commands that produce the bundle.
Keeping these logics away from the `package.json` file, helps keeping the bundling process easy to read and to maintain. \
Inside, [esbuild](https://esbuild.github.io/) is used to transpile TS/TSX code and create the JS bundle.
Then, [dts-bundle](https://www.npmjs.com/package/dts-bundle) is used to create a **single** *declaration file* (`.d.ts`).

- *JS bundle*
  - [shelljs](https://github.com/shelljs/shelljs)
  - [esbuild](https://esbuild.github.io/)
- *Declarations*
  - [@types/react](https://github.com/DefinitelyTyped/DefinitelyTyped).
  - [dts-bundle](https://www.npmjs.com/package/dts-bundle).

### Tests

The project integrates *Jest* and *testing-library*, allowing to write tests directly in Typescript (`.ts` and `.tsx`).

- *Jest* + *TS*
  - [jest](https://github.com/facebook/jest)
  - [ts-jest](https://github.com/kulshekhar/ts-jest)
  - [@types/jest](https://github.com/DefinitelyTyped/DefinitelyTyped).
- *Testing Library*
  - [@testing-library/react](https://github.com/testing-library/react-testing-library)
  - [@testing-library/jest-dom](https://github.com/testing-library/jest-dom)
  - [react-dom](https://github.com/facebook/react)
  - [jest-environment-jsdom](https://github.com/facebook/jest)

## Available Scripts

### `bundle`
Creates the JS bundle and the definition file inside a `/dist` directory.

### `test` and `test:watch`
Runs all the tests with *jest*.
