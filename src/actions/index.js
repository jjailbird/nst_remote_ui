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

// ITC_SETUP ================================================================
export const SET_ITCSETUP_FRONT_LEFT_DATA = 'SET_ITCSETUP_FRONT_LEFT_DATA';
export const SET_ITCSETUP_FRONT_RIGHT_DATA = 'SET_ITCSETUP_FRONT_RIGHT_DATA';
export const SET_ITCSETUP_REAR_LEFT_DATA = 'SET_ITCSETUP_REAR_LEFT_DATA';
export const SET_ITCSETUP_REAR_RIGHT_DATA = 'SET_ITCSETUP_REAR_RIGHT_DATA';
// ==========================================================================


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



// ITC_SETUP ================================================================
export const setItcSetupFrontLeftData = (data) => {
  return {
    type: SET_ITCSETUP_FRONT_LEFT_DATA,
    data
  }
}
export const setItcSetupFrontRightData = (data) => {
  return {
    type: SET_ITCSETUP_FRONT_RIGHT_DATA,
    data
  }
}
export const setItcSetupRearLeftData = (data) => {
  return {
    type: SET_ITCSETUP_REAR_LEFT_DATA,
    data
  }
}
export const setItcSetupRearRightData = (data) => {
  return {
    type: SET_ITCSETUP_REAR_RIGHT_DATA,
    data
  }
}
// ==========================================================================


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

// ITC RUN - control buttons ------------------------------------------------------------------------------------------------------
export const SET_CRTL_1_ACTIVE = 'SET_CRTL_1_ACTIVE';
export const SET_CRTL_1_MODE = 'SET_CRTL_1_MODE';
export const SET_CRTL_1_SENSOR_TYPE = 'SET_CRTL_1_SENSOR_TYPE';
export const SET_CRTL_1_CONTROL_TYPE = 'SET_CRTL_1_CONTROL_TYPE';
export const SET_CRTL_1_WF_LATERAL_SENSOR = 'SET_CRTL_1_WF_LATERAL_SENSOR';
export const SET_CRTL_1_WF_CONTROL_MODE = 'SET_CRTL_1_WF_CONTROL_MODE';
export const SET_CRTL_1_WF_YAW_SENSOR = 'SET_CRTL_1_WF_YAW_SENSOR';
export const SET_CRTL_1_WF_CONTROL_TYPE = 'SET_CRTL_1_WF_CONTROL_TYPE';

export const SET_CRTL_2_ACTIVE = 'SET_CRTL_2_ACTIVE';
export const SET_CRTL_2_MODE = 'SET_CRTL_2_MODE';
export const SET_CRTL_2_SENSOR_TYPE = 'SET_CRTL_2_SENSOR_TYPE';
export const SET_CRTL_2_CONTROL_TYPE = 'SET_CRTL_2_CONTROL_TYPE';
export const SET_CRTL_2_WF_LATERAL_SENSOR = 'SET_CRTL_2_WF_LATERAL_SENSOR';
export const SET_CRTL_2_WF_CONTROL_MODE = 'SET_CRTL_2_WF_CONTROL_MODE';
export const SET_CRTL_2_WF_YAW_SENSOR = 'SET_CRTL_2_WF_YAW_SENSOR';
export const SET_CRTL_2_WF_CONTROL_TYPE = 'SET_CRTL_2_WF_CONTROL_TYPE';

export const setCrtl1Active = (data) => {
  return {
    type: SET_CRTL_1_ACTIVE,
    data
  }
}
export const setCrtl1Mode = (data) => {
  return {
    type: SET_CRTL_1_MODE,
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
export const setCrtl1WFLateralSensor = (data) => {
  return {
    type: SET_CRTL_1_WF_LATERAL_SENSOR,
    data
  }
}
export const setCrtl1WFControlMode = (data) => {
  return {
    type: SET_CRTL_1_WF_CONTROL_MODE,
    data
  }
}
export const setCrtl1WFYawSensor = (data) => {
  return {
    type: SET_CRTL_1_WF_YAW_SENSOR,
    data
  }
}

export const setCrtl1WFControlType = (data) => {
  return {
    type: SET_CRTL_1_WF_CONTROL_TYPE,
    data
  }
}

export const setCrtl2Active = (data) => {
  return {
    type: SET_CRTL_2_ACTIVE,
    data
  }
}

export const setCrtl2Mode = (data) => {
  return {
    type: SET_CRTL_2_MODE,
    data
  }
}

export const setCrtl2SensorType = (data) => {
  return {
    type: SET_CRTL_2_SENSOR_TYPE,
    data
  }
}

export const setCrtl2ControlType = (data) => {
  return {
    type: SET_CRTL_2_CONTROL_TYPE,
    data
  }
}
export const setCrtl2WFLateralSensor = (data) => {
  return {
    type: SET_CRTL_2_WF_LATERAL_SENSOR,
    data
  }
}
export const setCrtl2WFControlMode = (data) => {
  return {
    type: SET_CRTL_2_WF_CONTROL_MODE,
    data
  }
}
export const setCrtl2WFYawSensor = (data) => {
  return {
    type: SET_CRTL_2_WF_YAW_SENSOR,
    data
  }
}
export const setCrtl2WFControlType = (data) => {
  return {
    type: SET_CRTL_2_WF_CONTROL_TYPE,
    data
  }
}
// --------------------------------------------------------------------------------------------------------------------------------

// ITC SETUP - control buttons ----------------------------------------------------------------------------------------------------
export const SET_TUNING_FRONT_PGAIN = 'SET_TUNING_FRONT_PGAIN';
export const SET_TUNING_FRONT_IGAIN = 'SET_TUNING_FRONT_IGAIN';
export const SET_TUNING_REAR_PGAIN = 'SET_TUNING_REAR_PGAIN';
export const SET_TUNING_REAR_IGAIN = 'SET_TUNING_REAR_IGAIN';

export const setTuningFrontPgain = (data) => {
  return {
    type: SET_TUNING_FRONT_PGAIN,
    data
  }
}
export const setTuningFrontIgain = (data) => {
  return {
    type: SET_TUNING_FRONT_IGAIN,
    data
  }
}
export const setTuningRearPgain = (data) => {
  return {
    type: SET_TUNING_REAR_PGAIN,
    data
  }
}
export const setTuningRearIgain = (data) => {
  return {
    type: SET_TUNING_REAR_IGAIN,
    data
  }
}
// --------------------------------------------------------------------------------------------------------------------------------

// ITC RUN - chart tab type -------------------------------------------------------------------------------------------------------
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