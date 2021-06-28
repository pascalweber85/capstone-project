import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Bookmark from './../components/Bookmark'

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
  ratingImage,
  text,
  onDetail,
  handleBookmark,
  isBookmarked,
}) {
  return (
    <CardWrapper>
      <Bookmark
        isBookmarked={isBookmarked}
        aria-label="Add location to favorites"
        onClick={() => handleBookmark(id)}
      />
      <CardList onClick={onDetail}>
        <img src={image} alt="" />
        <div>
          <h2>{title}</h2>
          <img src={ratingImage} alt="rated with 5 stars" />
          <p>{text}</p>
        </div>
      </CardList>
    </CardWrapper>
  )
}

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
`
const CardWrapper = styled.section`
  position: relative;
`
