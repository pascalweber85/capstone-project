import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <Heading>{children}</Heading>
}

const Heading = styled.h1`
  position: sticky;
  top: 0;
  z-index: 1;
  height: 4rem;
  display: grid;
  place-items: center;
  justify-self: center;
  width: 100%;
  background: linear-gradient(0deg, #483939, #9f1414);
  padding: 20px;
  margin: 0;
  font-size: 20px;
  color: whitesmoke;
  border: whitesmoke solid 1px;
`
