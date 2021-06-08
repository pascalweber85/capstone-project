import styled from 'styled-components/macro'
import LocationPage from './pages/LocationPage'

export default function App() {
  return (
    <AppGrid>
      <LocationPage />
    </AppGrid>
  )
}

const AppGrid = styled.section`
  display: grid;
  grid-template-rows: auto min-content;
  height: 100vh;
  padding: 12px;
`
