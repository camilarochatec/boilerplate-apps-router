// Importamos o Molde do Next.js e o React
import type { Preview } from '@storybook/nextjs'
import React from 'react'

// Importamos o seu arquivo de estilos globais (Caminho que você anotou!)
import GlobalStyles from '../src/styles/global'

const preview: Preview = {
  // Tiramos a tag autodocs, como o professor pediu! 🚫📑

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  // 👇 Os Decorators: O "Sanduíche" do Storybook! 🥪
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    )
  ]
}

export default preview
