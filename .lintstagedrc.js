module.exports = {
  // 👇 Olha o mjs e o cjs aqui agora!
  '*.{js,mjs,cjs,jsx,ts,tsx}': [
    'npx prettier --write',
    'npx eslint --fix',
    'npm run test -- --findRelatedTests --passWithNoTests'
  ]
}
