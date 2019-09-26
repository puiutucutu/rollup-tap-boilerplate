# rollup-tap-boilerplate 

A repo containing boilerplate for new node projects. Ready for npm publishing.
 
* `tap` for unit testing 
* code coverage with `nyc` via `tap` 
* bundling with `rollup` and transpiling with `babel`
* builds `.cjs`, `.esm` and `.umd` files

## Install

```
npm install
```

## Package Scripts

### Build

```
npm run build
```

Will create three files in the `./dist` directory:

* `<FILENAME>.cjs.js`
* `<FILENAME>.esm.js`, 
* `<FILENAME>.umd.js`. 

The `umd.js` file is minified since it is intended to be used as-is.

The `cjs.js` and `esm.js` files contain transpiled javascript for ES5 environments. They are intended to be used and re-bundled by other projects.

  The difference between the `cjs.js` and `esm.js` file is that the `esm.js` file *`"[...] utilizes ES2015 module syntax but no other syntax features that aren't yet supported by browsers or node."`* - [Webpack Docs](https://webpack.js.org/guides/author-libraries/#final-steps)

See these links for more details regarding modules.

* <https://github.com/rollup/rollup/wiki/pkg.module>
* <https://webpack.js.org/guides/author-libraries/#final-steps>
* <https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for>

### Tests

```
npm run test
```

### Coverage

```
npm run coverage
```

A note on coverage.

> If the --check-coverage or --coverage-report options are provided explicitly,
  and no test files are specified, then a coverage report or coverage check will
  be run on the data from the last test run. - https://node-tap.org/docs/cli/

This means that running `tap --coverage-report=lcov` on its own will not output 
any coverage data. You need the `.nyc_output` cache from a previous full 
run`tap` in order to get code line coverage.

Note that `--coverage-report=lcov` instructs that the coverage data is output to html files instead of stdout.
  
There are at least three workarounds. This project chose work around two.

**Workaround One**

```json
{
  "scripts": {
    "coverage": "tap && tap --coverage-report=lcov"
  }
}
```
**Workaround Two**

Similar to the previous solution with the added benefit that you can 
keep the desired cli commands for running the tests separate from the cli 
commands for coverage.

```json
{
  "scripts": {
    "coverage": "npm run test && tap --coverage-report=lcov",
    "test": "tap --reporter=classic"
  }
}
```

**Workaround Three**

Explicitly list the test files. This needlessly bloats the config since 
`tap` already knows where to look for files. As an alternative, 
one could opt to use a `.taprc` config file.

```json
{
  "scripts": {
    "coverage": "tap --coverage-report=lcov src/**/tests/*.test.js",
    "test": "tap --reporter=classic"
  }
}
```

## Usage

### `.babelrc` file

* `targets` 
  * set for compatability in javascript runtime environments in `ie11` and above
  * this can be adjusted to different environments as needed (with the benefit of smaller bundle sizes) by changing this property
  * see https://babeljs.io/docs/en/next/babel-preset-env#targets
* `useBuiltIns` 
  * currently set to `usage` 
  * this instructs `babel` and `corejs` to import those polyfills actually used in your code that are missing in the target runtime environment

## Resources

* Babel
  * https://babeljs.io/docs/en/next/babel-preset-env
* Rollup
  * <https://github.com/rollup/rollup-starter-lib>
  * <https://github.com/rollup/rollup-plugin-babel/issues/253>
  * <https://github.com/rollup/rollup/wiki/pkg.module>
  * <https://stackoverflow.com/questions/45327218/how-do-i-get-jest-to-run-tests-against-a-rollupbabel-build>
* Tape
  * <https://ci.testling.com/guide/tape>
