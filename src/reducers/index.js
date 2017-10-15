// ITC_TEST =======================================================
import { combineReducers } from 'redux';
//DRIVE =======================================================
import driveData from './driveData';
// HSC_SETUP =======================================================

import setM2SetupButtons from './setM2SetupButtons';
import setM2SetupData from './setM2SetupData';

const reducers = combineReducers({ 
  driveData,
  setM2SetupButtons,
  setM2SetupData
});

export default reducers;
