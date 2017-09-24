import { 
  SET_TBMS_SOC_1, SET_TBMS_SOC_2, SET_TBMS_SOC_3, SET_TBMS_SOC_4,
  SET_TBMS_TEMP_1, SET_TBMS_TEMP_2, SET_TBMS_TEMP_3, SET_TBMS_TEMP_4,
  SET_INV_VOLT_1, SET_INV_VOLT_2, SET_INV_VOLT_3, SET_INV_VOLT_4,
  SET_INV_TEMP_1, SET_INV_TEMP_2, SET_INV_TEMP_3, SET_INV_TEMP_4,
  SET_CBMS_SOC_1, SET_CBMS_VOLT_1,
  SET_SBMS_SOC_1, SET_SBMS_SOC_2,
  SET_SBMS_VOLT_1, SET_SBMS_VOLT_2,
  SET_TEST_SETUP_DATA
} from '../actions/m2SetupActions';

const initialState = { 
  tBmsSoc1: 0, tBmsSoc2: 0, tBmsSoc3: 0, tBmsSoc4: 0,
  tBmsTemp1: 0, tBmsTemp2: 0, tBmsTemp3: 0, tBmsTemp4: 0,
  invVolt1: 0, invVolt2: 0, invVolt3: 0, invVolt4: 0,
  invTemp1: 0, invTemp2: 0, invTemp3: 0, invTemp4: 0,
  cBmsSoc1: 0, cBmsVolt1: 0,
  sBmsSoc1: 0, sBmsSoc2: 0,
  sBmsVolt1: 0, sBmsVolt2: 0
  ,testSetup: {
    tBmsSoc1: 0, tBmsSoc2: 0, tBmsSoc3: 0, tBmsSoc4: 0,
    tBmsTemp1: 0, tBmsTemp2: 0, tBmsTemp3: 0, tBmsTemp4: 0,
    invVolt1: 0, invVolt2: 0, invVolt3: 0, invVolt4: 0,
    invTemp1: 0, invTemp2: 0, invTemp3: 0, invTemp4: 0,
    cBmsSoc1: 0, cBmsVolt1: 0,
    sBmsSoc1: 0, sBmsSoc2: 0,
    sBmsVolt1: 0, sBmsVolt2: 0
  }
}

export default function setM2SetupData(state = initialState, action) {
  switch(action.type) {
    case SET_TEST_SETUP_DATA:
      return { ...state, testSetup: action.data }
    case SET_TBMS_SOC_1:
      //console.log('received power', action.data);
      return { ...state, tBmsSoc1: action.data };
    case SET_TBMS_SOC_2:
      //console.log('received power', action.data);
      return { ...state, tBmsSoc2: action.data };    
    case SET_TBMS_SOC_3:
      //console.log('received power', action.data);
      return { ...state, tBmsSoc3: action.data };
    case SET_TBMS_SOC_4:
      //console.log('received power', action.data);
      return { ...state, tBmsSoc4: action.data };
    case SET_TBMS_TEMP_1:
      //console.log('received power', action.data);
      return { ...state, tBmsTemp1: action.data };    
    case SET_TBMS_TEMP_2:
      //console.log('received power', action.data);
      return { ...state, tBmsTemp2: action.data };
    case SET_TBMS_TEMP_3:
      //console.log('received power', action.data);
      return { ...state, tBmsTemp3: action.data };
    case SET_TBMS_TEMP_4:
      //console.log('received power', action.data);
      return { ...state, tBmsTemp4: action.data };    
    case SET_INV_VOLT_1:
      //console.log('received power', action.data);
      return { ...state, invVolt1: action.data };
    case SET_INV_VOLT_2:
      //console.log('received power', action.data);
      return { ...state, invVolt2: action.data };
    case SET_INV_VOLT_3:
      //console.log('received power', action.data);
      return { ...state, invVolt3: action.data };    
    case SET_INV_VOLT_4:
      //console.log('received power', action.data);
      return { ...state, invVolt4: action.data };
    case SET_INV_TEMP_1:
      //console.log('received power', action.data);
      return { ...state, invTemp1: action.data };
    case SET_INV_TEMP_2:
      //console.log('received power', action.data);
      return { ...state, invTemp2: action.data };    
    case SET_INV_TEMP_3:
      //console.log('received power', action.data);
      return { ...state, invTemp3: action.data };      
    case SET_INV_TEMP_4:
      //console.log('received power', action.data);
      return { ...state, invTemp4: action.data };
    case SET_CBMS_SOC_1:
      //console.log('received power', action.data);
      return { ...state, cBmsSoc1: action.data };    
    case SET_CBMS_VOLT_1:
      //console.log('received power', action.data);
      return { ...state, cBmsVolt1: action.data };      
    case SET_SBMS_SOC_1:
      //console.log('received power', action.data);
      return { ...state, sBmsSoc1: action.data };
    case SET_SBMS_SOC_2:
      //console.log('received power', action.data);
      return { ...state, sBmsSoc2: action.data };    
    case SET_SBMS_VOLT_1:
      //console.log('received power', action.data);
      return { ...state, sBmsVolt1: action.data };                 
    case SET_SBMS_VOLT_2:
      //console.log('received power', action.data);
      return { ...state, sBmsVolt2: action.data };      
    default:
      return state;
  } 
}

 