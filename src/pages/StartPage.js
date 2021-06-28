import styled from 'styled-components/macro'
import Header from './../components/Header'

export default function StartPage() {
  return (
    <Wrapper>
      <Header>Welcome</Header>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  width: 100%;
  justify-items: center;

  /* img {
    width: 350px;
    border: 2px solid white;
    border-radius: 10px;
  }
  li {
    list-style-type: none;
  }

  p {
    padding: 10px;
  } */
`
