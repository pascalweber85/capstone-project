import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import Icon1 from './../Images/haus.png'
import Icon2 from './../Images/kompass.png'
import Icon3 from './../Images/herz.png'

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, path: PropTypes.string })
  ),
}

export default function Navigation() {
  return (
    <Nav>
      <StyledNavLink exact to="/" activeClassName="active">
        <img src={Icon1} alt="" />
        <p>Start</p>
      </StyledNavLink>
      <StyledNavLink exact to="/LocationPage" activeClassName="active">
        <img src={Icon2} alt="" />
        <p>Entdecken</p>
      </StyledNavLink>
      <StyledNavLink exact to="/FavoritePage" activeClassName="active">
        <img src={Icon3} alt="" />
        <p>Favoriten</p>
      </StyledNavLink>
      {/* {pages.map(({ title, path }) => (
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
      ))} */}
    </Nav>
  )
}

const Nav = styled.nav`
  overflow-y: hidden;
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
  border: none;
  color: black;
  text-decoration: none;
  border: whitesmoke solid 1px;
  box-shadow: 5px 5px 10px rgba(13, 13, 13, 0.2);
  &:hover {
    background: darkgray;
  }

  img {
    margin-top: 10px;
    width: 30px;
  }

  p {
    font-size: 10px;
    font-family: roboto;
    margin-top: -5px;
  }
`
