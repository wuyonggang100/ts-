import path from "path";
import ts from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve"; //  解析第三方模块
export default {
  input: "src/type-challenges/index.ts",
  sourceMap: true,
  output: {
    exports: "auto",
    format: "cjs", // commonjs 规范 umd esm iife
    file: path.resolve(`dist/bundle.js`),
  },
  plugins: [
    ts({
      tsconfig: path.resolve(`tsconfig.json`),
    }),
    nodeResolve({
      extensions: [".js", ".ts"],
    }),
  ],
};
