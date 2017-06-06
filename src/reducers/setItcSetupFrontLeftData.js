import { SET_ITCSETUP_FRONT_LEFT_DATA } from '../actions';

const defaultState = {
  laserX: 0,
  laserY: 0
}

export default function setItcSetupFrontLeftData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_ITCSETUP_FRONT_LEFT_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 