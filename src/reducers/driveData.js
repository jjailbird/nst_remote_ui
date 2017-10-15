import { SET_DRIVE_DATA } from '../actions/m2SetupActions';

const defaultState = {
  tracBatt: 0,
  contBatt: 0,
  maxInvTemp: 0,
  maxMotorTemp: 0,
  battTemp: 0,
  soc: 0,
  fwd: 0,
  speed: 0,
  position: 0,
  trat: 0,
  brake: 0,
  power: 0,
  light: 0,
  itc: 0,
  hsc: 0,
}

export default function driveData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_DRIVE_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 