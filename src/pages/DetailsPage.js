import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './../components/Button'
import FavButton from './../components/FavButton'
import Header from './../components/Header'
// import { useParams } from 'react-router'

DetailsPage.propTypes = {
  onNavigate: PropTypes.func,
  toFavorite: PropTypes.func,
  details: PropTypes.shape({
    title: PropTypes.string,
    main_image_path: PropTypes.string,
    öffnungszeiten: PropTypes.array,
    beschreibung: PropTypes.string,
  }),
}
export default function DetailsPage({
  onNavigate,
  toFavorite,
  details: { title, main_image_path, öffnungszeiten, beschreibung },
}) {
  // const { id } = useParams()
  // handleDetails(id)
  return (
    <Wrapper>
      <div>
        <BackButton onClick={onNavigate}>&lt; back</BackButton>
      </div>
      <Header>Details</Header>

      <FavButton onClick={toFavorite}>gehe zu den Favorite</FavButton>
      <h2>{title}</h2>
      <img src={main_image_path} alt="" />
      <h3>Öffnungszeiten:</h3>
      <ul>
        {öffnungszeiten.map(öffnungszeit => (
          <li key={öffnungszeit}>{öffnungszeit}</li>
        ))}
      </ul>
      <h3>Beschreibung:</h3>
      <p>{beschreibung}</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  color: whitesmoke;
  justify-items: center;

  img {
    width: 350px;
    border: 2px solid white;
    border-radius: 10px;
  }
  li {
    list-style-type: none;
  }

  p {
    padding: 10px;
  }
`
const BackButton = styled(Button)`
  position: absolute;
  z-index: 2;
  left: 2em;
  top: 2em;
`
