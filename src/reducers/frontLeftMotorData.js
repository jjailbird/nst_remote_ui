import { SET_FRONT_LEFT_MOTOR } from '../actions';

const defaultState = {
  rpm: 0,
  torque: -20,
  a: 0,
  b: 0,
  c: 0,
  temp: 0
}

export default function frontLeftMotorData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_FRONT_LEFT_MOTOR:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 