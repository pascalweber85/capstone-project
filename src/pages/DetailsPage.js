import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './../components/FavButton'
import { useHistory } from 'react-router-dom'
import Icon from './../Images/back.png'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
// import Slider from '../components/Slider'
// import data from './../image.json'

DetailsPage.propTypes = {
  locations: PropTypes.array,
}
export default function DetailsPage({ locations }) {
  const history = useHistory()
  const { id } = useParams()
  const {
    title,
    main_image_path,
    öffnungszeiten,
    beschreibung,
  } = locations.find(location => location.id === id)

  return (
    <Wrapper>
      {/* <Slider images={imageArray} /> */}
      <FavButton onClick={() => history.goBack()}>
        <img src={Icon} alt="" />
      </FavButton>
      <DetailWrapper>
        <DetailImg src={main_image_path} alt="" />
        <h2>{title}</h2>

        <p>{beschreibung}</p>
        <h3>Öffnungszeiten:</h3>
        <ul>
          {öffnungszeiten.map(öffnungszeit => (
            <li key={öffnungszeit}>{öffnungszeit}</li>
          ))}
        </ul>
      </DetailWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  color: black;
`

const DetailWrapper = styled.section`
  display: grid;
  overflow-y: auto;
  color: black;
  justify-items: left;
  margin-top: 90px;
  margin-left: -10px;

  li {
    list-style-type: none;
    display: grid;
    justify-items: left;
    margin-left: -20px;
  }

  p {
    padding: 10px;
    margin: 10px;
  }
  h2 {
    margin-left: 20px;
  }

  h3 {
    margin-left: 20px;
  }
`
const DetailImg = styled.img`
  width: 100%;
  height: 40vh;
  background-size: cover;
  object-fit: cover;
`

const FavButton = styled(Button)`
  position: fixed;
  margin-top: 20px;
  display: grid;
  justify-items: center;
  z-index: 2;
  margin-bottom: 5px;
  margin-left: 10px;
  width: 100px;
`
