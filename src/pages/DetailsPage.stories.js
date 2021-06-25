import DetailsPage from './DetailsPage'

export default {
  title: 'DetailsPage',
  component: DetailsPage,
}

const Template = args => <DetailsPage {...args} />

export const Default = Template.bind({})
Default.args = {
  details: [
    {
      öffnungszeiten: ['Montag  9:00 AM - 7:00 PM'],
    },
  ],
}
