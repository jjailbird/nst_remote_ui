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

// HSC RUN - control buttons ------------------------------------------------------------------------------------------------------
export const SET_RUN_DEMO = 'SET_RUN_DEMO';

export const SET_CRTL_1_ACTIVE = 'SET_CRTL_1_ACTIVE';
export const SET_CRTL_1_POWER = 'SET_CRTL_1_POWER';
export const SET_CRTL_1_ZERO = 'SET_CRTL_1_ZERO';
export const SET_CRTL_1_SENSOR_TYPE = 'SET_CRTL_1_SENSOR_TYPE';
export const SET_CRTL_1_CONTROL_TYPE = 'SET_CRTL_1_CONTROL_TYPE';

export const SET_CRTL_1_SR_ACTIVE_A = 'SET_CRTL_1_SR_ACTIVE_A';
export const SET_CRTL_1_SR_ACTIVE_B = 'SET_CRTL_1_SR_ACTIVE_B';
export const SET_CRTL_1_SR_ACTIVE_A2 = 'SET_CRTL_1_SR_ACTIVE_A2';
export const SET_CRTL_1_SR_ACTIVE_B2 = 'SET_CRTL_1_SR_ACTIVE_B2';

export const setRunDemo = (data) => {
  return {
    type: SET_RUN_DEMO,
    data
  }
}

export const setCrtl1Active = (data) => {
  return {
    type: SET_CRTL_1_ACTIVE,
    data
  }
}
export const setCrtl1Power = (data) => {
  return {
    type: SET_CRTL_1_POWER,
    data
  }
}
export const setCrtl1Zero = (data) => {
  return {
    type: SET_CRTL_1_ZERO,
    data
  }
}
export const setCrtl1SensorType = (data) => {
  return {
    type: SET_CRTL_1_SENSOR_TYPE,
    data
  }
}
export const setCrtl1ControlType = (data) => {
  return {
    type: SET_CRTL_1_CONTROL_TYPE,
    data
  }
}
export const setCrtl1SRActiveA = (data) => {
  return {
    type: SET_CRTL_1_SR_ACTIVE_A,
    data
  }
}
export const setCrtl1SRActiveB = (data) => {
  return {
    type: SET_CRTL_1_SR_ACTIVE_B,
    data
  }
}
export const setCrtl1SRActiveA2 = (data) => {
  return {
    type: SET_CRTL_1_SR_ACTIVE_A2,
    data
  }
}

export const setCrtl1SRActiveB2 = (data) => {
  return {
    type: SET_CRTL_1_SR_ACTIVE_B2,
    data
  }
}
// --------------------------------------------------------------------------------------------------------------------------------

// HSC RUN - chart tab type -------------------------------------------------------------------------------------------------------
export const SET_CHART_TYPE_FRONT_LEFT = 'SET_CHART_TYPE_FRONT_LEFT';
export const SET_CHART_TYPE_FRONT_RIGHT = 'SET_CHART_TYPE_FRONT_RIGHT';
export const SET_CHART_TYPE_REAR_LEFT = 'SET_CHART_TYPE_REAR_LEFT';
export const SET_CHART_TYPE_REAR_RIGHT = 'SET_CHART_TYPE_REAR_RIGHT';

export const setChartTypeFrontLeft = (data) => {
  return {
    type: SET_CHART_TYPE_FRONT_LEFT,
    data
  }
}
export const setChartTypeFrontRight = (data) => {
  return {
    type: SET_CHART_TYPE_FRONT_RIGHT,
    data
  }
}
export const setChartTypeRearLeft = (data) => {
  return {
    type: SET_CHART_TYPE_REAR_LEFT,
    data
  }
}
export const setChartTypeRearRight = (data) => {
  return {
    type: SET_CHART_TYPE_REAR_RIGHT,
    data
  }
}
// --------------------------------------------------------------------------------------------------------------------------------

// HSC SETUP - control buttons ----------------------------------------------------------------------------------------------------
export const SET_TUNING_FRONT_1_PGAIN = 'SET_TUNING_FRONT_1_PGAIN';
export const SET_TUNING_FRONT_1_IGAIN = 'SET_TUNING_FRONT_1_IGAIN';
export const SET_TUNING_REAR_1_PGAIN = 'SET_TUNING_REAR_1_PGAIN';
export const SET_TUNING_REAR_1_IGAIN = 'SET_TUNING_REAR_1_IGAIN';

export const setTuningFront1Pgain = (data) => {
  return {
    type: SET_TUNING_FRONT_1_PGAIN,
    data
  }
}
export const setTuningFront1Igain = (data) => {
  return {
    type: SET_TUNING_FRONT_1_IGAIN,
    data
  }
}
export const setTuningRear1Pgain = (data) => {
  return {
    type: SET_TUNING_REAR_1_PGAIN,
    data
  }
}
export const setTuningRear1Igain = (data) => {
  return {
    type: SET_TUNING_REAR_1_IGAIN,
    data
  }
}
export const SET_TUNING_FRONT_2_PGAIN = 'SET_TUNING_FRONT_2_PGAIN';
export const SET_TUNING_FRONT_2_IGAIN = 'SET_TUNING_FRONT_2_IGAIN';
export const SET_TUNING_REAR_2_PGAIN = 'SET_TUNING_REAR_2_PGAIN';
export const SET_TUNING_REAR_2_IGAIN = 'SET_TUNING_REAR_2_IGAIN';
export const SET_CAR_MASS = 'SET_CAR_MASS';
export const SET_CURRENT_A_VALUE = 'SET_CURRENT_A_VALUE';

export const setTuningFront2Pgain = (data) => {
  return {
    type: SET_TUNING_FRONT_2_PGAIN,
    data
  }
}
export const setTuningFront2Igain = (data) => {
  return {
    type: SET_TUNING_FRONT_2_IGAIN,
    data
  }
}
export const setTuningRear2Pgain = (data) => {
  return {
    type: SET_TUNING_REAR_2_PGAIN,
    data
  }
}
export const setTuningRear2Igain = (data) => {
  return {
    type: SET_TUNING_REAR_2_IGAIN,
    data
  }
}
export const setCarMass = (data) => {
  return {
    type: SET_CAR_MASS,
    data
  }
}
export const setCurrentAValue = (data) => {
  return {
    type: SET_CURRENT_A_VALUE,
    data
  }
}
// --------------------------------------------------------------------------------------------------------------------------------