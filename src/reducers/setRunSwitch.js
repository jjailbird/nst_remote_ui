import { SET_RUN_SWITCH } from '../actions';

const defaultState = 1;

export default function setRunSwitch(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_RUN_SWITCH:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 