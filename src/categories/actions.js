import { CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, CATEGORY_LOAD } from './constants';
import categoryApi from '../services/category-api.js';
// import shortid from 'short-id';

export function loadCategories(id) {
  return async (dispatch, getState) => {
    const { categories } = getState;
    if(categories[id]) return;

    const loaded = await categoryApi.get(id);
    dispatch({
      type: CATEGORY_LOAD,
      payload: { categories: loaded }
    });
  };
}

// export function addCategory(category) {
//   return async dispatch => {
//     category._id = id;
//     const saved = await categoryApi.add(category);
//     category.timestamp = new Date();

//   dispatch{
//     type: CATEGORY_ADD,
//     payload: saved
//   };
// }

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