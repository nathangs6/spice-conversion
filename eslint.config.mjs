import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  //pluginJs.configs.recommended,
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
  },
  {
    files: ["src/**/*.js", "tests/**/*.js"],
    ignores: ["**/*.config.js"],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-redeclare': 'error',
      'no-console': 'error'
    },
  }
];