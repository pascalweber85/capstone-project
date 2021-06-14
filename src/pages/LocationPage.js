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
    <>
      <Header>Best Locations</Header>
      <Wrapper>
        {locations.map(
          ({
            id,
            main_image_path,
            title,
            rating_image_path,
            text,
            öffnungszeiten,
            beschreibung,
          }) => (
            <Card
              key={id}
              image={main_image_path}
              title={title}
              ratingImage={rating_image_path}
              text={text}
              onDetail={() =>
                onDetail(title, main_image_path, öffnungszeiten, beschreibung)
              }
            />
          )
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  max-width: 600px;
`
