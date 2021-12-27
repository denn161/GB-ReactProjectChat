
import { render, screen } from '@testing-library/react';
import MessageItem from '../MessageItem';


describe('MessageItem component', () => {
    
    it('MessageiItem renders', () => {
        
  const data = [{ id: 1, name: 'User1', message: 'hello friend' },
                { id: 2, name: 'User2', message: 'hello friend1' },
                { id: 3, name: 'User3', message: 'hello friend2' }]

    render(<MessageItem messages={data} />)
        
        const userName = screen.getByText('User1')
        const userMsg = screen.getByText('hello friend')

        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(userName).toBeInTheDocument()  
        expect(userMsg).toBeInTheDocument()
        expect(screen.getByText('User2')).toBeInTheDocument()
        expect(screen.getByText('User3')).toBeInTheDocument()
        expect(screen.getByText('hello friend1')).toBeInTheDocument()
        expect(screen.getByText('hello friend2')).toBeInTheDocument()        
        expect(data).toContainEqual({id:1,name:'User1',message:'hello friend'}
        )      

    }) 

//    it('MessageiItem renders without data', () => {
  
//       render(<MessageItem />)
          
//       expect(screen.queryByRole('list')).toBeNull()
       
//     })
    
    it('MessageiItem snapshot', () => {
        
  const data = [{ id: 1, name: 'User1', message: 'hello friend' },
                { id: 2, name: 'User2', message: 'hello friend1' },
                { id: 3, name: 'User3', message: 'hello friend2' }]        
  const messages = render(<MessageItem messages={data} />)
        
  expect(messages).toMatchSnapshot()           
       
    })
    it('MessageiItem empty snapshot ', () => {        
      
       const messages = render(<MessageItem/>)
        
       expect(messages).toMatchSnapshot()           
       
    })
})




