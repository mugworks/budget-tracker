import { createStore } from 'redux';
import categories from './categories/reducer';

const store = createStore(categories);

export default store;
