import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <Heading>{children}</Heading>
}

const Heading = styled.h1`
  display: grid;
  place-items: center;
  width: 100%;
  background: linear-gradient(0deg, #483939, #9f1414);
  padding: 20px;
  color: whitesmoke;
  border: whitesmoke solid 1px;
`
