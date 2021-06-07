import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  rating: PropTypes.string,
  text: PropTypes.string,
}

export default function Card({ image, title, rating, text }) {
  return (
    <Wrapper>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{rating}</p>
      <p>{text}</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px #0006;
  display: grid;
  grid-template-rows: 1fr;
  justify-items: end;
  max-width: 400px;

  img {
    justify-self: start;
    max-width: 300px;
  }
`
