import { useState } from 'react'
import styled from 'styled-components/macro'
import LocationPage from './pages/LocationPage'
import DetailsPage from './pages/DetailsPage'

export default function App() {
  const [activePage, setActivePage] = useState('LocationPage')

  return (
    <AppGrid>
      {activePage === 'LocationPage' && <LocationPage onDetail={showDetail} />}

      {activePage === 'DetailsPage' && (
        <DetailsPage onNavigate={handleClickBack} />
      )}
    </AppGrid>
  )

  function showDetail() {
    setActivePage('DetailsPage')
  }

  function handleClickBack() {
    setActivePage('LocationPage')
  }
}

const AppGrid = styled.section`
  display: grid;
  grid-template-rows: auto min-content;
  height: 100vh;
  padding: 12px;
`
