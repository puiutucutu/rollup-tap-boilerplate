import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const babelPlugin = [
  babel({
    exclude: "node_modules/**", // only transpile source code of this project
  }),
];

module.exports = [
  {
    input: "src/index.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), json(), ...babelPlugin],
  },
  {
    input: "src/index.js",
    output: {
      file: pkg.browser,
      format: "umd",
      name: "trb", // e.g., Tap Rollup Boilerplate,
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), json(), ...babelPlugin, terser()],
  },
];
