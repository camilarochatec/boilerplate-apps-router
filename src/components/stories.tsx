// 1. IMPORTANDO AS FERRAMENTAS DO STORYBOOK
// Meta: Configura as regras do componente inteiro.
// StoryObj: Cria as variações (histórias) do componente.
import { Meta, StoryObj } from '@storybook/react'

// 2. IMPORTANDO O SEU COMPONENTE
// O '.' significa "pegue o arquivo index.tsx que está nesta mesma pasta"
import Main from '.'

// 3. O "RG" DO SEU COMPONENTE (Export default)
export default {
  // title: É como ele vai aparecer no menu lateral do Storybook (ex: Components / Main)
  title: 'Components/Main',

  // component: Avisamos quem é a estrela do show
  component: Main,

  // parameters: Regras extras só para esse componente
  parameters: {
    // layout: 'fullscreen' tira as bordas em branco (padding) que o Storybook coloca
    // em volta do componente por padrão. Ótimo para componentes de página inteira!
    layout: 'fullscreen'
  }
} as Meta

// 4. CRIANDO UMA HISTÓRIA (Uma variação)
// Aqui criamos uma variação chamada "Default" (Padrão).
// Como está vazio {}, ele vai renderizar o <Main /> exatamente do jeito que ele é!
export const Default: StoryObj = {
  args: {
    description: 'descrição',
    title: 'nova descrição'
  }
}
