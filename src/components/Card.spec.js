import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders name of card', () => {
    render(
      <Card
        title="Völkerschlachtdenkmal"
        text="Lorem Ipsum"
        image="number of images per card"
        ratingImage="path/to/Image"
      />
    )
    expect(
      screen.getByRole('heading', { name: 'Völkerschlachtdenkmal' })
    ).toBeInTheDocument()
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(2)
  })
})
