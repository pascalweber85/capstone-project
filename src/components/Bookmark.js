import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import bma from './../Images/bookmark-a.png'
import bmi from './../Images/bookmark-i.png'
import { useState } from 'react'

Bookmark.propTypes = {
  onClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool,
  children: PropTypes.node,
}

export default function Bookmark({ onClick }) {
  const [isBookmarked, setIsBookmarked] = useState(true)
  return (
    <BookmarkStyled>
      <img
        src={isBookmarked ? bmi : bma}
        alt=""
        onClick={onClick}

        //onClick={setIsBookmarked(!isBookmarked)}
      />
    </BookmarkStyled>
  )
}

const BookmarkStyled = styled.div`
  img {
    position: relative;
    top: 40px;
    left: 140px;
    height: 33px;
    width: 26px;
    cursor: pointer;
  }
`
