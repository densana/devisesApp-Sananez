import { createStore, combineReducers } from 'redux';

import { categoriesReducer, plantsReducer } from './reducers/index';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  plants: plantsReducer,
});

export default createStore(rootReducer);
