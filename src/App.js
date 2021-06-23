//@ts-check
import { useState } from 'react'
import styled from 'styled-components/macro'
import LocationPage from './pages/LocationPage'
import DetailsPage from './pages/DetailsPage'
import FavoritePage from './pages/FavoritePage'
import data from './data.json'

export default function App() {
  const [activePage, setActivePage] = useState('LocationPage')
  const [details, setDetails] = useState(null)
  const [locations] = useState(data)
  const [bookmarkedIds, setBookmarkedIds] = useState([])

  return (
    <AppGrid>
      {activePage === 'LocationPage' && (
        <LocationPage
          onDetail={showDetail}
          locations={locations}
          toFavorite={toFavorite}
          handleBookmark={handleBookmark}
        />
      )}

      {activePage === 'DetailsPage' && (
        <DetailsPage
          onNavigate={handleClickBack}
          saveAsFavorite={saveAsFavorite}
          details={details}
        />
      )}

      {activePage === 'FavoritePage' && (
        <FavoritePage
          onNavigate={handleClickBack}
          locations={locations}
          bookmarkedIds={bookmarkedIds}
          handleBookmark={handleBookmark}
        />
      )}
    </AppGrid>
  )

  function showDetail(id) {
    const newdetails = locations.find(location => location.id === id)

    setActivePage('DetailsPage')
    setDetails(newdetails)
  }

  function handleClickBack() {
    setActivePage('LocationPage')
  }

  function saveAsFavorite() {
    setActivePage('FavoritePage')
  }

  function toFavorite() {
    setActivePage('FavoritePage')
  }

  function handleBookmark(id) {
    if (bookmarkedIds.some(favId => favId === id)) {
      setBookmarkedIds(bookmarkedIds.filter(favId => favId !== id))
    } else {
      setBookmarkedIds([...bookmarkedIds, id])
    }
  }
}

const AppGrid = styled.section`
  display: grid;
  justify-items: center;
`
