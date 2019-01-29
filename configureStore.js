import { createStore, combineReducers } from 'redux';
import reducer from './src/store/reducers/places'

const rootReducer = combineReducers({
    places: reducer
});

const store = createStore(rootReducer);