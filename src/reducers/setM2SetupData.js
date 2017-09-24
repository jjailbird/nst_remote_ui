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
  testSetup:{
    data:{
      TBmsSoc1: 0, TBmsSoc2: 0, TBmsSoc3: 0, TBmsSoc4: 0,
      TBmsTemp1: 0, TBmsTemp2: 0, TBmsTemp3: 0, TBmsTemp4: 0,
      InvVolt1: 0, InvVolt2: 0, InvVolt3: 0, InvVolt4: 0,
      InvTemp1: 0, InvTemp2: 0, InvTemp3: 0, InvTemp4: 0,
      CBmsSoc1: 0, SBmsVolt1: 0,
      SBmsSoc1: 0, SBmsSoc2: 0,
      SBmsVolt1: 0, SBmsVolt2: 0
    },
    VehicleSpeedArray: []
  }
}

export default function setM2SetupData(state = initialState, action) {
  switch(action.type) {
    case SET_TEST_SETUP_DATA:
      // console.log('SET_TEST_SETUP_DATA', action.data);
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

 