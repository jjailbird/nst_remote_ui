// TEST_SETUP  =====================================================
export const SET_TEST_SETUP_DATA = 'SET_TEST_SETUP_DATA';
export const SET_DRIVE_LEVER = 'SET_DRIVE_LEVER';
export const SET_EMERGENCY_STOP = 'SET_EMERGENCY_STOP';
export const SET_DRIVE_DATA = 'SET_DRIVE_DATA';
// COMMAND -------------------------------------------------
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

export const SET_POWER = 'SET_POWER';
export const SET_LIGHT = 'SET_LIGHT';
export const SET_DRIVE_MODE = 'SET_DRIVE_MODE';
export const SET_RUN_DIRECTION = 'SET_RUN_DIRECTION';
export const SET_RUN_SWITCH = 'SET_RUN_SWITCH';
export const SET_HYDRO_BK = 'SET_HYDRO_BK';
export const SET_REGEN_BK = 'SET_REGEN_BK';

export const SET_POSITION_START = 'SET_POSITION_START';
export const SET_POSITION_STOP = 'SET_POSITION_STOP';
export const SET_LIMIT_SPEED_A = 'SET_LIMIT_SPEED_A';
export const SET_RUN_COUNT = 'SET_RUN_COUNT';

export const SET_LIMIT_SPEED_M = 'SET_LIMIT_SPEED_M';
export const SET_SHUNT_SPEED = 'SET_SHUNT_SPEED';


// TEST SETUP Vehicle Status Buttons ----------------
export const setTestSetupData = (data) => {
  // console.log('setTestSetupData', data);
  return {
    type: SET_TEST_SETUP_DATA,
    data
  }
}
export const setDriveData = (data) => {
  return {
    type: SET_DRIVE_DATA,
    data
  }
}
export const setDriveLever = (data) => {
  return {
    type: SET_DRIVE_LEVER,
    data
  }
}
export const setEmergencyStop = (data) => {
  return {
    type: SET_EMERGENCY_STOP,
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

export const setPower = (data) => {
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

export const setDriveMode = (data) => {
  console.log('setDriveMode!', data);
  return {
    type: SET_DRIVE_MODE,
    data
  }
}
export const setRunDirection = (data) => {
  return {
    type: SET_RUN_DIRECTION,
    data
  }
}
export const setRunSwitch = (data) => {
  return {
    type: SET_RUN_SWITCH,
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
export const setPositionStart = (data) => {
  return {
    type: SET_POSITION_START,
    data
  }
}
export const setPositionStop = (data) => {
  return {
    type: SET_POSITION_STOP,
    data
  }
}
export const setLimitSpeedA = (data) => {
  return {
    type: SET_LIMIT_SPEED_A,
    data
  }
}
export const setRunCount = (data) => {
  return {
    type: SET_RUN_COUNT,
    data
  }
}
export const setLimitSpeedM = (data) => {
  return {
    type: SET_LIMIT_SPEED_M,
    data
  }
}
export const setShuntSpeed = (data) => {
  return {
    type: SET_SHUNT_SPEED,
    data
  }
}
