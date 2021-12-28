import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '..'

describe('Login component', () => {
    
    it('Login renders', () => { 
              
        render(<Login />)

        expect(screen.queryByDisplayValue(/React/i)).toBeNull()
         expect(screen.queryByDisplayValue(/JS/i)).toBeNull()        
        userEvent.type(screen.getByRole('textbox'), 'React')
        userEvent.type(screen.getByRole('textbox'), 'JS')        
        expect(screen.queryByDisplayValue(/React/i)).toBeInTheDocument()
        expect(screen.queryByDisplayValue(/JS/i)).toBeInTheDocument()
        
    })

})


