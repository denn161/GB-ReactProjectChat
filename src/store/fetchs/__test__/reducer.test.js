import { getArticlesLoading, getArticlesErrors } from "../articles/actions";

import { articlesReducer } from "../articles/reducer";

describe('articlesReducer', () => {
    
    it('property loading in state', () => {

        const state = { loading: null }
        
        const action = getArticlesLoading()
        console.log(action)

        const newState = articlesReducer(state, action)
        
        expect(newState.loading).toBe(true)
    })
})

