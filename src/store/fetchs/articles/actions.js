import { urlApi } from "../../../components/utils/constants"

export const FETCH_ARTICLES_LOADING = 'ARTICLES_API::FETCH_LOADING'

export const FETCH_ARTICLES_ERROR = 'ARTICLES_API::FETCH_ERROR'
export const FETCH_ARTICLES_SUCCESS = 'ARTICLES_API::FETCH_SUCCESS'


export const getArticlesLoading = () => ({
    type:FETCH_ARTICLES_LOADING
})

export const getArticlesErrors = (errorText) => ({
    type: FETCH_ARTICLES_ERROR,
    payload:errorText
})

export const getArticlesSuccesses = (articles) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload:articles
})

export const getArticles = () => async (dispatch) => {
      dispatch(getArticlesLoading())
    try {
     
        const response = await fetch(urlApi)
            if (!response.ok) {
            throw new Error('not ok', response.status)              
             }             
        const result = await response.json()
         
        dispatch(getArticlesSuccesses(result))              
          
    } catch (error) {
          
            dispatch(getArticlesErrors('Что то пошло не так...'))       
           console.warn(error.message)
        }
    
    
}







