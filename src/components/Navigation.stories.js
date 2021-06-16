import Navigation from './Navigation'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Navigation',
  component: Navigation,
}

const Template = args => (
  <BrowserRouter>
    <Navigation {...args} />
  </BrowserRouter>
)

export const Default = Template.bind({})
Default.args = {
  pages: [
    { title: 'Best Locations', path: '/' },
    { title: 'Favorites', path: '/FavoritePage' },
  ],
}
