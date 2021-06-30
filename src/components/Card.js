import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Bookmark from './../components/Bookmark'
import StarRating from './../components/StarRating'

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.node,
  title: PropTypes.string,
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
        <h3>{text}</h3>
        <div>
          <img src={image} alt="" onClick={onDetail} />
          <h2>{title}</h2>
        </div>
        <StarRating onRating={onRating} id={id} rating={rating} />
      </CardList>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  position: relative;
`

const CardList = styled.section`
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: grid;
  gap: 10px;
  justify-items: start;
  width: auto;
  max-width: 100%;
  color: black;
  background-color: whitesmoke;

  div {
    display: flex;
    place-items: start;
    gap: 10px;
  }

  img {
    justify-self: start;
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 5px;
  }

  h2 {
    margin-left: 5px;
    font-size: 16px;
    word-wrap: break-word;
    width: 16ch;
  }

  h3 {
    font-size: 14px;
    font-weight: lighter;
  }
`
