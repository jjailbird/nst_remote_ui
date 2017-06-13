import { SET_DIRECTION_SWITCH } from '../actions';

const defaultState = 1;

export default function setDirectionSwitch(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_DIRECTION_SWITCH:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 