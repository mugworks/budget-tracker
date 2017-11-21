import { VACATION_ADD, VACATION_UPDATE, VACATION_REMOVE } from './constants';
import shortid from 'shortid';

export function addVacation(trip) {
  trip._id = shortid.generate();
  trip.timestamp = new Date();
  return{
    type: VACATION_ADD,
    payload: trip
  };
}

export function updateVacation(trip) {
  return{
    type: VACATION_UPDATE,
    payload: trip
  };
}

export function removeVacation(id) {
  return{
    type: VACATION_REMOVE,
    payload: id
  };
}