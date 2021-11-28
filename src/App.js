
import React from 'react'
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {PageRouter} from './components/Router';
import { persistor, store } from './store';


function App() {     
  
  return (
    <Provider store={store}>
    <PersistGate  persistor={persistor}>
       <PageRouter/>     
    </PersistGate>    
    </Provider>
  
  );
}

export default App;
