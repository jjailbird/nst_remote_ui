// ITC_TEST =======================================================
import { combineReducers } from 'redux';
import frontLeftData from './frontLeftData';
import frontRightData from './frontRightData';
import rearLeftData from './rearLeftData';
import rearRightData from './rearRightData';
import frontLeftMotorData from './frontLeftMotorData';
import frontRightMotorData from './frontRightMotorData';
import rearLeftMotorData from './rearLeftMotorData';
import rearRightMotorData from './rearRightMotorData';
import motorControlData from './motorControlData';
import frontWheelsetData from './frontWheelsetData';
import rearWheelsetData from './rearWheelsetData';
import frontLaserData from './frontLaserData';
import rearLaserData from './rearLaserData';
import frontSensorData from './frontSensorData';
import rearSensorData from './rearSensorData';
// ===================================================================

// ITC_SETUP =========================================================
import setItcSetupFrontLeftData from './setItcSetupFrontLeftData';
import setItcSetupFrontRightData from './setItcSetupFrontRightData';
import setItcSetupRearLeftData from './setItcSetupRearLeftData';
import setItcSetupRearRightData from './setItcSetupRearRightData';
// ===================================================================

import setM2SetupButtons from './setM2SetupButtons';

const reducers = combineReducers({ 
  frontLeftData,
  frontRightData,
  rearLeftData,
  rearRightData,
  frontLeftMotorData,
  frontRightMotorData,
  rearLeftMotorData,
  rearRightMotorData,
  motorControlData,
  frontWheelsetData,
  rearWheelsetData,
  frontLaserData,
  rearLaserData,
  frontSensorData,
  rearSensorData,
  setItcSetupFrontLeftData,
  setItcSetupFrontRightData,
  setItcSetupRearLeftData,
  setItcSetupRearRightData,
  setM2SetupButtons
});

export default reducers;
