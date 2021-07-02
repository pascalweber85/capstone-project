import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import background from './../Images/Leipzig.jpg'
import backgroundHeader from './../Images/Logo.png'
import picture1 from './../Images/tree.png'
import picture2 from './../Images/kamera.png'
import picture3 from './../Images/fork.png'
import picture4 from './../Images/champagnerglas.png'
import picture5 from './../Images/all.png'
import { useState } from 'react'

LocationPage.propTypes = {
  id: PropTypes.string,
  onDetail: PropTypes.func.isRequired,
  location: PropTypes.array,
  handleBookmark: PropTypes.func,
  bookmarkedIds: PropTypes.any,
}

export default function LocationPage({
  onDetail,
  locations,
  handleBookmark,
  bookmarkedIds,
  onRating,
  rating,
}) {
  const [filterValue, setFilterValue] = useState(false)

  return (
    <Wrapper>
      <h1>
        <span></span>
      </h1>

      <Section>
        <Button onClick={() => handleFilter('Sehenswürdigkeit')}>
          <img src={picture2} alt="" />
          <p>Sehens-würdigkeit</p>
        </Button>
        <Button onClick={() => handleFilter('Freizeit & Park')}>
          <img src={picture1} alt="" />
          <p>Freizeit &amp; Park</p>
        </Button>
        <Button onClick={() => handleFilter('Restaurant & Bar')}>
          <img src={picture3} alt="" />
          <p>Restaurant &amp; Bar</p>
        </Button>
        <Button onClick={() => handleFilter('Ausgehen & Party')}>
          <img src={picture4} alt="" />
          <p>Ausgehen &amp; Party</p>
        </Button>
        <Button onClick={() => handleFilter(false)}>
          <img src={picture5} alt="" />
          <p>Alle Locations</p>
        </Button>
      </Section>

      <ListWrapper>
        {filterValue ? (
          <>
            {locations
              .filter(el => el.text === filterValue)
              .map(({ id, main_image_path, title, text }) => {
                return (
                  <li>
                    <Card
                      key={id}
                      id={id}
                      image={main_image_path}
                      title={title}
                      text={text}
                      isBookmarked={bookmarkedIds.includes(id)}
                      handleBookmark={handleBookmark}
                      onRating={onRating}
                      rating={rating}
                      onDetail={() => onDetail(id)}
                    />
                  </li>
                )
              })}
          </>
        ) : (
          <>
            {locations.map(({ id, main_image_path, title, text }) => {
              return (
                <li>
                  <Card
                    key={id}
                    id={id}
                    image={main_image_path}
                    title={title}
                    text={text}
                    isBookmarked={bookmarkedIds.includes(id)}
                    handleBookmark={handleBookmark}
                    onRating={onRating}
                    rating={rating}
                    onDetail={() => onDetail(id)}
                  />
                </li>
              )
            })}
          </>
        )}
      </ListWrapper>
    </Wrapper>
  )

  function handleFilter(value) {
    setFilterValue(value)
  }
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  width: 100%;
  justify-items: center;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    background: url(${backgroundHeader});
    height: 90px;
    width: 300px;
    background-size: 100%;
    position: fixed;
  }
`
const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 350px;
  margin-top: 150px;
`

const Section = styled.section`
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18%;
  gap: 1%;
  width: 100%;
  margin-left: 3%;
  margin-right: 2%;
  margin-top: 105px;
  position: fixed;
  z-index: 1;
  img {
    margin-top: 5px;
    width: 20px;
  }

  p {
    font-size: 10px;
    font-family: roboto;
    margin-top: -1px;
  }
`
const Button = styled.button`
  border-radius: 10px;
  border: none;
`
