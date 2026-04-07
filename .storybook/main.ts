import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  // 1. ONDE ESTÃO AS HISTÓRIAS?
  stories: ['../src/components/**/stories.tsx'],

  // 2. EXTENSÕES (ADDONS)
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],

  // 3. O FRAMEWORK (Next.js Puro)
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  // 4. ARQUIVOS ESTÁTICOS (Imagens, fontes, etc)
  staticDirs: ['../public'],

  // 5. A MÁGICA DOS IMPORTS ABSOLUTOS (Configuração do Professor)
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`)
    return config
  }
}

export default config
