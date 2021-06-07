import location from './data.json'
import Card from './components/Card'

export default function App() {
  return (
    <div>
      {location.map(location => {
        const { id, attributes } = location
        return (
          <Card
            key={id}
            image={attributes.main_image_path}
            title={attributes.title}
            image2={attributes.rating_image_path}
            text={attributes.text}
          />
        )
      })}
    </div>
  )
}
