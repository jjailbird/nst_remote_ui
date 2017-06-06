import { SET_ITCSETUP_FRONT_RIGHT_DATA } from '../actions';

const defaultState = {
  laserX: 0,
  laserY: 0,
  gyroZ: 0
}

export default function setItcSetupFrontRightData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_ITCSETUP_FRONT_RIGHT_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 