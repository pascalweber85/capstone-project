import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import location from '../data.json'
import Header from '../components/Header'

LocationPage.propTypes = {
  title: PropTypes.string,
}

export default function LocationPage({ title }) {
  return (
    <Grid>
      <Header>
        <h2>Best Locations</h2>
      </Header>
      <div>
        {location.map(location => {
          const { id, attributes } = location
          return (
            <Card
              key={id}
              image={attributes.main_image_path}
              title={attributes.title}
              ratingimage={attributes.rating_image_path}
              text={attributes.text}
            />
          )
        })}
      </div>
    </Grid>
  )
}

const Grid = styled.section`
  padding: 10px;
`
