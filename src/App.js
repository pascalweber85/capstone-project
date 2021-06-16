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

  return (
    <AppGrid>
      {activePage === 'LocationPage' && (
        <LocationPage onDetail={showDetail} locations={locations} />
      )}

      {activePage === 'DetailsPage' && (
        <DetailsPage
          onNavigate={handleClickBack}
          saveAsFavorite={saveAsFavorite}
          details={details}
        />
      )}

      {activePage === 'FavoritePage' && (
        <FavoritePage onNavigate={handleClickBack} />
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
}

const AppGrid = styled.section`
  display: grid;
  justify-items: center;
`
