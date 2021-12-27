import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AuthForm from '..'

describe('AuthForm component', () => {
    
it('renders without placeholders and text', () => {

      const buttonText = 'Войти'
        
        render(<AuthForm text={buttonText} />)
        
        expect(screen.getByText(buttonText)).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Введите почту')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Введите пароль')).toBeInTheDocument()

 })
    
   it('onSubmit works', () => {

   const onSubmit = jest.fn();

   render(<AuthForm onSubmit={onSubmit} />)

  userEvent.click(screen.getByRole('button'))

  expect(onSubmit).toHaveBeenCalled()
   })    
    

})





 

