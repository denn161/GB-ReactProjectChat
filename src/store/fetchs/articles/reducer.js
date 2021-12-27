import { FETCH_ARTICLES_ERROR, FETCH_ARTICLES_LOADING, FETCH_ARTICLES_SUCCESS } from "./actions";

const initialArticles = {
    articles: [],
    loading: null,
    error: true,
    errorText:''
}
export const articlesReducer = (state = initialArticles, {type,payload}) => {
    switch (type) {
        
        case FETCH_ARTICLES_LOADING :
            return {
                ...state,
               loading:true               
            
            }
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: payload,
                loading:false
                
            }
        
        case FETCH_ARTICLES_ERROR:
            return {
                ...state,
                loading:false,
                error: false,
                errorText:payload          
            }         
    
        default:
        return state
    }
}

