import { createStore, combineReducers } from 'redux';

import reducer from './reducers/places';

const rootReducer = combineReducers({
    places: reducer
});

const configureStore = (rootReducer) => {
    return createStore(rootReducer);
}

export default configureStore;