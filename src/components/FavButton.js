import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

FavButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.node,
}

export default function FavButton(props) {
  return <FavButtonStyled {...props} />
}
const FavButtonStyled = styled.button`
  padding: 12px;
  font-size: 20px;
  width: 250px;
  color: black;

  border-radius: 30px;

  img {
    max-width: 30px;
    background: transparent;
  }
`
