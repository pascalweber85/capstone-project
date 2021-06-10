import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import locations from '../data.json'
import Header from '../components/Header'

LocationPage.propTypes = {
  onDetail: PropTypes.func.isRequired,
}

export default function LocationPage({ onDetail }) {
  return (
    <Wrapper>
      <Header>Best Locations</Header>
      <div>
        {locations.map(
          ({ id, main_image_path, title, rating_image_path, text }) => (
            <Card
              key={id}
              image={main_image_path}
              title={title}
              ratingImage={rating_image_path}
              text={text}
              onDetail={onDetail}
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
