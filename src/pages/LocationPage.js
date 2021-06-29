import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import background from './../Images/Leipzig.jpg'
import backgroundHeader from './../Images/Logo.png'

LocationPage.propTypes = {
  id: PropTypes.number,
  onDetail: PropTypes.func.isRequired,
  location: PropTypes.array,
  handleBookmark: PropTypes.func,
  bookmarkedIds: PropTypes.any,
}

export default function LocationPage({
  onDetail,
  locations,
  handleBookmark,
  bookmarkedIds,
  onRating,
  rating,
}) {
  return (
    <Wrapper>
      <h1>
        <span></span>
      </h1>

      <ListWrapper>
        {locations.map(
          ({ id, main_image_path, title, rating_image_path, text }) => {
            return (
              <li>
                <Card
                  key={id}
                  id={id}
                  image={main_image_path}
                  title={title}
                  ratingImage={rating_image_path}
                  text={text}
                  isBookmarked={bookmarkedIds.includes(id)}
                  handleBookmark={handleBookmark}
                  onRating={onRating}
                  rating={rating}
                  onDetail={() => onDetail(id)}
                />
              </li>
            )
          }
        )}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  width: 100%;
  justify-items: center;
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
  }
`
const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 350px;
  margin-top: 100px;
`
