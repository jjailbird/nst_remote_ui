// ITC_TEST =======================================================
export const SET_FRONT_LEFT_DATA = 'SET_FRONT_LEFT_DATA';
export const SET_FRONT_RIGHT_DATA = 'SET_FRONT_RIGHT_DATA';
export const SET_REAR_LEFT_DATA = 'SET_REAR_LEFT_DATA';
export const SET_REAR_RIGHT_DATA = 'SET_REAR_RIGHT_DATA';
export const SET_FRONT_LEFT_MOTOR = 'SET_FRONT_LEFT_MOTOR';
export const SET_FRONT_RIGHT_MOTOR = 'SET_FRONT_RIGHT_MOTOR';
export const SET_REAR_LEFT_MOTOR = 'SET_REAR_LEFT_MOTOR';
export const SET_REAR_RIGHT_MOTOR = 'SET_REAR_RIGHT_MOTOR';
export const SET_MOTOR_CONTROL_DATA = 'SET_MOTOR_CONTROL_DATA';
export const SET_FRONT_WHEELSET_DATA = 'SET_FRONT_WHEELSET_DATA';
export const SET_REAR_WHEELSET_DATA = 'SET_REAR_WHEELSET_DATA';
export const SET_FRONT_LASER_DATA = 'SET_FRONT_LASER_DATA';
export const SET_REAR_LASER_DATA = 'SET_REAR_LASER_DATA';
export const SET_FRONT_SENSOR_DATA = 'SET_FRONT_SENSOR_DATA';
export const SET_REAR_SENSOR_DATA = 'SET_REAR_SENSOR_DATA';

// TEST_SETUP =======================================================
export const SET_BMS_SOC_DATA = 'SET_BMS_SOC_DATA';
export const SET_BMS_TEMP_DATA = 'SET_BMS_TEMP_DATA';
export const SET_INV_VOLT_DATA = 'SET_INV_VOLT_DATA';
export const SET_INV_TEMP_DATA = 'SET_INV_TEMP_DATA';
export const SET_BCU_M_BOGIE_DATA = 'SET_BCU_M_BOGIE_DATA';
export const SET_BCU_T_BOGIE_DATA = 'SET_BCU_T_BOGIE_DATA';
export const SET_DRIVE_INFO_DATA = 'SET_DRIVE_INFO_DATA';
// ===================================================================

// TEST_SETUP COMMAND ================================================
export const SET_EMERGENCY_STOP = 'SET_EMERGENCY_STOP';
export const SET_RUN_SWITCH = 'SET_RUN_SWITCH';
export const SET_DIRECTION_SWITCH = 'SET_DIRECTION_SWITCH';
export const SET_DRIVE_LEVER = 'SET_DRIVE_LEVER';
export const SET_DRIVE_MODE = 'SET_DRIVE_MODE';

export const SET_POWER = 'SET_POWER';
export const SET_LIGHT = 'SET_LIGHT';
export const SET_INV_CON1 = 'SET_INV_CON1';
export const SET_INV_CON2 = 'SET_INV_CON2';
export const SET_TBMS = 'SET_TBMS';
export const SET_DCDC = 'SET_DCDC';
export const SET_APC = 'SET_APC';
export const SET_INV_OUT1 = 'SET_INV_OUT1';
export const SET_INV_OUT2 = 'SET_INV_OUT2';
export const SET_SBMS = 'SET_SBMS';
export const SET_SINV = 'SET_SINV';
export const SET_CAMERA = 'SET_CAMERA';
export const SET_HYDRO_BK = 'SET_HYDRO_BK';
export const SET_REGEN_BK = 'SET_REGEN_BK';
// ===================================================================

//DRIVE =======================================================
export const SET_DRIVE_DATA = 'SET_DRIVE_DATA';

// HSC_TEST =======================================================
export const SET_FRONT_LEFT_HSC_DATA = 'SET_FRONT_LEFT_HSC_DATA';
export const SET_FRONT_RIGHT_HSC_DATA = 'SET_FRONT_RIGHT_HSC_DATA';
export const SET_REAR_LEFT_HSC_DATA = 'SET_REAR_LEFT_HSC_DATA';
export const SET_REAR_RIGHT_HSC_DATA = 'SET_REAR_RIGHT_HSC_DATA';
export const SET_MOTOR_CONTROL_HSC_DATA = 'SET_MOTOR_CONTROL_HSC_DATA';
export const SET_FRONT_WHEELSET_HSC_DATA = 'SET_FRONT_WHEELSET_HSC_DATA';
export const SET_REAR_WHEELSET_HSC_DATA = 'SET_REAR_WHEELSET_HSC_DATA';

// HSC_SETUP =======================================================

