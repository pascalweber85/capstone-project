import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders name of card', () => {
    render(
      <Card
        title="V√∂lkerschlachtdenkmal"
        text="Lorem Ipsum"
        image="number of images per card"
      />
    )
    expect(
      screen.getByRole('heading', { name: 'V√∂lkerschlachtdenkmal' })
    ).toBeInTheDocument()
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(2)
  })
})
