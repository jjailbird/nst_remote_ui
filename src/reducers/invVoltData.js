import { SET_INV_VOLT_DATA } from '../actions';

const defaultState = {
  inv1: 0,
  inv2: 0,
  inv3: 0,
  inv4: 0,
  invAvg: 0
}

export default function invVoltData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_INV_VOLT_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 