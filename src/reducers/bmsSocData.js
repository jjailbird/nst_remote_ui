import { SET_BMS_SOC_DATA } from '../actions';

const defaultState = {
  cell1: 0,
  cell2: 0,
  cell3: 0,
  cell4: 0,
  socTotal: 0
}

export default function bmsSocData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_BMS_SOC_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 