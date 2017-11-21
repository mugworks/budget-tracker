import { VACATION_ADD } from './constants';

export default function vacations(state=[], action) {
  switch (action.type) {
    case VACATION_ADD:
    return;


    default:
    return state;
  }
}