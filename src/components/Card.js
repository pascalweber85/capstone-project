import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  ratingImage: PropTypes.node,
  text: PropTypes.string,
  onDetail: PropTypes.func,
}

export default function Card({ image, title, ratingImage, text, onDetail }) {
  return (
    <Wrapper>
      <img onClick={onDetail} src={image} alt="" />
      <div>
        <h2>{title}</h2>
        <img src={ratingImage} alt="rated with 5 stars" />
        <p>{text}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: flex;
  gap: 10px;
  justify-content: center;
  max-width: 350px;
  margin-bottom: 20px;
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
