import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Card from '../components/Card'
import Header from '../components/Header'

LocationPage.propTypes = {
  id: PropTypes.number,
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
}) {
  return (
    <Wrapper>
      <Header>Best Locations</Header>
      <ListWrapper>
        {locations.map(
          ({ id, main_image_path, title, rating_image_path, text }) => {
            return (
              <Card
                key={id}
                id={id}
                image={main_image_path}
                title={title}
                ratingImage={rating_image_path}
                text={text}
                isBookmarked={bookmarkedIds.includes(id)}
                handleBookmark={handleBookmark}
                onDetail={() => onDetail(id)}
              />
            )
          }
        )}
      </ListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  overflow-y: auto;
  width: 100%;
  justify-items: center;
`
const ListWrapper = styled.ul`
  padding: 0;
  width: 350px;
`
