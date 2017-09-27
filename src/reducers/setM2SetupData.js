import { 
  SET_TEST_SETUP_DATA
} from '../actions/m2SetupActions';

const initialState = { 
  testSetup:{
    data:{
      TBmsSoc1: 0, TBmsSoc2: 0, TBmsSoc3: 0, TBmsSoc4: 0,
      TBmsTemp1: 0, TBmsTemp2: 0, TBmsTemp3: 0, TBmsTemp4: 0,
      InvVolt1: 0, InvVolt2: 0, InvVolt3: 0, InvVolt4: 0,
      InvTemp1: 0, InvTemp2: 0, InvTemp3: 0, InvTemp4: 0,
      
      CBmsSoc1: 0, CBmsVolt1: 0,
      SBmsSoc1: 0, SBmsSoc2: 0,
      SBmsVolt1: 0, SBmsVolt2: 0,

      Notch: 0, BatterySoc: 0, Tract: 0, Brake: 0,
      VehicleSpeed: 0, VehiclePosition: 0

    },
    VehicleSpeedArray: []
  }
}

export default function setM2SetupData(state = initialState, action) {
  switch(action.type) {
    case SET_TEST_SETUP_DATA:
      // console.log('SET_TEST_SETUP_DATA', action.data);
      return { ...state, testSetup: action.data }
    default:
      return state;
  } 
}

 