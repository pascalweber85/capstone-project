import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './../components/Button'
import Header from './../components/Header'

FavoritePage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
}

export default function FavoritePage({ onNavigate }) {
  return (
    <>
      <div>
        <BackButton onClick={onNavigate}>&lt; back</BackButton>
      </div>
      <Header>Favorites</Header>
      <Wrapper></Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  max-width: 600px;
  padding: 10px;
  color: whitesmoke;
`
const BackButton = styled(Button)`
  position: absolute;
  left: 2em;
  top: 3em;
`
