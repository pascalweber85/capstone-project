import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('render a children', () => {
    const { container } = render(<Header>Hello</Header>)
    expect(container.firstChild).toHaveTextContent('Hello')
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
