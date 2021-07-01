import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import background from './../Images/Park.jpg'
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
          {favoriteLocations.map(({ id, main_image_path, title, text }) => {
            return (
              <li key={id}>
                <Card
                  id={id}
                  image={main_image_path}
                  title={title}
                  text={text}
                  handleBookmark={handleBookmark}
                  isBookmarked={true}
                  rating={rating}
                  onRating={onRating}
                  onDetail={() => onDetail(id)}
                />
              </li>
            )
          })}
        </ListWrapper>
      ) : (
        'Du hast noch keine Location ausgewählt!'
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  color: bisque;
  font-size: 18px;
  display: grid;
  overflow-y: auto;
  place-items: center;
  width: 100%;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
