import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from './../components/Button'
import Header from './../components/Header'

DetailsPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  title: PropTypes.string,
  image: PropTypes.node,
  öffnungszeiten: PropTypes.string,
  beschreibung: PropTypes.string,
}

export default function DetailsPage({
  onNavigate,
  title,
  image,
  öffnungszeiten,
  beschreibung,
}) {
  return (
    <>
      <div>
        <Button onClick={onNavigate}>&lt; back</Button>
      </div>
      <Header>Details</Header>
      <Wrapper>
        <h2>{title}</h2>
        <img src={image} alt="" />
        <h3>Öffnungszeiten:</h3>

        <p>{öffnungszeiten}</p>

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

  img {
    width: 350px;
    border: 2px solid white;
    border-radius: 10px;
  }
`
