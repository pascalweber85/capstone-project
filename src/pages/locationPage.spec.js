import { render, screen } from '@testing-library/react'
import LocationPage from './LocationPage'

describe('LocationPage', () => {
  it('renders a list of locations with a title and an image', () => {
    render(
      <LocationPage
        anyLocation={[
          {
            title: 'Völki',
            image: 'bild',
          },
          {
            title: 'Zoo',
            image: 'bild2',
          },
        ]}
      />
    )

    const title = screen.getAllByRole('heading')
    expect(title).toHaveLength(20)
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(38)
  })
})
