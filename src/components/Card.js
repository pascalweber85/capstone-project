//@ts-check
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Bookmark from './../components/Bookmark'

Card.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  ratingImage: PropTypes.node,
  text: PropTypes.string,
  onDetail: PropTypes.func,
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
    <>
      <Bookmark
        isBookmarked={isBookmarked}
        aria-label="Add location to favorites"
        onClick={() => handleBookmark(id)}
      />
      <Wrapper onClick={onDetail}>
        <img src={image} alt="" />
        <div>
          <h2>{title}</h2>
          <img src={ratingImage} alt="rated with 5 stars" />
          <p>{text}</p>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: flex;
  gap: 10px;
  justify-content: center;
  width: auto;
  max-width: 350px;
  margin: 0px 12px;
  color: black;
  background-color: whitesmoke;

  img {
    justify-self: start;
    width: 150px;
  }

  h2 {
    font-size: 18px;
    word-wrap: break-word;
    width: 16ch;
  }
`
