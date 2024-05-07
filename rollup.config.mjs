import copy from "rollup-plugin-copy";
import sass from "rollup-plugin-sass";
import resolve from "@rollup/plugin-node-resolve";
import common from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import styles from "rollup-plugin-styles";

import { createRequire } from "module";

import path from "path";
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default [
  {
    input: "./ps-react-bootstrap/index.js",
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
    plugins: [
      sass({
        options: {
          includePaths: [
            path.resolve("./node_modules/@pagseguro/ps-bootstrap/sass"),
          ],
        },
      }),
      styles(),
      image({ exclude: "./src/assets/icons/*.svg" }),
      resolve(),
      common({
        exclude: [
          "./node_modules/@pagseguro/ps-react-bootstrap/",
          "./node_modules/@pagseguro/react-icons/",
        ],
      }),
      babel({ babelHelpers: "bundled" }),
      // esbuild({
      //   target: "ES2020",
      //   platform: "node",
      //   include: /\.jsx?$/,
      //   sourceMap: true,
      //   minify: false,
      //   loaders: {
      //     ".js": "jsx",
      //   },
      //   // optimizeDeps: {
      //   //   include: ["@pagseguro/react-icons"],
      //   //   esbuildOptions: {
      //   //     loader: {
      //   //       ".js": "jsx",
      //   //     },
      //   //   },
      //   // },
      // }),
      copy({
        targets: [
          {
            src: "index.d.ts",
            dest: "dist",
          },
        ],
      }),
    ],
  },
];
