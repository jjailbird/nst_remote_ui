import { SET_ITC_TEST_DATA } from '../actions';

const defaultState = {
  frontLeftData: {
    data: {
      latDistance: 0,
      yawAngle: 0,
      motorTorque: 0,
      motorSpeed: 0
    }
  },
  frontRightData: {
    data:{
      latDistance: 0,
      yawAngle: 0,
      motorTorque: 0,
      motorSpeed: 0    
    }
  },
  rearLeftData: {
    data: {
      latDistance: 0,
      yawAngle: 0,
      motorTorque: 0,
      motorSpeed: 0    
    }
  },
  rearRightData: {
    data: {
      latDistance: 0,
      yawAngle: 0,
      motorTorque: 0,
      motorSpeed: 0    
    }
  },

}

export default function itcTestData(state = { data: defaultState }, action) {
  switch(action.type) {
    case SET_ITC_TEST_DATA:
      return Object.assign({}, state, action);
    default:
      return state;
  } 
}

 