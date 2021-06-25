import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './../components/Button'
import Header from './../components/Header'
import Card from './../components/Card'

FavoritePage.propTypes = {
  onDetail: PropTypes.func.isRequired,
  onNavigate: PropTypes.func,
  bookmarkedIds: PropTypes.any,
  location: PropTypes.array,
  handleBookmark: PropTypes.func,
}

export default function FavoritePage({
  onDetail,
  onNavigate,
  bookmarkedIds,
  locations,
  handleBookmark,
}) {
  const favoriteLocations = locations.filter(location =>
    bookmarkedIds.includes(location.id)
  )
  return (
    <>
      <div>
        <BackButton onClick={onNavigate}>&lt; back</BackButton>
      </div>
      <Header>Favorites</Header>
      <Wrapper>
        {favoriteLocations.length > 0
          ? favoriteLocations.map(
              ({ id, main_image_path, title, rating_image_path, text }) => (
                <Card
                  key={id}
                  id={id}
                  image={main_image_path}
                  title={title}
                  ratingImage={rating_image_path}
                  text={text}
                  handleBookmark={handleBookmark}
                  isBookmarked={true}
                  onDetail={() => onDetail(id)}
                />
              )
            )
          : 'Du hast noch keine Location ausgewählt!'}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  max-width: 600px;
  padding: 10px;
  color: whitesmoke;
`
const BackButton = styled(Button)`
  position: absolute;
  left: 2em;
  top: 3em;
`
