import { useState } from 'react'
import styled from 'styled-components/macro'
import LocationPage from './pages/LocationPage'
import DetailsPage from './pages/DetailsPage'

export default function App() {
  const [activePage, setActivePage] = useState('LocationPage')
  const [detailPage, setDetailPage] = useState(null)

  return (
    <AppGrid>
      {activePage === 'LocationPage' && <LocationPage onDetail={showDetail} />}

      {activePage === 'DetailsPage' && (
        <DetailsPage
          onNavigate={handleClickBack}
          title={detailPage.title}
          image={detailPage.image}
          öffnungszeiten={detailPage.öffnungszeiten}
          beschreibung={detailPage.beschreibung}
        />
      )}
    </AppGrid>
  )

  function showDetail(title, image, öffnungszeiten, beschreibung) {
    setActivePage('DetailsPage')
    setDetailPage({ title, image, öffnungszeiten, beschreibung })
  }

  function handleClickBack() {
    setActivePage('LocationPage')
  }
}

const AppGrid = styled.section`
  display: grid;
  justify-items: center;
`
