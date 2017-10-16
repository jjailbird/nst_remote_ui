import { SET_FRONT_SENSOR_DATA } from '../actions';

const defaultState = {
  leftApA: 0,
  leftApS: 0,
  leftBpA: 0,
  leftBpS: 0,
  leftLvdtA: -20,
  leftLvdtS: -20,
  
  rightApA: 0,
  rightApS: 0,
  rightBpA: 0,
  rightBpS: 0,
  rightLvdtA: -20,
  rightLvdtS: -20,
  
  gyroA: -15,
  gyroS: -15
}

export default function frontSensorData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_FRONT_SENSOR_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 