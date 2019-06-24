# tape-rollup-boilerplate 

A project containing a sample setup of tape for unit testing with code coverage and bundling with rollup.

## Install

```text
npm install
```

## Package Scripts

### Build

```text
npm run build
```

Will create three files in the `./dist` directory  - `*.cjs.js`, `*.esm.js`, and `*.umd.js`. 

Note that only the `*.umd.js` file is minified since it is not intended to be run through a bundler in a different project but instead used as-is. Whereas, the `.cjs.js` and `*.esm.js` files are intended to be imported either in node or another project (respectively) before being bundled according to that projects' settings.

See these links for more details:

* <https://github.com/rollup/rollup/wiki/pkg.module>
* <https://webpack.js.org/guides/author-libraries/#final-steps>
* <https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for>

### Tests

Note that `@babel/register` is used on the code before it goes to `tape` in order to facilitate the use of es6 imports with node.

```text
npm run test
```

### Coverage

```text
npm run coverage
```

## Resources

* <https://ci.testling.com/guide/tape>

### Using Rollup

* <https://github.com/rollup/rollup-starter-lib>
* <https://github.com/rollup/rollup-plugin-babel/issues/253>
* <https://github.com/rollup/rollup/wiki/pkg.module>
* <https://stackoverflow.com/questions/45327218/how-do-i-get-jest-to-run-tests-against-a-rollupbabel-build>
