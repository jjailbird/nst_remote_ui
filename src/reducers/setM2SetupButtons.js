import {
  SET_CRTL_1_ACTIVE,
  SET_CRTL_1_MODE,
  SET_CRTL_1_SENSOR_TYPE,
  SET_CRTL_1_CONTROL_TYPE,
  SET_CRTL_1_WF_LATERAL_SENSOR,
  SET_CRTL_1_WF_CONTROL_MODE,
  SET_CRTL_1_WF_YAW_SENSOR,
  SET_CRTL_1_WF_CONTROL_TYPE,
  SET_CRTL_2_ACTIVE,
  SET_CRTL_2_MODE,
  SET_CRTL_2_SENSOR_TYPE,
  SET_CRTL_2_CONTROL_TYPE,
  SET_CRTL_2_WF_LATERAL_SENSOR,
  SET_CRTL_2_WF_CONTROL_MODE,
  SET_CRTL_2_WF_YAW_SENSOR,
  SET_CRTL_2_WF_CONTROL_TYPE,

  SET_TUNING_FRONT_PGAIN,
  SET_TUNING_FRONT_IGAIN,
  SET_TUNING_REAR_PGAIN,
  SET_TUNING_REAR_IGAIN,

  SET_CHART_TYPE_FRONT_LEFT,
  SET_CHART_TYPE_FRONT_RIGHT,
  SET_CHART_TYPE_REAR_LEFT,
  SET_CHART_TYPE_REAR_RIGHT,
} from '../actions';

const initialState = {
  crtl1Active: '', crtl1Mode: '', crtl1SensorType: '', crtl1ControlType: '', crtl1WfLateralSensor: -15.5, crtl1WfControlMode: -5, crtl1WfYawSensor: -10, crtl1WfControlType: 0,
  crtl2Active: '', crtl2Mode: '', crtl2SensorType: '', crtl2ControlType: '', crtl2WfLateralSensor: -15.5, crtl2WfControlMode: -5, crtl2WfYawSensor: -10, crtl2WfControlType: 0,
  chartTypeFrontLeft: 'PIE', chartTypeFrontRight: 'PIE', chartTypeRearLeft: 'PIE', chartTypeRearRight: 'PIE',
  tuningFrontPgain: -15, tuningFrontIgain: -5, tuningRearPgain: -10, tuningRearIgain: 0,
}

export default function setM2SetupButtons(state = initialState, action) {
  switch(action.type) {
    case SET_CRTL_1_ACTIVE:
      return { ...state, crtl1Active: action.data };
    case SET_CRTL_1_MODE:
      return { ...state, crtl1Mode: action.data };
    case SET_CRTL_1_SENSOR_TYPE:
      return { ...state, crtl1SensorType: action.data };
    case SET_CRTL_1_CONTROL_TYPE:
      return { ...state, crtl1ControlType: action.data };    
    case SET_CRTL_1_WF_LATERAL_SENSOR:
      return { ...state, crtl1WfLateralSensor: action.data };
    case SET_CRTL_1_WF_CONTROL_MODE:
      return { ...state, crtl1WfControlMode: action.data };
    case SET_CRTL_1_WF_YAW_SENSOR:
      return { ...state, crtl1WfYawSensor: action.data };
    case SET_CRTL_1_WF_CONTROL_TYPE:
      return { ...state, crtl1WfControlType: action.data };
    case SET_CRTL_2_ACTIVE:
      return { ...state, crtl2Active: action.data };
    case SET_CRTL_2_MODE:
      return { ...state, crtl2Mode: action.data };
    case SET_CRTL_2_SENSOR_TYPE:
      return { ...state, crtl2SensorType: action.data };
    case SET_CRTL_2_CONTROL_TYPE:
      return { ...state, crtl2ControlType: action.data };
    case SET_CRTL_2_WF_LATERAL_SENSOR:
      return { ...state, crtl2WfLateralSensor: action.data };
    case SET_CRTL_2_WF_CONTROL_MODE:
      return { ...state, crtl2WfControlMode: action.data };
    case SET_CRTL_2_WF_YAW_SENSOR:
      return { ...state, crtl2WfYawSensor: action.data };
    case SET_CRTL_2_WF_CONTROL_TYPE:
      return { ...state, crtl2WfControlType: action.data };
    
    case SET_TUNING_FRONT_PGAIN:
      return { ...state, tuningFrontPgain: action.data };
    case SET_TUNING_FRONT_IGAIN:
      return { ...state, tuningFrontIgain: action.data };
    case SET_TUNING_REAR_PGAIN:
      return { ...state, tuningRearPgain: action.data };
    case SET_TUNING_REAR_IGAIN:
      return { ...state, tuningRearIgain: action.data };
    
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
