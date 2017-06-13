import { SET_EMERGENCY_STOP } from '../actions';

const defaultState = 1;

export default function setEmergencyStop(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_EMERGENCY_STOP:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 