import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from 'redux-persist'
import { reducerChats } from './chats/reducerChat';
import { reducerMessages } from './messages/reducerMessages';
import { profileReducer } from './profile/reducer';
import { reducerAlert } from './alertMessage/reducerAlert';
import { forbiddenWordsMiddleware } from './alertMessage/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const config = {
    key: 'MESEGUSER',
    storage,
    blacklist:['profile','alert']    
}

const persitedreducer = persistReducer(config,combineReducers({
      profile: profileReducer,
      chats: reducerChats,
      messages: reducerMessages,
      alert:reducerAlert
}))

export const store = createStore(persitedreducer, composeEnhancers(applyMiddleware(thunk,forbiddenWordsMiddleware)));

 export const persistor = persistStore(store)