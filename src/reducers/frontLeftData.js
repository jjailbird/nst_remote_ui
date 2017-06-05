import { SET_FRONT_LEFT_DATA } from '../actions';

const defaultState = {
  latDistance: 0,
  yawAngle: 0,
  motorTorque: 0,
  motorSpeed: 0
}

export default function frontLeftData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_FRONT_LEFT_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 