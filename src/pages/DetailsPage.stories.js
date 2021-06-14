import DetailsPage from './DetailsPage'
export default {
  title: 'DetailsPage',
  component: DetailsPage,
}

const Template = args => <DetailsPage {...args} />

export const Default = Template.bind({})
Default.args = {}
