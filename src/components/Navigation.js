import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
}

export default function Navigation({ pages }) {
  return (
    <Nav>
      {pages.map(({ title, path }) => (
        <StyledNavLink
          activeStyle={{
            background: 'lightgrey',
          }}
          key={title}
          exact
          to={path}
        >
          {title}
        </StyledNavLink>
      ))}
    </Nav>
  )
}

const Nav = styled.nav`
  height: 4rem;
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: 100%;
`

const StyledNavLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  font-family: roboto;
  padding: 16px 16px;
  border: none;
  color: black;
  text-decoration: none;
  border: whitesmoke solid 1px;
  box-shadow: 5px 5px 10px rgba(13, 13, 13, 0.2);
  &:hover {
    background: darkgray;
  }
`
