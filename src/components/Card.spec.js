import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders name of card', () => {
    render(<Card title="Völkerschlachtdenkmal" />)
    expect(screen.getByText('Völkerschlachtdenkmal')).toBeInTheDocument()
  })
  it('renders text of card', () => {
    render(<Card text="heading" />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
