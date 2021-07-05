import { render, screen } from '@testing-library/react'
import StartPage from './StartPage'

describe('StartPage', () => {
  it('renders number of headings', () => {
    render(<StartPage />)

    const title = screen.getAllByRole('heading')
    expect(title).toHaveLength(1)
  })
})
