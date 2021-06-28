import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './../components/Button'
import Header from './../components/Header'
import { useHistory } from 'react-router-dom'
// import { useParams } from 'react-router'

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
  // const { id } = useParams()
  // handleDetails(id)
  return (
    <Wrapper>
      <div>
        <BackButton onClick={() => history.goBack()}>&lt; back</BackButton>
      </div>
      <Header>Details</Header>

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
  color: darkgray;
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
  display: grid;
  z-index: 2;
  left: center;
  bottom: 1.3em;
`
