
  import {render, screen} from '@testing-library/react'
  import locationPage from './locationPage'
    
  describe('locationPage', () => {
      it('renders', () => {
          render(<locationPage />)
          expect(screen.getByText('locationPage')).toBeInTheDocument()
      })
  })
        