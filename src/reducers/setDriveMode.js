import { SET_DRIVE_MODE } from '../actions';

const defaultState = 'ST';

export default function setDriveMode(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_DRIVE_MODE:
      console.log('SET_DRIVE_MODE', action);
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 