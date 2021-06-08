import { render, screen } from '@testing-library/react'
import LocationPage from './LocationPage'

describe('LocationPage', () => {
  it('renders', () => {
    render(<LocationPage />)
    expect(screen.getByText('LocationPage')).toBeInTheDocument()
  })
})
