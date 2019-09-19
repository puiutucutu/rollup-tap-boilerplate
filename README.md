# tape-rollup-boilerplate 

A project containing boilerplate for new node projects. Ready for npm publishing.
 
* `tape` for unit testing 
* code coverage with `nyc` 
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

Note that only the `umd.js` file is minified since it is not intended to be run through a bundler in a different project but instead used as-is. 

The `cjs.js` and `esm.js` files will be transpiled with the expectation that they will be imported in another node project before being bundled according to that projects' settings.

The difference between the `cjs.js` and `esm.js` file is that the `esm.js` file

> "[...] utilizes ES2015 module syntax but no other syntax features that aren't yet supported by browsers or node."
* https://webpack.js.org/guides/author-libraries/#final-steps

See these links for more details regarding modules.

* <https://github.com/rollup/rollup/wiki/pkg.module>
* <https://webpack.js.org/guides/author-libraries/#final-steps>
* <https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for>

### Tests

Note that `@babel/register` is used on the code before it goes to `tape` in order to facilitate the use of es6 imports with node.

```
npm run test
```

### Coverage

```
npm run coverage
```

## Resources

* <https://ci.testling.com/guide/tape>

### Using Rollup

* <https://github.com/rollup/rollup-starter-lib>
* <https://github.com/rollup/rollup-plugin-babel/issues/253>
* <https://github.com/rollup/rollup/wiki/pkg.module>
* <https://stackoverflow.com/questions/45327218/how-do-i-get-jest-to-run-tests-against-a-rollupbabel-build>
