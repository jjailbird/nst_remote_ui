import { SET_FRONT_LASER_DATA } from '../actions';

const defaultState = {
  lx: 0,
  ly: 0,
  rx: 0,
  ry: 0,
  g: 0
}

export default function frontLaserData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_FRONT_LASER_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 