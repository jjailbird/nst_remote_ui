import { SET_REAR_SENSOR_DATA } from '../actions';

const defaultState = {
  lxA: 0,
  lxS: 0,
  ly1A: 0,
  ly1S: 0,
  ly2A: 0,
  ly2S: 0,
  rxA: 0,
  rxS: 0,
  ry1A: 0,
  ry1S: 0,
  ry2A: 0,
  ry2S: 0,
  gA: 0,
  gS: 0
}

export default function rearSensorData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_REAR_SENSOR_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 