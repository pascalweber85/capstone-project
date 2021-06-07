import Card from './Card'
import imageFile from './../Images/Völki.jpg'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  image: imageFile,
  title: 'Völkerschlachtdenkmal',
  rating: 'Stars',
  text: 'Sehenswürdigkeit',
}
