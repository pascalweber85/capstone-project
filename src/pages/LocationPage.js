import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import location from '../data.json'
import Header from '../components/Header'

LocationPage.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      main_image_path: PropTypes.string,
      rating_image_path: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default function LocationPage() {
  return (
    <Wrapper>
      <Header>Best Locations</Header>
      <div>
        {location.map(
          ({ id, main_image_path, rating_image_path, title, text }) => (
            <Card
              key={id}
              image={main_image_path}
              title={title}
              ratingImage={rating_image_path}
              text={text}
            />
          )
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 10px;
`
