'use client'

import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: black;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
// Exporta um componente <img> com estilos aplicados.
export const Logo = styled.img`
  width: 25rem; // Define a largura da imagem.
  margin-bottom: 2rem; // Dá um espaço para baixo.
`

// Exporta um componente <h1> para o título.
export const Title = styled.h1`
  font-size: 2.5rem; // Deixa a fonte bem grande.
`

// Exporta um componente <h2> para o subtítulo/descrição.
export const Description = styled.h2`
  font-size: 2rem; // Tamanho um pouco menor que o título.
  font-weight: 400; // Deixa a fonte mais fina (sem negrito forte).
`

// Exporta outra <img> para a ilustração principal.
export const Illustration = styled.img`
  margin-top: 3rem; // Dá um espaço para cima.
  width: min(
    30rem,
    100%
  ); // Usa 30rem de largura, mas se a tela for menor, ocupa 100% (responsivo!).
`
