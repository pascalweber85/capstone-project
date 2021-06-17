
  import {render, screen} from '@testing-library/react'
  import Bookmark from './Bookmark'
    
  describe('Bookmark', () => {
      it('renders', () => {
          render(<Bookmark />)
          expect(screen.getByText('Bookmark')).toBeInTheDocument()
      })
  })
        