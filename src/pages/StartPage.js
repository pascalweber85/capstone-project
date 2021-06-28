import styled from 'styled-components/macro'
import Header from './../components/Header'
import background from './../Images/augustusplatz.jpg'

export default function StartPage() {
  return (
    <Wrapper>
      <Header>Leipzig Bookmarked</Header>
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
`