export const setFrontLeftData = (data) => {
  return {
    type: SET_FRONT_LEFT_DATA,
    data
  }
}
export const setFrontRightData = (data) => {
  return {
    type: SET_FRONT_RIGHT_DATA,
    data
  }
}
export const setRearLeftData = (data) => {
  return {
    type: SET_REAR_LEFT_DATA,
    data
  }
}
export const setRearRightData = (data) => {
  return {
    type: SET_REAR_RIGHT_DATA,
    data
  }
}
export const setFrontLeftMotorData = (data) => {
  return {
    type: SET_FRONT_LEFT_MOTOR,
    data
  }
}
export const setFrontRightMotorData = (data) => {
  return {
    type: SET_FRONT_RIGHT_MOTOR,
    data
  }
}
export const setRearLeftMotorData = (data) => {
  return {
    type: SET_REAR_LEFT_MOTOR,
    data
  }
}
export const setRearRightMotorData = (data) => {
  return {
    type: SET_REAR_RIGHT_MOTOR,
    data
  }
}
export const setMotorControlData = (data) => {
  return {
    type: SET_MOTOR_CONTROL_DATA,
    data
  }
}
export const setFrontWheelsetData = (data) => {
  return {
    type: SET_FRONT_WHEELSET_DATA,
    data
  }
}
export const setRearWheelsetData = (data) => {
  return {
    type: SET_REAR_WHEELSET_DATA,
    data
  }
}
export const setBmsSocData = (data) => {
  return {
    type: SET_BMS_SOC_DATA,
    data
  }
}
export const setBmsTempData = (data) => {
  return {
    type: SET_BMS_TEMP_DATA,
    data
  }
}
export const setInvVoltData = (data) => {
  return {
    type: SET_INV_VOLT_DATA,
    data
  }
}
export const setInvTempData = (data) => {
  return {
    type: SET_INV_TEMP_DATA,
    data
  }
}
export const setBcuMBogieData = (data) => {
  return {
    type: SET_BCU_M_BOGIE_DATA,
    data
  }
}
export const setBcuTBogieData = (data) => {
  return {
    type: SET_BCU_T_BOGIE_DATA,
    data
  }
}
export const setDriveInfoData = (data) => {
  return {
    type: SET_DRIVE_INFO_DATA,
    data
  }
}
export const setFrontLaserData = (data) => {
  return {
    type: SET_FRONT_LASER_DATA,
    data
  }
}
export const setRearLaserData = (data) => {
  return {
    type: SET_REAR_LASER_DATA,
    data
  }
}
export const setDriveData = (data) => {
  return {
    type: SET_DRIVE_DATA,
    data
  }
}
export const setFrontSensorData = (data) => {
  return {
    type: SET_FRONT_SENSOR_DATA,
    data
  }
}
export const setRearSensorData = (data) => {
  return {
    type: SET_REAR_SENSOR_DATA,
    data
  }
}
export const setFrontLeftHscData = (data) => {
  return {
    type: SET_FRONT_LEFT_HSC_DATA,
    data
  }
}
export const setFrontRightHscData = (data) => {
  return {
    type: SET_FRONT_RIGHT_HSC_DATA,
    data
  }
}
export const setRearLeftHscData = (data) => {
  return {
    type: SET_REAR_LEFT_HSC_DATA,
    data
  }
}
export const setRearRightHscData = (data) => {
  return {
    type: SET_REAR_RIGHT_HSC_DATA,
    data
  }
}
export const setMotorControlHscData = (data) => {
  return {
    type: SET_MOTOR_CONTROL_HSC_DATA,
    data
  }
}
export const setFrontWheelsetHscData = (data) => {
  return {
    type: SET_FRONT_WHEELSET_HSC_DATA,
    data
  }
}
export const setRearWheelsetHscData = (data) => {
  return {
    type: SET_REAR_WHEELSET_HSC_DATA,
    data
  }
}


//  [DIO] command ============================================

export const setEmergencyStop = (data) => {
  return {
    type: SET_EMERGENCY_STOP,
    data
  }
}

export const setRunSwitch = (data) => {
  return {
    type: SET_RUN_SWITCH,
    data
  }
}

export const setDirectionSwitch = (data) => {
  return {
    type: SET_DIRECTION_SWITCH,
    data
  }
}

export const setDriveLever = (data) => {
  return {
    type: SET_DRIVE_LEVER,
    data
  }
}

export const setDriveMode = (data) => {
  return {
    type: SET_DRIVE_MODE,
    data
  }
}

// sequence
export const setPower = (data) => {
  // console.log('setpower', data);
  return {
    type: SET_POWER,
    data
  }
}
export const setLight = (data) => {
  return {
    type: SET_LIGHT,
    data
  }
}
export const setInvCon1 = (data) => {
  return {
    type: SET_INV_CON1,
    data
  }
}
export const setInvCon2 = (data) => {
  return {
    type: SET_INV_CON2,
    data
  }
}
export const setTbms = (data) => {
  return {
    type: SET_TBMS,
    data
  }
}
export const setDcDc = (data) => {
  return {
    type: SET_DCDC,
    data
  }
}
export const setApc = (data) => {
  return {
    type: SET_APC,
    data
  }
}
export const setInvOut1 = (data) => {
  return {
    type: SET_INV_OUT1,
    data
  }
}
export const setInvOut2 = (data) => {
  return {
    type: SET_INV_OUT2,
    data
  }
}
export const setSbms = (data) => {
  return {
    type: SET_SBMS,
    data
  }
}
export const setSinv = (data) => {
  return {
    type: SET_SINV,
    data
  }
}
export const setCamera = (data) => {
  return {
    type: SET_CAMERA,
    data
  }
}
export const setHydroBk = (data) => {
  return {
    type: SET_HYDRO_BK,
    data
  }
}
export const setRegenBk = (data) => {
  return {
    type: SET_REGEN_BK,
    data
  }
}

// =========================================================