import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import background from './../Images/augustusplatz.jpg'
import backgroundHeader from './../Images/Logo.png'
// import Slider from '../components/Slider'
// import data from './../image.json'

StartPage.propTypes = {
  main_image_path: PropTypes.string,
}

export default function StartPage() {
  // const imageArray = data.map(data => data.main_image_path)
  return (
    <Wrapper>
      <h1>
        <span></span>
      </h1>
      {/* <Slider images={imageArray} /> */}
      <p>
        Willkommen in Leipzig. Hier kannst du coole Locations finden und zu
        deinen Favoriten hinzufügen. Viel Spaß beim Erkunden!
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: url(${background});
  display: grid;
  overflow-y: auto;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  p {
    display: grid;
    place-items: end;
    text-align: center;
    color: bisque;
    padding: 20px;
    z-index: 1;
  }

  h1 {
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    background: url(${backgroundHeader});
    height: 90px;
    width: 300px;
    background-size: 100%;
    position: fixed;
    top: 0;
    place-self: center;
    z-index: 1;
  }
`
