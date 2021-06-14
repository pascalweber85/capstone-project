import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <Heading>{children}</Heading>
}

const Heading = styled.h1`
  display: flex;
  justify-content: space-around;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgb(238, 171, 48),
    orange,
    rgba(255, 81, 0, 0.719),
    orange,
    rgb(241, 165, 23)
  );
  padding: 20px;
  color: whitesmoke;
  max-width: 600px;
`
