import { useState, useEffect } from 'react'
import { loadFromLocal, saveToLocal } from './utils/localStorage'
import styled from 'styled-components/macro'
import LocationPage from './pages/LocationPage'
import DetailsPage from './pages/DetailsPage'
import FavoritePage from './pages/FavoritePage'
import data from './data.json'

export default function App() {
  const [activePage, setActivePage] = useState('LocationPage')
  const [locations] = useState(data)
  const [detailsId, setDetailsId] = useState(null)
  const details = locations.find(location => location.id === detailsId)
  const [bookmarkedIds, setBookmarkedIds] = useState(
    loadFromLocal('bookmarkedIds') ?? []
  )

  useEffect(() => {
    saveToLocal('bookmarkedIds', bookmarkedIds)
  }, [bookmarkedIds])

  return (
    <AppGrid>
      {activePage === 'LocationPage' && (
        <LocationPage
          onDetail={showDetail}
          bookmarkedIds={bookmarkedIds}
          locations={locations}
          toFavorite={toFavorite}
          handleBookmark={handleBookmark}
        />
      )}

      {activePage === 'DetailsPage' && (
        <DetailsPage
          onNavigate={handleClickBack}
          toFavorite={toFavorite}
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
    setActivePage('DetailsPage')
    setDetailsId(id)
  }

  function handleClickBack() {
    setActivePage('LocationPage')
  }

  function toFavorite() {
    setActivePage('FavoritePage')
  }

  function handleBookmark(id) {
    if (bookmarkedIds.some(bookmarkedId => bookmarkedId === id)) {
      setBookmarkedIds(
        bookmarkedIds.filter(bookmarkedId => bookmarkedId !== id)
      )
    } else {
      setBookmarkedIds([...bookmarkedIds, id])
    }
  }
}

const AppGrid = styled.section`
  display: grid;
  justify-items: center;
`
