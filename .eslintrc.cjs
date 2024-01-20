module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'global-require': 'off',
    'newline-per-chained-call': 'off',
    'import/no-dynamic-require': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'class-methods-use-this': 'off',
    indent: ['error', 2]

  }

}
