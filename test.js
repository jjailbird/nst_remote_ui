 /*
    HRO_001 : 0
    HRO_002 : 1
    HRO_003 : 1
    HRO_004 : 0
    HRO_005 : 0
    HRO_006 : 16 
    HRO_007 : 16
    HRO_008 : 25
    HRO_009 : 25    
*/

if(json.HRO_001 !== undefined) {
  const value = json.HRO_001 == 1 ? 'On' : 'Off';
  dispatch(setCrtl1Active(value));
}

if(json.HRO_002 !== undefined) {
  const value = json.HRO_002 == 1 ? 'On' : 'Off';
  dispatch(setCrtl1Power(value));
}

if(json.HRO_003 !== undefined) {
  const value = json.HRO_003 == 1 ? 'On' : 'Off';
  dispatch(setCrtl1Zero(value));
}

if(json.HRO_004 !== undefined) {
  const value = json.HRO_004 == 0 ? 'LVDT' : 'Gyro';
  dispatch(setCrtl1SensorType(value));
}

if(json.HRO_005 !== undefined) {
  let cValue = 0;
  switch(json.HRO_005) {
    default:
      cValue = 'Passive';
      break;
    case 1:
      cValue = 'Active A';
      break;
    case 2:
      cValue = 'Active A2';
      break;
    case 3:
      cValue = 'Active B';
      break;
    case 4:
      cValue = 'Active B2';
      break;                               
  }
  dispatch(setCrtl1ControlType(cValue));
}

if(json.HRO_006 !== undefined) {
  const value = json.HRO_006;
  dispatch(setCrtl1SRActiveA(value));
}

if(json.HRO_007 !== undefined) {
  const value = json.HRO_007;
  dispatch(setCrtl1SRActiveA2(value));
}

if(json.HRO_008 !== undefined) {
  const value = json.HRO_008;
  dispatch(setCrtl1SRActiveB(value));
}

if(json.HRO_009 !== undefined) {
  const value = json.HRO_009;
  dispatch(setCrtl1SRActiveB2(value));
}
