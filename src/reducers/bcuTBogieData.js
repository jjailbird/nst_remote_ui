import { SET_BCU_T_BOGIE_DATA } from '../actions';

const defaultState = {
  b1: 0,
  b2: 0,
  b3: 0,
  b4: 0
}

export default function bcuTBogie(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_BCU_T_BOGIE_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 