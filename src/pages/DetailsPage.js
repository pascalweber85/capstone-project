import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './../components/Button'
import FavButton from './../components/FavButton'
import Header from './../components/Header'

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
  return (
    <>
      <div>
        <BackButton onClick={onNavigate}>&lt; back</BackButton>
      </div>
      <Header>Details</Header>
      <Wrapper>
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
        <FavButton onClick={toFavorite}>als Favorite speichern</FavButton>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  max-width: 600px;
  padding: 10px;
  color: whitesmoke;

  img {
    width: 350px;
    border: 2px solid white;
    border-radius: 10px;
  }
  li {
    list-style-type: none;
  }
`
const BackButton = styled(Button)`
  position: absolute;
  left: 2em;
  top: 3em;
`
