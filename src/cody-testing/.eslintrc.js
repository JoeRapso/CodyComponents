module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    // 'plugin:vue/vue3-strongly-recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: "off",
    'linebreak-style': "off",
    indent: 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'prefer-promise-reject-errors': 'off',
    'max-len': 'off',
    'lines-between-class-members': 'off',
    'object-curly-newline': 'off',
    'import/no-cycle': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
