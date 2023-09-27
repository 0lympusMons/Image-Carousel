
const { off } = require("process");

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },

    },

    {
      files: [
        '.eslintrc.js',
      ],
      rules: {
        // Turn off ESLint for this file
        // Not working
        'eslint-disable': 'off',
      },
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "no-console": "off",
  },

};
