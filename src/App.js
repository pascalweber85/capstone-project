import { useState, useEffect } from 'react'
import { loadFromLocal, saveToLocal } from './utils/localStorage'
import { Route, Switch, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import StartPage from './pages/StartPage'
import LocationPage from './pages/LocationPage'
import DetailsPage from './pages/DetailsPage'
import FavoritePage from './pages/FavoritePage'
import data from './data.json'

export default function App() {
  const [locations] = useState(data)
  const [detailsId, setDetailsId] = useState(null)
  const details = locations.find(location => location.id === detailsId)
  const [bookmarkedIds, setBookmarkedIds] = useState(
    loadFromLocal('bookmarkedIds') ?? []
  )

  const pages = [
    { title: 'Start', path: '/' },
    { title: 'Locations', path: '/LocationPage' },
    { title: 'Favorites', path: '/FavoritePage' },
  ]

  useEffect(() => {
    saveToLocal('bookmarkedIds', bookmarkedIds)
  }, [bookmarkedIds])

  const { push } = useHistory()

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <StartPage pages={pages} />
        </Route>
        <Route path="/LocationPage">
          <LocationPage
            onDetail={showDetail}
            bookmarkedIds={bookmarkedIds}
            locations={locations}
            handleBookmark={handleBookmark}
          />
        </Route>
        <Route path="/DetailsPage/:id">
          <DetailsPage
            details={details}
            // handleDetails={handleDetails}
          />
        </Route>
        <Route path="/FavoritePage">
          <FavoritePage
            onDetail={showDetail}
            locations={locations}
            bookmarkedIds={bookmarkedIds}
            handleBookmark={handleBookmark}
          />
        </Route>
      </Switch>
      <Route exact path={['/', '/LocationPage', '/FavoritePage']}>
        <Navigation pages={pages} />
      </Route>
    </AppGrid>
  )

  function showDetail(id) {
    setDetailsId(id)
    push('/DetailsPage/' + id)
  }

  // function handleDetails(id) {
  //   setDetailsId(id)
  // }

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
  grid-template-rows: auto 4rem;
  width: 100vw;
  height: 100vh;
  justify-items: center;
`
