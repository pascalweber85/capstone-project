import PropTypes from 'prop-types'
// import styled from 'styled-components/macro'
// import locations from './data.json'
import Card from '../components/Card'

locationPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function locationPage() {
  return (
    <section>
      <ul>
        <li>
          <Card></Card>
        </li>
      </ul>
    </section>
  )
}
