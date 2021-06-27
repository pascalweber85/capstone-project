import Navigation from './Navigation'
import { MemoryRouter } from 'react-router-dom'

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => (
  <MemoryRouter>
    <Navigation {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  pages: [
    { title: 'Start', path: '/' },
    { title: 'Best Locations', path: '/LocationPage' },
    { title: 'Favorites', path: '/FavoritePage' },
  ],
}
