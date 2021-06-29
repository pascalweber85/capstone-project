import styled from 'styled-components/macro'
import background from './../Images/augustusplatz.jpg'
import backgroundHeader from './../Images/Logo.png'

export default function StartPage() {
  return (
    <Wrapper>
      <h1>
        <span></span>
      </h1>

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
  }

  h1 {
    background: url(${backgroundHeader});
    height: 90px;
    width: 300px;
    background-size: 100%;
    position: fixed;
    top: 0;
    place-self: center;
  }
`
