import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Header from './../components/Header'
import Card from './../components/Card'

FavoritePage.propTypes = {
  onDetail: PropTypes.func.isRequired,
  bookmarkedIds: PropTypes.any,
  location: PropTypes.array,
  handleBookmark: PropTypes.func,
}

export default function FavoritePage({
  onDetail,
  bookmarkedIds,
  locations,
  handleBookmark,
  rating,
  onRating,
}) {
  const favoriteLocations = locations.filter(location =>
    bookmarkedIds.includes(location.id)
  )
  return (
    <Wrapper>
      <Header>Favorites</Header>
      {favoriteLocations.length > 0 ? (
        <ListWrapper>
          {favoriteLocations.map(
            ({ id, main_image_path, title, rating_image_path, text }) => {
              return (
                <li key={id}>
                  <Card
                    id={id}
                    image={main_image_path}
                    title={title}
                    ratingImage={rating_image_path}
                    text={text}
                    handleBookmark={handleBookmark}
                    isBookmarked={true}
                    rating={rating}
                    onRating={onRating}
                    onDetail={() => onDetail(id)}
                  />
                </li>
              )
            }
          )}
        </ListWrapper>
      ) : (
        'Du hast noch keine Location ausgewählt!'
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  justify-items: center;
  width: 100%;
`

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 350px;
`
