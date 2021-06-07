
  import locationPage from './locationPage'
  export default {
      title: 'locationPage',
      component: locationPage
  }
    
  const Template = args => <locationPage {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
        