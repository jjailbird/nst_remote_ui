import { SET_MOTOR_CONTROL_HSC_DATA } from '../actions';

const defaultState = {
  position: 0,
  curv: 0,
  speed: 0
}

export default function motorControlHscData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_MOTOR_CONTROL_HSC_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 