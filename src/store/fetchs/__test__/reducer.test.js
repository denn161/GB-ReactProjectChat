import { getArticlesLoading, getArticlesErrors,getArticlesSuccesses } from "../articles/actions";

import { articlesReducer } from "../articles/reducer";

const initialArticles = {
    articles: [],
    loading: null,
    error: true,
    errorText:''
}
describe('articlesReducer', () => {
    
    it('property loading in state', () => {      
         
        const action = getArticlesLoading()     

        const newState = articlesReducer(initialArticles, action)
        
        expect(newState).toHaveProperty('loading',true)
    })

     it('property errorText in state corrected', () => {
         
         const payload = 'Что то пошло не так'    
         
        const action = getArticlesErrors(payload)    

        const newState = articlesReducer(initialArticles, action)
        
         expect(newState).toHaveProperty('errorText',payload)
     })
    
       it('property articles in state corrected', () => {
         
         const payload = ['привет','пока','hello','hi','bananas','friend']   
         
        const action = getArticlesSuccesses(payload)

        const newState = articlesReducer(initialArticles, action)
        
         expect(newState).toHaveProperty('articles',payload)
    })  
})

