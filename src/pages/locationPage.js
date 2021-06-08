import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import location from '../data.json'

LocationPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function LocationPage() {
  return (
    <Grid>
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
    </Grid>
  )
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`
