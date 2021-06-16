import FavButton from './FavButton'

export default {
  title: 'FavButton',
  component: FavButton,
}

const Template = args => <FavButton {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  children: 'als Favorite speichern',
}
