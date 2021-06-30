import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './../components/FavButton'
// import Header from './../components/Header'
import { useHistory } from 'react-router-dom'

DetailsPage.propTypes = {
  history: PropTypes.func,
  details: PropTypes.shape({
    title: PropTypes.string,
    main_image_path: PropTypes.string,
    öffnungszeiten: PropTypes.array,
    beschreibung: PropTypes.string,
  }),
}
export default function DetailsPage({
  details: { title, main_image_path, öffnungszeiten, beschreibung },
}) {
  let history = useHistory()

  return (
    <Wrapper>
      {/* <Header>Details</Header> */}

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
      <div>
        <FavButton onClick={() => history.goBack()}>&lt; back</FavButton>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  color: black;
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
const FavButton = styled(Button)`
  position: absolute;
  display: grid;
  justify-items: center;
  z-index: 2;
  bottom: 0;
  margin-bottom: 5px;
  left: 25%;
  width: 50%;
`
