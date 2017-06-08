import { SET_DRIVE_LEVER } from '../actions';

const defaultState = 0;

export default function setDriveLever(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_DRIVE_LEVER:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 