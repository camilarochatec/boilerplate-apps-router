import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // 1. Trazemos o "container" (a div raiz) para podermos fotografar depois
    const { container } = render(<Main />)

    // 2. Seu teste original continua aqui, firme e forte! 💪
    expect(
      screen.getByRole('heading', {
        name: /React Avançado/i
      })
    ).toBeInTheDocument()

    // 3. 📸 O MOMENTO DA FOTO! É isso aqui que vai criar a sua pasta! 👇
    expect(container.firstChild).toMatchSnapshot()
  })
})
