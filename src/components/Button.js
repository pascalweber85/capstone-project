import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.node,
}

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  padding: 0.35em 1.2em;
  border: 0.1em solid black;
  border-radius: 1;
  text-align: center;
  background-color: ${props => (props.isActive ? '#ccc' : 'white')};
`
