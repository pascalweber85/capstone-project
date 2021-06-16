import FavoritePage from './FavoritePage'
export default {
  title: 'FavoritePage',
  component: FavoritePage,
}

const Template = args => <FavoritePage {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Völkerschlachtdenkmal',
  text: 'Sehenswürdigkeit',
}
