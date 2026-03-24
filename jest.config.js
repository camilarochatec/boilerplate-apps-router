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
    '!src/app/**/layout.tsx' // Geralmente não testamos o layout base no unitário
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}

// Junta a configuração do Next.js com a sua e exporta
module.exports = createJestConfig(customJestConfig)
