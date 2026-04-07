const nextJest = require('next/jest')

// Diz ao Next.js onde estão os arquivos para ele carregar o .env e as configs
const createJestConfig = nextJest({
  dir: './'
})

// Configurações customizadas do Jest
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**', // 👈 Ignora as páginas do Next (serão testadas via E2E)
    '!src/lib/registry.tsx', // 👈 Ignora o boilerplate do styled-components
    '!src/app/**/layout.tsx', // Geralmente não testamos o layout base no unitário
    '!src/types/**', // 👈 Ignora os arquivos de tipos, pois eles não geram código
    '!src/**/stories.tsx',
    '!src/styles/**' // 👈 Ignora os arquivos de estilos, pois eles não geram código
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],

  // 👇 AQUI ESTÁ A SOLUÇÃO! 👇
  // Força o styled-components a usar a versão de navegador nos testes,
  // permitindo que o Jest extraia o CSS real para os Snapshots.
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}

// Junta a configuração do Next.js com a sua e exporta
module.exports = createJestConfig(customJestConfig)
