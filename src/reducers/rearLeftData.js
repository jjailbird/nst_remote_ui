import { SET_REAR_LEFT_DATA } from '../actions';

const defaultState = {
  latDistance: 0,
  yawAngle: 0,
  motorTorque: 0,
  motorSpeed: 0
}

export default function rearLeftData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_REAR_LEFT_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 