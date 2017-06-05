import { SET_REAR_LEFT_MOTOR } from '../actions';

const defaultState = {
  rpm: 0,
  torque: 0,
  a: 0,
  b: 0,
  c: 0,
  temp: 0
}

export default function rearLeftMotorData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_REAR_LEFT_MOTOR:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 