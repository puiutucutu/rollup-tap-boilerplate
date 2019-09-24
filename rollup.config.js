import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";
import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const babelPlugin = [
  babel({
    exclude: "node_modules/**" // only transpile current project's source code
  })
];

module.exports = [
  {
    input: "src/index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true
      },
      {
        file: pkg.module,
        format: "esm",
        exports: "named",
        sourcemap: true
      }
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      ...babelPlugin
    ]
  },
  {
    input: "src/index.js",
    output: {
      file: pkg.browser,
      format: "umd",
      name: "trb", // e.g., Tape Rollup Boilerplate,
      sourcemap: true
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      ...babelPlugin,
      terser()
    ]
  }
];
