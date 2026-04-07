import * as S from './styles'

// 1. Criamos a tipagem (o contrato que garante que é texto!) ✨
export type MainProps = {
  title?: string
  description?: string
}

// 2. Conectamos o : MainProps logo após as chaves de fechamento dos parâmetros 👇
const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}: MainProps) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
