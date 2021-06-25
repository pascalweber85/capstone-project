import { render } from '@testing-library/react'
import Bookmark from './Bookmark'

describe('Bookmark', () => {
  it('renders an image which is white, onClick it becomes red', () => {
    render(<Bookmark isBookmarked={false} onClick={jest.fn} id={1} />)
  })
})
