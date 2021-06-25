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
  handleDetails,
  onNavigate,
  toFavorite,
  details: { title, main_image_path, öffnungszeiten, beschreibung },
}) {
  // const { id } = useParams()
  // handleDetails(id)
  return (
    <>
      <div>
        <BackButton onClick={onNavigate}>&lt; back</BackButton>
      </div>
      <Header>Details</Header>
      <Wrapper>
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
