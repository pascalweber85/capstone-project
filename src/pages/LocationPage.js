import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import background from './../Images/Leipzig.jpg'
import backgroundHeader from './../Images/Logo.png'
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
        <button onClick={() => handleFilter('Sehenswürdigkeit')}>
          Sehenswürdigkeit
        </button>
        <button onClick={() => handleFilter('Freizeit & Park')}>
          Freizeit und Park
        </button>
        <button onClick={() => handleFilter('Restaurant & Bar')}>
          Restaurant und Bar
        </button>
        <button onClick={() => handleFilter('Ausgehen & Party')}>
          Ausgehen und Party
        </button>
        <button onClick={() => handleFilter(false)}>Alle</button>
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
  margin-top: 100px;
`

const Section = styled.section`
  margin-top: 105px;
  position: fixed;
  z-index: 1;
`
