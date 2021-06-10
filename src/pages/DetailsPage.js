import PropTypes from 'prop-types'
import Button from './../components/Button'

DetailsPage.propTypes = {
  title: PropTypes.string,
  onNavigate: PropTypes.func.isRequired,
}

export default function DetailsPage({ onNavigate }) {
  return (
    <div>
      <Button onClick={onNavigate}>&lt; back</Button>
    </div>
  )
}
