import { render, screen } from '@testing-library/react';
import Message from '..';


describe('Message tests', () => {
    
    it('renders name and message', () => {
     
        const user = {name: 'User', message: 'messageText'}
        
     render(<Message message={user} />)

     const msgText = screen.getByText('messageText')
     const authorText = screen.getByText('User')
     
      expect(msgText).toBeInTheDocument()
      expect(authorText).toBeInTheDocument()

})

it('matches snapshot', () => {
   const user = {name: 'User', message: 'messageText'}
   const message = render(<Message message={user} />)
    
   expect(message).toMatchSnapshot()     

})

})