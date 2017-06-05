import { SET_DRIVE_INFO_DATA } from '../actions';

const defaultState = {
  notch: 0,
  speed: 0,
  soc: 0,
  tract: 0,
  brake: 0
}

export default function driveInfoData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_DRIVE_INFO_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 