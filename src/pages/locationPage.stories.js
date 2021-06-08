import LocationPage from './LocationPage'

export default {
  title: 'LocationPage',
  component: LocationPage,
}

const Template = args => <LocationPage {...args} />

export const Default = Template.bind({})
Default.args = {}
