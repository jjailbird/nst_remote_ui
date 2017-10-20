import { SET_FRONT_SENSOR_DATA } from '../actions';

const defaultState = {
  leftApA: 0,
  leftApS: 0,
  leftBpA: 0,
  leftBpS: 0,
  leftLvdtA: 0,
  leftLvdtS: 0,
  
  rightApA: 0,
  rightApS: 0,
  rightBpA: 0,
  rightBpS: 0,
  rightLvdtA: 0,
  rightLvdtS: 0,
  
  gyroA: 0,
  gyroS: 0,
  gyroZ: 0,
}

export default function frontSensorData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_FRONT_SENSOR_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 