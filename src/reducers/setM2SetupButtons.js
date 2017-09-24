import { SET_POWER ,SET_LIGHT ,SET_INV_CON1 ,SET_INV_CON2 ,SET_TBMS ,SET_DCDC ,SET_APC
  ,SET_INV_OUT1, SET_INV_OUT2, SET_SBMS, SET_SINV, SET_CAMERA ,SET_HYDRO_BK ,SET_REGEN_BK
  ,SET_POSITION_START, SET_POSITION_STOP
} from '../actions/m2SetupActions';

const initialState = { power: 'off', light: 'off', invCon1: 'off', invCon2: 'off', tBms: 'off', dcDc: 'off', apc: 'off',
  invOut1: 'off', invOut2: 'off', sBms: 'off', sInv: 'off', camera: 'off', hydroBk: 'off', regenBk: 'off',
  positionStart: 0, positionStop: 250 
}

export default function setM2SetupButtons(state = initialState, action) {
  switch(action.type) {
    case SET_POWER:
      //console.log('received power', action.data);
      return { ...state, power: action.data };
    case SET_LIGHT:
      return { ...state, light: action.data };
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
    case SET_HYDRO_BK:
      return { ...state, hydroBk: action.data };
    case SET_REGEN_BK:
      return { ...state, regenBk: action.data };
    case SET_POSITION_START:
      return { ...state, positionStart: action.data };
    case SET_POSITION_STOP:
      return { ...state, positionStop: action.data };
    default:
      return state;
  } 
}

 