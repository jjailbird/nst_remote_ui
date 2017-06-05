import { SET_REAR_WHEELSET_DATA } from '../actions';

const defaultState = {
  position: 0,
  trackCurve: 0,
  attackAngle: 0,
  steeringRatio: 0
}

export default function rearWheelsetData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_REAR_WHEELSET_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 