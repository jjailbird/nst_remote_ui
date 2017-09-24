// TEST_SETUP  =====================================================
export const SET_TEST_SETUP_DATA = 'SET_TEST_SETUP_DATA';

export const SET_EMERGENCY_STOP = 'SET_EMERGENCY_STOP';
export const SET_RUN_SWITCH = 'SET_RUN_SWITCH';
export const SET_DIRECTION_SWITCH = 'SET_DIRECTION_SWITCH';
export const SET_DRIVE_LEVER = 'SET_DRIVE_LEVER';
export const SET_DRIVE_MODE = 'SET_DRIVE_MODE';

// COMMAND -------------------------------------------------
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

export const SET_POSITION_START = 'SET_POSITION_START';
export const SET_POSITION_STOP = 'SET_POSITION_STOP';

// Receive Data -------------------------------------
export const SET_TBMS_SOC_1 = 'SET_TBMS_SOC_1';
export const SET_TBMS_SOC_2 = 'SET_TBMS_SOC_2';
export const SET_TBMS_SOC_3 = 'SET_TBMS_SOC_3';
export const SET_TBMS_SOC_4 = 'SET_TBMS_SOC_4';

export const SET_TBMS_TEMP_1 = 'SET_TBMS_TEMP_1';
export const SET_TBMS_TEMP_2 = 'SET_TBMS_TEMP_2';
export const SET_TBMS_TEMP_3 = 'SET_TBMS_TEMP_3';
export const SET_TBMS_TEMP_4 = 'SET_TBMS_TEMP_4';

export const SET_INV_VOLT_1 = 'SET_INV_VOLT_1';
export const SET_INV_VOLT_2 = 'SET_INV_VOLT_2';
export const SET_INV_VOLT_3 = 'SET_INV_VOLT_3';
export const SET_INV_VOLT_4 = 'SET_INV_VOLT_4';

export const SET_INV_TEMP_1 = 'SET_INV_TEMP_1';
export const SET_INV_TEMP_2 = 'SET_INV_TEMP_2';
export const SET_INV_TEMP_3 = 'SET_INV_TEMP_3';
export const SET_INV_TEMP_4 = 'SET_INV_TEMP_4';

export const SET_CBMS_SOC_1 = 'SET_CBMS_SOC_1';
export const SET_CBMS_VOLT_1 = 'SET_CBMS_VOLT_1';
export const SET_SBMS_SOC_1 = 'SET_SBMS_SOC_1';
export const SET_SBMS_SOC_2 = 'SET_SBMS_SOC_2';
export const SET_SBMS_VOLT_1 = 'SET_SBMS_VOLT_1';
export const SET_SBMS_VOLT_2 = 'SET_SBMS_VOLT_2';
// ---------------------------------------------------


// TEST SETUP Vehicle Status Buttons ----------------
export const setTestSetupData = (data) => {
  // console.log('setpower', data);
  return {
    type: SET_TEST_SETUP_DATA,
    data
  }
}

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
// ---------------------------------------------

export const setTbmsSoc1 = (data) => {
  return {
    type: SET_TBMS_SOC_1,
    data
  }
}

export const setTbmsSoc2 = (data) => {
  return {
    type: SET_TBMS_SOC_2,
    data
  }
}

export const setTbmsSoc3 = (data) => {
  return {
    type: SET_TBMS_SOC_3,
    data
  }
}

export const setTbmsSoc4 = (data) => {
  return {
    type: SET_TBMS_SOC_4,
    data
  }
}
export const setTbmsTemp1 = (data) => {
  return {
    type: SET_TBMS_TEMP_1,
    data
  }
}
export const setTbmsTemp2 = (data) => {
  return {
    type: SET_TBMS_TEMP_2,
    data
  }
}
export const setTbmsTemp3 = (data) => {
  return {
    type: SET_TBMS_TEMP_3,
    data
  }
}
export const setTbmsTemp4 = (data) => {
  return {
    type: SET_TBMS_TEMP_4,
    data
  }
}
export const setInvVolt1 = (data) => {
  return {
    type: SET_INV_VOLT_1,
    data
  }
}
export const setInvVolt2 = (data) => {
  return {
    type: SET_INV_VOLT_2,
    data
  }
}
export const setInvVolt3 = (data) => {
  return {
    type: SET_INV_VOLT_3,
    data
  }
}
export const setInvVolt4 = (data) => {
  return {
    type: SET_INV_VOLT_4,
    data
  }
}
export const setInvTemp1 = (data) => {
  return {
    type: SET_INV_TEMP_1,
    data
  }
}
export const setInvTemp2 = (data) => {
  return {
    type: SET_INV_TEMP_2,
    data
  }
}
export const setInvTemp3 = (data) => {
  return {
    type: SET_INV_TEMP_3,
    data
  }
}
export const setInvTemp4 = (data) => {
  return {
    type: SET_INV_TEMP_4,
    data
  }
}
export const setCbmsSoc1 = (data) => {
  return {
    type: SET_CBMS_SOC_1,
    data
  }
}
export const setCbmsVolt1 = (data) => {
  return {
    type: SET_CBMS_VOLT_1,
    data
  }
}
export const setSbmsSoc1 = (data) => {
  return {
    type: SET_SBMS_SOC_1,
    data
  }
}
export const setSbmsSoc2 = (data) => {
  return {
    type: SET_SBMS_SOC_2,
    data
  }
}
export const setSbmsVolt1 = (data) => {
  return {
    type: SET_SBMS_VOLT_1,
    data
  }
}
export const setSbmsVolt2 = (data) => {
  return {
    type: SET_SBMS_VOLT_2,
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
// =========================================================