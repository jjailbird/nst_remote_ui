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

// TEST_SETUP =======================================================
import bmsSocData from './bmsSocData';
import bmsTempData from './bmsTempData';
import invVoltData from './invVoltData';
import invTempData from './invTempData';
import bcuMBogieData from './bcuMBogieData';
import bcuMTogieData from './bcuTBogieData';
import driveInfoData from './driveInfoData';
// ===================================================================

// TEST_SETUP COMMAND ================================================
import setEmergencyStop from './setEmergencyStop';
import setRunSwitch from './setRunSwitch';
import setDirectionSwitch from './setDirectionSwitch';
import setDriveLever from './setDriveLever'
import setDriveMode from './setDriveMode'
// ===================================================================


//DRIVE =======================================================
import driveData from './driveData';

// HSC_TEST =======================================================
import frontLeftHscData from './frontLeftHscData';
import frontRightHscData from './frontRightHscData';
import rearLeftHscData from './rearLeftHscData';
import rearRightHscData from './rearRightHscData';
import motorControlHscData from './motorControlHscData';
import frontWheelsetHscData from './frontWheelsetHscData';
import rearWheelsetHscData from './rearWheelsetHscData';
// HSC_SETUP =======================================================

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
  bmsSocData,
  bmsTempData,
  invVoltData,
  invTempData,
  bcuMBogieData,
  bcuMTogieData,
  driveInfoData,
  frontLaserData,
  rearLaserData,
  frontSensorData,
  rearSensorData,
  driveData,
  frontLeftHscData,
  frontRightHscData,
  rearLeftHscData,
  rearRightHscData,
  motorControlHscData,
  frontWheelsetHscData,
  rearWheelsetHscData,
  setEmergencyStop,
  setRunSwitch,
  setDirectionSwitch,
  setDriveLever,
  setDriveMode,
  setM2SetupButtons
});

export default reducers;
