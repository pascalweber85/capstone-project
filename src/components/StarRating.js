import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import styled from 'styled-components/macro'

export default function StarRating({ id, onRating, rating }) {
  const [hover, setHover] = useState(null)
  const starRating = rating.find(el => el.id === id)
  const stars = starRating?.rating || 0
  console.log(onRating)
  return (
    <StarStyled>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
            />
            <FaStar
              color={ratingValue <= (hover || stars) ? 'orange' : 'darkgrey'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}
      <p>Bewertung</p>
    </StarStyled>
  )

  function handleRating(ratingValue) {
    const newRating = { id, rating: ratingValue }
    onRating(newRating)
  }
}

const StarStyled = styled.div`
  background-color: whitesmoke;
  font-size: 1.39em;

  input {
    display: none;
  }

  p {
    font-size: 10px;
  }
`
