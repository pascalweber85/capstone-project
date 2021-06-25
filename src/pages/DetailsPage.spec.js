import { render, screen } from '@testing-library/react'
import DetailsPage from './DetailsPage'

describe('DetailsPage', () => {
  it('renders number of headings and an images of the page', () => {
    render(<DetailsPage />)

    // const title = screen.getAllByRole('heading')
    // expect(title).toHaveLength(4)
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(1)
  })
})
