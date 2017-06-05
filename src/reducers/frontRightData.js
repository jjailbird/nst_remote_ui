import { SET_FRONT_RIGHT_DATA } from '../actions';

const defaultState = {
  latDistance: 0,
  yawAngle: 0,
  motorTorque: 0,
  motorSpeed: 0
}

export default function frontRightData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_FRONT_RIGHT_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 