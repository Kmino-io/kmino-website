import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {},
  },
];
