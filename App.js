import React from 'react';
import { Provider } from 'react-redux'
import Main from './Main';
import { createStore, combineReducers, compose } from 'redux';
import reducer from './src/store/reducers/places'


const rootReducer = combineReducers({
    places: reducer
});




let composeEnhancer = compose;

if(__DEV__){
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}


const store = createStore(rootReducer,composeEnhancer());


export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
           <Main />
      </Provider>
     
    );
  }
}


