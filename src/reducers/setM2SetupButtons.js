import { 
  SET_INV_CON1 ,SET_INV_CON2 ,SET_TBMS ,SET_DCDC ,SET_APC,
  SET_INV_OUT1, SET_INV_OUT2, SET_SBMS, SET_SINV, SET_CAMERA, 
  SET_POWER, SET_LIGHT, SET_DRIVE_MODE, SET_RUN_DIRECTION, SET_RUN_SWITCH, SET_HYDRO_BK ,SET_REGEN_BK,
  SET_POSITION_START, SET_POSITION_STOP, SET_LIMIT_SPEED_A, SET_RUN_COUNT, SET_LIMIT_SPEED_M, SET_SHUNT_SPEED,
  SET_DRIVE_LEVER, SET_EMERGENCY_STOP,
  SET_MILEAGE_TOTAL, SET_MILEAGE_TEST,
} from '../actions/m2SetupActions';

const initialState = { 
  invCon1: 'off', invCon2: 'off', tBms: 'off', dcDc: 'off', apc: 'off',
  invOut1: 'off', invOut2: 'off', sBms: 'off', sInv: 'off', camera: 'off', 
  power: 'off', light: 'off', driveMode: 'ST', runDirection: 1, runSwitch: 0, hydroBk: 'off', regenBk: 'off',
  positionStart: 0, positionStop: 250, limitSpeedA: 15, runCount: 0, limitSpeedM: 0, shuntSpeed: 0,
  driveLever: 0, emergencyStop: 1,
  mileageTotal: 0, mileageTest: 0,
}

export default function setM2SetupButtons(state = initialState, action) {
  switch(action.type) {
    case SET_INV_CON1:
      return { ...state, invCon1: action.data };
    case SET_INV_CON2:
      return { ...state, invCon2: action.data };
    case SET_TBMS:
      return { ...state, tBms: action.data };
    case SET_DCDC:
      return { ...state, dcDc: action.data };
    case SET_APC:
      return { ...state, apc: action.data };
    case SET_INV_OUT1:
      return { ...state, invOut1: action.data };
    case SET_INV_OUT2:
      return { ...state, invOut2: action.data };
    case SET_SBMS:
      return { ...state, sBms: action.data };
    case SET_SINV:
      return { ...state, sInv: action.data };
    case SET_CAMERA:
      return { ...state, camera: action.data };
    case SET_POWER:
      return { ...state, power: action.data };
    case SET_LIGHT:
      return { ...state, light: action.data };
    case SET_HYDRO_BK:
      return { ...state, hydroBk: action.data };
    case SET_REGEN_BK:
      return { ...state, regenBk: action.data };
    case SET_DRIVE_MODE:
      return { ...state, driveMode: action.data };
    case SET_RUN_DIRECTION:
      return { ...state, runDirection: action.data };
    case SET_RUN_SWITCH:
      return { ...state, runSwitch: action.data };
    case SET_POSITION_START:
      return { ...state, positionStart: action.data };
    case SET_POSITION_STOP:
      return { ...state, positionStop: action.data };
    case SET_LIMIT_SPEED_A:
      return { ...state, limitSpeedA: action.data };
    case SET_RUN_COUNT:
      return { ...state, runCount: action.data };
    case SET_LIMIT_SPEED_M:
      return { ...state, limitSpeedM: action.data };
    case SET_SHUNT_SPEED:
      return { ...state, shuntSpeed: action.data };
    case SET_DRIVE_LEVER:
      return { ...state, driveLever: action.data };
    case SET_EMERGENCY_STOP:
      return { ...state, emergencyStop: action.data };
    case SET_MILEAGE_TOTAL:
      return { ...state, mileageTotal: action.data };
    case SET_MILEAGE_TEST:
      return { ...state, mileageTest: action.data };
    default:
      return state;
  } 
}

 