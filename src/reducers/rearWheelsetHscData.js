import { SET_REAR_WHEELSET_HSC_DATA } from '../actions';

const defaultState = {
  position: 0,
  trackCurve: 0,
  attackAngle: 0,
  steeringRatio: 0
}

export default function rearWheelsetHscData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_REAR_WHEELSET_HSC_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 