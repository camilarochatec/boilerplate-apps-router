import Main from '.'
import { render, screen } from '@testing-library/react'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', {
        name: /react avançado com react router dom/i
      })
    ).toBeInTheDocument()
  })
})
