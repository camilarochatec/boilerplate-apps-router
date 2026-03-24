import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginNext from '@next/eslint-plugin-next'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
  { ignores: ['.next/', 'coverage/', 'jest.config.js'] },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    plugins: {
      '@next/next': pluginNext,
      'react-hooks': pluginReactHooks
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        React: 'writable'
      }
    },
    // 👈 1. AVISANDO A VERSÃO DO REACT PARA SUMIR AQUELE AVISO CHATO!
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // 👈 2. MUDAMOS DE "warn" PARA "error"! Agora o commit é bloqueado se tiver variável sem uso!
      '@typescript-eslint/no-unused-vars': 'error',

      // 👈 3. LIGAMOS A REGRA "no-undef" COMO ERRO! Nenhuma variável fantasma passa mais!
      'no-undef': 'error'
    }
  },

  eslintConfigPrettier
])
