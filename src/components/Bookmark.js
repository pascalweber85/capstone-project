import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import bmactive from './../Images/bookmark-a.png'
import bminactive from './../Images/bookmark-i.png'

Bookmark.propTypes = {
  onClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool,
  children: PropTypes.node,
}

export default function Bookmark({ isBookmarked, onClick }) {
  return (
    <BookmarkStyled>
      <img
        src={isBookmarked ? bmactive : bminactive}
        alt=""
        onClick={onClick}
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
  }
`