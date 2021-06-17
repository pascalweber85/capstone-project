import Bookmark from './Bookmark'
export default {
  title: 'Bookmark',
  component: Bookmark,
}

const Template = args => <Bookmark {...args} />

export const Default = Template.bind({})
Default.args = {}
