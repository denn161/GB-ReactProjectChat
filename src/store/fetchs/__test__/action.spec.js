
import { FETCH_ARTICLES_LOADING, FETCH_ARTICLES_SUCCESS, getArticles, getArticlesErrors, getArticlesLoading, getArticlesSuccesses } from "../articles/actions";

describe('getArticlesLoading', () => {
    it('should return obj with a certain type', () => {
    const expected = {
        type:FETCH_ARTICLES_LOADING
    }

    const received = getArticlesLoading()
    
    expect(received).toEqual(expected)
})    
})

describe('getArticlesSuccesses', () => {
    
    it('getting articles', () => {

        const payload = []
        
        const expected = {
         type: FETCH_ARTICLES_SUCCESS,
         payload
        } 
        
     const received = getArticlesSuccesses(payload)

        expect(received).toEqual(expected)
    })
})     

describe('getArticles', () => {
    
it('dispatches getArticlesLoading', () => {

 const mockDispatch = jest.fn()

 getArticles()(mockDispatch)

expect(mockDispatch).toHaveBeenCalledWith(getArticlesLoading())     
     

    })
    
    it('dispatches success action on success in fetch ', async () => {    
        
     const result = {articles: []}

     fetch.mockResponseOnce(JSON.stringify(result))

           const mockDispatch = jest.fn()

          await getArticles()(mockDispatch)
         
         expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccesses(result))    

    })

    it('dispatches failure action on error in fetch ', async () => {   
      
       const errorMessage = 'Что то пошло не так...'
          
       fetch.mockRejectOnce(new Error(errorMessage))

       const mockDispatch = jest.fn()

      await getArticles()(mockDispatch)
         
       expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesErrors(errorMessage))   

    })
})
