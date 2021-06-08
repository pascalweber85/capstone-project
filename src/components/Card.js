import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  ratingimage: PropTypes.node,
  text: PropTypes.string,
}

export default function Card({ image, title, ratingimage, text }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <div>
        <h2>{title}</h2>
        <img src={ratingimage} alt="" />
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
  justify-items: end;
  max-width: 350px;
  margin-bottom: 20px;

  img {
    justify-self: start;
    width: 150px;
  }

  h2 {
    font-size: 18px;
    word-wrap: break-word;
    width: 9em;
  }
`
