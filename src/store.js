import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import categories from './categories/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  categories, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
