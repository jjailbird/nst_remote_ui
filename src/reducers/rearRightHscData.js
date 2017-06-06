import { SET_REAR_RIGHT_HSC_DATA } from '../actions';

const defaultState = {
  sylinder: 0,
  yawAngle: 0,
  aPort: 0,
  bPort: 0
}

export default function rearRightHscData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_REAR_RIGHT_HSC_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 