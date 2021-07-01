import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import bmactive from './../Images/Herz2.png'
import bminactive from './../Images/Herz1.png'

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
    top: 65px;
    left: 300px;
    height: 33px;
    width: 31px;
  }
`
