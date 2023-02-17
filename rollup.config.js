import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "lib/index.min.js",
      format: "cjs",
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: "lib/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "lib/index.esm.min.js",
      format: "esm",
      plugins: [terser()],
      sourcemap: true,
    },
    // 生成 UMD 格式的包
    {
      file: "lib/index.umd.js",
      format: "umd",
      name: "RetryPromiseFunc",
      sourcemap: true,
    },
    {
      file: "lib/index.umd.min.js",
      format: "umd",
      name: "RetryPromiseFunc",
      plugins: [terser()],
      sourcemap: true,
    },
    // 生成 IIFE 格式的包
    {
      file: "lib/index.iife.js",
      format: "iife",
      name: "RetryPromiseFunc",
      sourcemap: true,
    },
    {
      file: "lib/index.iife.min.js",
      format: "iife",
      name: "RetryPromiseFunc",
      plugins: [terser()],
      sourcemap: true,
    },
    // 生成 AMD 格式的包
    {
      file: "lib/index.amd.js",
      format: "amd",
      name: "RetryPromiseFunc",
      sourcemap: true,
    },
    {
      file: "lib/index.amd.min.js",
      format: "amd",
      name: "RetryPromiseFunc",
      plugins: [terser()],
      sourcemap: true,
    },
    // 生成 SystemJS 格式的包
    {
      file: "lib/index.system.js",
      format: "system",
      name: "RetryPromiseFunc",
      sourcemap: true,
    },
    {
      file: "lib/index.system.min.js",
      format: "system",
      name: "RetryPromiseFunc",
      plugins: [terser()],
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};
