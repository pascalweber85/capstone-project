import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Bookmark from './../components/Bookmark'
import StarRating from './../components/StarRating'

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.node,
  title: PropTypes.string,
  ratingImage: PropTypes.node,
  text: PropTypes.string,
  onDetail: PropTypes.func,
  handleBookmark: PropTypes.func,
  isBookmarked: PropTypes.bool,
}

export default function Card({
  id,
  image,
  title,
  text,
  onDetail,
  handleBookmark,
  onRating,
  rating,
  isBookmarked,
}) {
  return (
    <CardWrapper>
      <Bookmark
        isBookmarked={isBookmarked}
        aria-label="Add location to favorites"
        onClick={() => handleBookmark(id)}
      />

      <CardList>
        <img src={image} alt="" onClick={onDetail} />
        <div>
          <h2>{title}</h2>
          <StarRating onRating={onRating} id={id} rating={rating} />
          <p>{text}</p>
        </div>
      </CardList>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  position: relative;
`

const CardList = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: flex;
  gap: 10px;
  justify-content: center;
  width: auto;
  max-width: 100%;
  color: black;
  background-color: whitesmoke;

  img {
    justify-self: start;
    width: 150px;
    object-fit: cover;
    border-radius: 5px;
  }

  h2 {
    font-size: 18px;
    word-wrap: break-word;
    width: 16ch;
  }

  p {
    display: grid;
    place-items: center;
    justify-self: center;
    text-align: center;
  }
`
