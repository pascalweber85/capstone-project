//@ts-check
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import Header from '../components/Header'
import FavButton from '../components/FavButton'

LocationPage.propTypes = {
  onDetail: PropTypes.func.isRequired,
}

export default function LocationPage({
  onDetail,
  locations,
  handleBookmark,
  toFavorite,
}) {
  return (
    <>
      <Header>Best Locations</Header>
      <Wrapper>
        {locations.map(
          ({ id, main_image_path, title, rating_image_path, text }) => (
            <Card
              key={id}
              id={id}
              image={main_image_path}
              title={title}
              ratingImage={rating_image_path}
              text={text}
              handleBookmark={handleBookmark}
              onDetail={() => onDetail(id)}
            />
          )
        )}
        <FavButton onClick={toFavorite}>Favoriten</FavButton>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  max-width: 600px;
`
