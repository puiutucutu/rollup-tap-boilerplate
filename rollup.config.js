import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const babelPlugin = [
  babel({
    exclude: "node_modules/**" // only transpile our source code
  })
];

module.exports = [
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs", exports: "named" },
      { file: pkg.module, format: "es", exports: "named" }
    ],
    plugins: [...babelPlugin]
  },
  {
    input: "src/index.js",
    output: {
      file: pkg.browser,
      format: "umd",
      name: "TRB" // Tape Rollup Boilerplate
    },
    plugins: [resolve(), ...babelPlugin, commonjs(), terser()]
  }
];
