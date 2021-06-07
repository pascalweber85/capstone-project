import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders text and author', () => {
    render(<Card text="this is text" author="John Doe" />)
    expect(screen.getByText('this is text', 'John Doe')).toBeInTheDocument()
  })
})
