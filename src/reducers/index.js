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

import itcTestData from './itcTestData';

// TEST_SETUP =======================================================
import bmsSocData from './bmsSocData';
import bmsTempData from './bmsTempData';
import invVoltData from './invVoltData';
import invTempData from './invTempData';
import bcuMBogieData from './bcuMBogieData';
import bcuMTogieData from './bcuTBogieData';
import driveInfoData from './driveInfoData';

//DRIVE =======================================================
import driveData from './driveData';

const reducers = combineReducers({ 
  itcTestData,
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
  driveData
});

export default reducers;
