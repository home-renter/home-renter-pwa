import next from 'eslint-config-next'
import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

const config = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-unused-vars': 'warn',
    },
  },
  ...next,
]

export default config
