import {
  SET_CRTL_1_ACTIVE,
  SET_CRTL_1_POWER,
  SET_CRTL_1_ZERO,
  SET_CRTL_1_SENSOR_TYPE,
  SET_CRTL_1_CONTROL_TYPE,
  SET_CRTL_1_SR_ACTIVE_A,
  SET_CRTL_1_SR_ACTIVE_B,
  SET_CRTL_1_SR_ACTIVE_A2,
  SET_CRTL_1_SR_ACTIVE_B2,
  
  SET_TUNING_FRONT_1_PGAIN,
  SET_TUNING_FRONT_1_IGAIN,
  SET_TUNING_REAR_1_PGAIN,
  SET_TUNING_REAR_1_IGAIN,
  SET_TUNING_FRONT_2_PGAIN,
  SET_TUNING_FRONT_2_IGAIN,
  SET_TUNING_REAR_2_PGAIN,
  SET_TUNING_REAR_2_IGAIN,

  SET_CHART_TYPE_FRONT_LEFT,
  SET_CHART_TYPE_FRONT_RIGHT,
  SET_CHART_TYPE_REAR_LEFT,
  SET_CHART_TYPE_REAR_RIGHT,
} from '../actions';

const initialState = {
  crtl1Active: '', crtl1Power: '', crtl1Zero: '', crtl1SensorType: '', crtl1ControlType: '',
  crtl1SRActiveA: -15.5, crtl1SRActiveB: -5, crtl1SRActiveA2: -10, crtl1SRActiveB2: 0,
  chartTypeFrontLeft: 'PIE', chartTypeFrontRight: 'PIE', chartTypeRearLeft: 'PIE', chartTypeRearRight: 'PIE',
  tuningFront1Pgain: -15, tuningFront1Igain: -5, tuningRear1Pgain: -10, tuningRear1Igain: 0,
  tuningFront2Pgain: -15, tuningFront2Igain: -5, tuningRear2Pgain: -10, tuningRear2Igain: 0,
}

export default function setSetupButtons(state = initialState, action) {
  switch(action.type) {
    case SET_CRTL_1_ACTIVE:
      return { ...state, crtl1Active: action.data };
    case SET_CRTL_1_POWER:
      return { ...state, crtl1Power: action.data };
    case SET_CRTL_1_ZERO:
      return { ...state, crtl1Zero: action.data };      
    case SET_CRTL_1_SENSOR_TYPE:
      return { ...state, crtl1SensorType: action.data };
    case SET_CRTL_1_CONTROL_TYPE:
      return { ...state, crtl1ControlType: action.data };    
    case SET_CRTL_1_SR_ACTIVE_A:
      return { ...state, crtl1SRActiveA: action.data };
    case SET_CRTL_1_SR_ACTIVE_B:
      return { ...state, crtl1SRActiveB: action.data };
    case SET_CRTL_1_SR_ACTIVE_A2:
      return { ...state, crtl1SRActiveA2: action.data };
    case SET_CRTL_1_SR_ACTIVE_B2:
      return { ...state, crtl1SRActiveB2: action.data };
    
    case SET_TUNING_FRONT_1_PGAIN:
      return { ...state, tuningFront1Pgain: action.data };
    case SET_TUNING_FRONT_1_IGAIN:
      return { ...state, tuningFront1Igain: action.data };
    case SET_TUNING_REAR_1_PGAIN:
      return { ...state, tuningRear1Pgain: action.data };
    case SET_TUNING_REAR_1_IGAIN:
      return { ...state, tuningRear1Igain: action.data };
    case SET_TUNING_FRONT_2_PGAIN:
      return { ...state, tuningFront2Pgain: action.data };
    case SET_TUNING_FRONT_2_IGAIN:
      return { ...state, tuningFront2Igain: action.data };
    case SET_TUNING_REAR_2_PGAIN:
      return { ...state, tuningRear2Pgain: action.data };
    case SET_TUNING_REAR_2_IGAIN:
      return { ...state, tuningRear2Igain: action.data };

    case SET_CHART_TYPE_FRONT_LEFT:
      return { ...state, chartTypeFrontLeft: action.data };
    case SET_CHART_TYPE_FRONT_RIGHT:
      return { ...state, chartTypeFrontRight: action.data };
    case SET_CHART_TYPE_REAR_LEFT:
      return { ...state, chartTypeRearLeft: action.data };
    case SET_CHART_TYPE_REAR_RIGHT:
      return { ...state, chartTypeRearRight: action.data };
    default:
      return state   
  }
}
