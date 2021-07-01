import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './../components/FavButton'
import { useHistory } from 'react-router-dom'
import Icon from './../Images/back.png'
// import Slider from '../components/Slider'
// import data from './../image.json'

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
  // const imageArray = data.map(data => data.main_image_path)
  let history = useHistory()

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
