import { render, screen } from '@testing-library/react'
import FavoritePage from './FavoritePage'

describe('FavoritePage', () => {
  it('renders number of headings and an images of the page', () => {
    render(<FavoritePage />)

    const title = screen.getAllByRole('heading')
    expect(title).toHaveLength(4)
    const image = screen.getAllByRole('img')
    expect(image).toBeInTheDocument()
  })
})
