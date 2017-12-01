import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, CATEGORY_LOAD, CATEGORY_ERROR } from './constants';
import categoryApi from '../services/category-api.js';
// import shortid from 'short-id';

export function loadCategories() {
  return async dispatch => {
    try {
      const categories = await categoryApi.get();
      dispatch({
        type: CATEGORY_LOAD,
        payload: categories
      });
    }
    catch(err) {
      dispatch({
        type: CATEGORY_ERROR,
        payload: err
      });
    }
  };
}

export function addCategory(category) {
  return async dispatch => {
    try {
      const saved = await categoryApi.post(category);
      // category.timestamp = new Date();
      dispatch({
        type: CATEGORY_ADD,
        payload: saved
      });
    }
    catch(err) {
      dispatch({
        type: CATEGORY_ERROR,
        payload: err
      });
    }
  };
}

export function updateCategory(category) {
  return{
    type: CATEGORY_UPDATE,
    payload: category
  };
}

export function removeCategory(id) {
  return{
    type: CATEGORY_REMOVE,
    payload: id
  };
}