import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import backgroundHeader from './../Images/Logo.png'
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
      <h1>
        <span></span>
      </h1>
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
  place-items: center;
  width: 100%;
  h1 {
    background: url(${backgroundHeader});
    height: 90px;
    width: 300px;
    background-size: 100%;
    position: fixed;
    top: 0;
  }
`

const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 350px;
  margin-top: 100px;
`
