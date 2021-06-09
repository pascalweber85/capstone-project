import LocationPage from './LocationPage'
import picture from './../Images/Affe.jpg'
import stars from './../Images/stars.jpg'

export default {
  title: 'LocationPage',
  component: LocationPage,
}

const Template = args => <LocationPage {...args} />

export const listedLocations = Template.bind({})
listedLocations.args = {
  Locations: [
    {
      main_image_path: picture,
      rating_image_path: stars,
      title: 'Header',
      text: 'Description',
    },
  ],
}
