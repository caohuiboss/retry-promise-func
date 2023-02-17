import typescript from 'rollup-plugin-typescript2';
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      exports: "auto",
      sourcemap: true,
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
      exports: "auto",
      sourcemap: true,
    },
    {
      file: "lib/index.umd.js",
      format: "umd",
      exports: "auto",
      name: "RetryPromiseFunc",
      sourcemap: true,
    },
    {
      file: "lib/index.iife.js",
      format: "iife",
      exports: "auto",
      name: "RetryPromiseFunc",
      sourcemap: true,
    },
    {
      file: "lib/index.amd.js",
      format: "amd",
      exports: "auto",
      name: "RetryPromiseFunc",
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
      },
    }),
  ],
};
