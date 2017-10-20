import Websocket from 'react-websocket';
import { connect } from 'react-redux';
import { 
  // used actions ====================================================
  setFrontLeftHscData,//hsc data start
  setFrontRightHscData,
  setRearLeftHscData,
  setRearRightHscData,
  setFrontWheelsetHscData,
  setRearWheelsetHscData,
  setMotorControlHscData,
  // =================================================================

  setFrontLeftData,
  setFrontRightData,
  setRearLeftData,
  setRearRightData,
  setFrontLeftMotorData,
  setFrontRightMotorData,
  setRearLeftMotorData,
  setRearRightMotorData,
  setMotorControlData,
  setFrontWheelsetData,
  setRearWheelsetData,
  setBmsSocData,
  setBmsTempData,
  setInvVoltData,
  setInvTempData,
  setBcuMBogieData,
  setBcuTBogieData,
  setDriveInfoData,
  setFrontLaserData,
  setRearLaserData,
  setFrontSensorData,
  setRearSensorData,
  setDriveData
} from './actions';

import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import '../public/css/css.css';
import './components/css/SliderWeightFactor.css';
import './components/css/DynamicLineChart.css';
import './components/css/DynamicBarChart.css';
import './components/css/DonutDigitalChart.css';
import './components/css/DonutDivideLeftChart.css';
import './components/css/PanelControlButtonsLeft.css';
import './components/css/PanelControlButtonsRight.css';
import './components/css/TestSetupPanelDataContainerDonutChart.css'
import './components/css/TestSetupGaugeBar.css'

import {
  BrowserRouter as Router,
  Route, Redirect,
  NavLink
} from 'react-router-dom';

import { getRandomInt, getRandomFloat } from './utils/functions';

import ViewM3Main from './ViewM3Main';
import ViewM3Run from './ViewM3Run';
import ViewM3Setup from './ViewM3Setup';
import ViewM3Spec from './ViewM3Spec';

class App extends Component {
  constructor(props) {
    super(props);
    this.hostname = '192.168.1.2';
    // this.hostname = window.location.hostname;
    
    this.handleData = this.handleData.bind(this);
    //this.thick = this.thick.bind(this);
    
    // used variables ==============================================
    this.frontLeftHscData = {};
    this.frontLeftHscData.sylinder = [];
    this.frontLeftHscData.yawAngle = [];
    this.frontLeftHscData.aPort = [];
    this.frontLeftHscData.bPort = [];

    this.frontRightHscData = {};
    this.frontRightHscData.sylinder = [];
    this.frontRightHscData.yawAngle = [];
    this.frontRightHscData.aPort = [];
    this.frontRightHscData.bPort = [];

    this.rearLeftHscData = {};
    this.rearLeftHscData.sylinder = [];
    this.rearLeftHscData.yawAngle = [];
    this.rearLeftHscData.aPort = [];
    this.rearLeftHscData.bPort = [];

    this.rearRightHscData = {};
    this.rearRightHscData.sylinder = [];
    this.rearRightHscData.yawAngle = [];
    this.rearRightHscData.aPort = [];
    this.rearRightHscData.bPort = [];

    this.setFrontWheelsetHscData = {};
    this.setFrontWheelsetHscData.position = 0;
    this.setFrontWheelsetHscData.trackCurve = 0;
    this.setFrontWheelsetHscData.attackAngle = 0;
    this.setFrontWheelsetHscData.steeringRatio = 0;

    this.setRearWheelsetHscData = {};
    this.setRearWheelsetHscData.position = 0;
    this.setRearWheelsetHscData.trackCurve = 0;
    this.setRearWheelsetHscData.attackAngle = 0;
    this.setRearWheelsetHscData.steeringRatio = 0;
    
    this.setMotorControlHscData =  {};
    this.setMotorControlHscData.position = 0;
    this.setMotorControlHscData.curv = 0;
    this.setMotorControlHscData.speed = 0;

    this.setFrontLaserData = {};
    this.setFrontLaserData.lx = 0;
    this.setFrontLaserData.ly = 0;
    this.setFrontLaserData.rx = 0;
    this.setFrontLaserData.ry = 0;
    this.setFrontLaserData.g = 0;

    this.setRearLaserData = {};
    this.setRearLaserData.lx = 0;
    this.setRearLaserData.ly = 0;
    this.setRearLaserData.rx = 0;
    this.setRearLaserData.ry = 0;
    this.setRearLaserData.g = 0;

    this.setFrontSensorData = {};
    this.setFrontSensorData.leftApA = 0;
    this.setFrontSensorData.leftApS = 0;
    this.setFrontSensorData.leftBpA = 0;
    this.setFrontSensorData.leftBpS = 0;
    this.setFrontSensorData.leftLvdtA = 0;
    this.setFrontSensorData.leftLvdtS = 0;
    this.setFrontSensorData.rightApA = 0;
    this.setFrontSensorData.rightApS = 0;
    this.setFrontSensorData.rightBpA = 0;
    this.setFrontSensorData.rightBpS = 0;
    this.setFrontSensorData.rightLvdtA = 0;
    this.setFrontSensorData.rightLvdtS = 0;
    this.setFrontSensorData.gyroA = 0;
    this.setFrontSensorData.gyroS = 0;
    this.setFrontSensorData.gyroZ = 0;

    this.setRearSensorData = {};
    this.setRearSensorData.leftApA = 0;
    this.setRearSensorData.leftApS = 0;
    this.setRearSensorData.leftBpA = 0;
    this.setRearSensorData.leftBpS = 0;
    this.setRearSensorData.leftLvdtA = 0;
    this.setRearSensorData.leftLvdtS = 0;
    this.setRearSensorData.rightApA = 0;
    this.setRearSensorData.rightApS = 0;
    this.setRearSensorData.rightBpA = 0;
    this.setRearSensorData.rightBpS = 0;
    this.setRearSensorData.rightLvdtA = 0;
    this.setRearSensorData.rightLvdtS = 0;
    
    this.setRearSensorData.gyroA = 0;
    this.setRearSensorData.gyroS = 0;
    this.setRearSensorData.gyroZ = 0;
    // =============================================================
    this.frontLeftData = {};
    this.frontLeftData.latDistance = [];
    this.frontLeftData.yawAngle = [];
    this.frontLeftData.motorTorque = [];
    this.frontLeftData.motorSpeed = [];

    this.frontRightData = {};
    this.frontRightData.latDistance = [];
    this.frontRightData.yawAngle = [];
    this.frontRightData.motorTorque = [];
    this.frontRightData.motorSpeed = [];

    this.rearLeftData = {};
    this.rearLeftData.latDistance = [];
    this.rearLeftData.yawAngle = [];
    this.rearLeftData.motorTorque = [];
    this.rearLeftData.motorSpeed = [];

    this.rearRightData = {};
    this.rearRightData.latDistance = [];
    this.rearRightData.yawAngle = [];
    this.rearRightData.motorTorque = [];
    this.rearRightData.motorSpeed = [];

    this.frontLeftMotorData = {};
    this.frontLeftMotorData.rpm = 0;
    this.frontLeftMotorData.torque = 0;
    this.frontLeftMotorData.a = 0;
    this.frontLeftMotorData.b = 0;
    this.frontLeftMotorData.c = 0;
    this.frontLeftMotorData.temp = 0;

    this.frontRightMotorData = {};
    this.frontRightMotorData.rpm = 0;
    this.frontRightMotorData.torque = 0;
    this.frontRightMotorData.a = 0;
    this.frontRightMotorData.b = 0;
    this.frontRightMotorData.c = 0;
    this.frontRightMotorData.temp = 0;

    this.rearLeftMotorData = {};
    this.rearLeftMotorData.rpm = 0;
    this.rearLeftMotorData.torque = 0;
    this.rearLeftMotorData.a = 0;
    this.rearLeftMotorData.b = 0;
    this.rearLeftMotorData.c = 0;
    this.rearLeftMotorData.temp = 0;

    this.rearRightMotorData = {};
    this.rearRightMotorData.rpm = 0;
    this.rearRightMotorData.torque = 0;
    this.rearRightMotorData.a = 0;
    this.rearRightMotorData.b = 0;
    this.rearRightMotorData.c = 0;
    this.rearRightMotorData.temp = 0;

    this.setMotorControlData =  {};
    this.setMotorControlData.position = 0;
    this.setMotorControlData.curv = 0;
    this.setMotorControlData.speed = 0;

    this.setFrontWheelsetData = {};
    this.setFrontWheelsetData.position = 0;
    this.setFrontWheelsetData.trackCurve = 0;
    this.setFrontWheelsetData.attackAngle = 0;
    this.setFrontWheelsetData.steeringRatio = 0;

    this.setRearWheelsetData = {};
    this.setRearWheelsetData.position = 0;
    this.setRearWheelsetData.trackCurve = 0;
    this.setRearWheelsetData.attackAngle = 0;
    this.setRearWheelsetData.steeringRatio = 0;

    this.setBmsSocData = {};
    this.setBmsSocData.cell1 = 0;
    this.setBmsSocData.cell2 = 0;
    this.setBmsSocData.cell3 = 0;
    this.setBmsSocData.cell4 = 0;

    this.setBmsTempData = {};
    this.setBmsTempData.cell1 = 0;
    this.setBmsTempData.cell2 = 0;
    this.setBmsTempData.cell3 = 0;
    this.setBmsTempData.cell4 = 0;

    this.setInvVoltData = {};
    this.setInvVoltData.inv1 = 0;
    this.setInvVoltData.inv2 = 0;
    this.setInvVoltData.inv3 = 0;
    this.setInvVoltData.inv4 = 0;

    this.setInvTempData = {};
    this.setInvTempData.inv1 = 0;
    this.setInvTempData.inv2 = 0;
    this.setInvTempData.inv3 = 0;
    this.setInvTempData.inv4 = 0;

    this.setBcuMBogieData = {};
    this.setBcuMBogieData.b1 = 0;
    this.setBcuMBogieData.b2 = 0;
    this.setBcuMBogieData.b3 = 0;
    this.setBcuMBogieData.b4 = 0;

    this.setBcuTBogieData = {};
    this.setBcuTBogieData.b1 = 0;
    this.setBcuTBogieData.b2 = 0;
    this.setBcuTBogieData.b3 = 0;
    this.setBcuTBogieData.b4 = 0;

    this.setDriveInfoData = {};
    this.setDriveInfoData.notch = 0;
    this.setDriveInfoData.speed = [];
    this.setDriveInfoData.soc = 0;
    this.setDriveInfoData.tract = 0;
    this.setDriveInfoData.brake = 0;


    this.setDriveData = {};
    this.setDriveData.tracBatt = 0;
    this.setDriveData.contBatt = 0;
    this.setDriveData.maxInvTemp = 0;
    this.setDriveData.maxMotorTemp = 0;
    this.setDriveData.battTemp = 0;
    this.setDriveData.soc = 0;
    this.setDriveData.fwd = 0;
    this.setDriveData.speed = 0;
    this.setDriveData.position = 0;
    this.setDriveData.trat = 0;
    this.setDriveData.brake = 0;


    //hsc    
  }
  componentDidMount() {
    // this.timer = setInterval(this.thick, 1000 / 30);
  }
  handleData(data) {
    const json = JSON.parse(data); 
    // const HSCTEST = json.HSCTEST ? json.HSCTEST : null;
    // const HSCSETUP = json.HSCSETUP ? json.HSCSETUP : null; 
    const { dispatch, currentAValue } = this.props;
    // console.log('currentAValue', currentAValue);

    // HSC_RUN Front LEFT =====================================================
    if(json.HRI_012 != undefined) {
      if (this.frontLeftHscData.sylinder.length >= 292)
        this.frontLeftHscData.sylinder.shift();
      this.frontLeftHscData.sylinder.push(json.HRI_012);
    }  
    if(json.HRI_013 != undefined) {
      if (this.frontLeftHscData.yawAngle.length >= 292)
        this.frontLeftHscData.yawAngle.shift();
      this.frontLeftHscData.yawAngle.push(json.HRI_013);
    }  
    if(json.HRI_014 != undefined) {
      if (this.frontLeftHscData.aPort.length >= 292)
        this.frontLeftHscData.aPort.shift();
      this.frontLeftHscData.aPort.push(json.HRI_014);
    }  
    if(json.HRI_015 != undefined) {
      if (this.frontLeftHscData.bPort.length >= 292)
        this.frontLeftHscData.bPort.shift();
      this.frontLeftHscData.bPort.push(json.HRI_015);
    }  
    if(json.HRI_012 != undefined || json.HRI_013 != undefined || json.HRI_014 != undefined || json.HRI_015 != undefined){
      dispatch( setFrontLeftHscData(this.frontLeftHscData) );
    }      
    // =========================================================================

    // HSC_RUN Front Right =====================================================
    if(json.HRI_016 != undefined) {
      if (this.frontRightHscData.sylinder.length >= 292)
        this.frontRightHscData.sylinder.shift();
      this.frontRightHscData.sylinder.push(json.HRI_016);
    }  
    if(json.HRI_017 != undefined) {
      if (this.frontRightHscData.yawAngle.length >= 292)
        this.frontRightHscData.yawAngle.shift();
      this.frontRightHscData.yawAngle.push(json.HRI_017);
    }  
    if(json.HRI_018 != undefined) {
      if (this.frontRightHscData.aPort.length >= 292)
        this.frontRightHscData.aPort.shift();
      this.frontRightHscData.aPort.push(json.HRI_018);
    }  
    if(json.HRI_019 != undefined) {
      if (this.frontRightHscData.bPort.length >= 292)
        this.frontRightHscData.bPort.shift();
      this.frontRightHscData.bPort.push(json.HRI_019);
    }  
    if(json.HRI_016 != undefined || json.HRI_017 != undefined || json.HRI_018 != undefined || json.HRI_019 != undefined){
      dispatch( setFrontRightHscData(this.frontRightHscData) );
    }      
    // =========================================================================
    
    // HSC_RUN Rear LEFT =====================================================
    if(json.HRI_020 != undefined) {
      if (this.rearLeftHscData.sylinder.length >= 292)
        this.rearLeftHscData.sylinder.shift();
      this.rearLeftHscData.sylinder.push(json.HRI_020);
    }  
    if(json.HRI_021 != undefined) {
      if (this.rearLeftHscData.yawAngle.length >= 292)
        this.rearLeftHscData.yawAngle.shift();
      this.rearLeftHscData.yawAngle.push(json.HRI_021);
    }  
    if(json.HRI_022 != undefined) {
      if (this.rearLeftHscData.aPort.length >= 292)
        this.rearLeftHscData.aPort.shift();
      this.rearLeftHscData.aPort.push(json.HRI_022);
    }  
    if(json.HRI_023 != undefined) {
      if (this.rearLeftHscData.bPort.length >= 292)
        this.rearLeftHscData.bPort.shift();
      this.rearLeftHscData.bPort.push(json.HRI_023);
    }  
    if(json.HRI_020 != undefined || json.HRI_021 != undefined || json.HRI_022 != undefined || json.HRI_023 != undefined){
      dispatch( setRearLeftHscData(this.rearLeftHscData) );
    }      
    // =========================================================================
    // HSC_RUN Rear Right =====================================================
    if(json.HRI_024 != undefined) {
      if (this.rearRightHscData.sylinder.length >= 292)
        this.rearRightHscData.sylinder.shift();
      this.rearRightHscData.sylinder.push(json.HRI_024);
    }  
    if(json.HRI_025 != undefined) {
      if (this.rearRightHscData.yawAngle.length >= 292)
        this.rearRightHscData.yawAngle.shift();
      this.rearRightHscData.yawAngle.push(json.HRI_025);
    }  
    if(json.HRI_026 != undefined) {
      if (this.rearRightHscData.aPort.length >= 292)
        this.rearRightHscData.aPort.shift();
      this.rearRightHscData.aPort.push(json.HRI_026);
    }  
    if(json.HRI_027 != undefined) {
      if (this.rearRightHscData.bPort.length >= 292)
        this.rearRightHscData.bPort.shift();
      this.rearRightHscData.bPort.push(json.HRI_027);
    }  
    if(json.HRI_024 != undefined || json.HRI_025 != undefined || json.HRI_026 != undefined || json.HRI_027 != undefined){
      dispatch( setRearRightHscData(this.rearRightHscData) );
    }      
    // =========================================================================

    // HSC_RUN Front Wheelset ==================================================
    if(json.HRI_004 != undefined) {
      this.setFrontWheelsetHscData.position = json.HRI_004;
    }
    if(json.HRI_005 != undefined) {
      this.setFrontWheelsetHscData.trackCurve = json.HRI_005;
    }
    if(json.HRI_006 != undefined) {
      this.setFrontWheelsetHscData.attackAngle = json.HRI_006;
    }
    if(json.HRI_007 != undefined) {
      this.setFrontWheelsetHscData.steeringRatio = json.HRI_007;
    }
    if(json.HRI_004 != undefined || json.HRI_005 != undefined || json.HRI_006 != undefined || json.HRI_007 != undefined){
      dispatch( setFrontWheelsetHscData(this.setFrontWheelsetHscData) );
    }      
    // =========================================================================

    // HSC_RUN Rear Wheelset ==================================================
    if(json.HRI_008 != undefined) {
      this.setRearWheelsetHscData.position = json.HRI_008;
    }
    if(json.HRI_009 != undefined) {
      this.setRearWheelsetHscData.trackCurve = json.HRI_009;
    }
    if(json.HRI_010 != undefined) {
      this.setRearWheelsetHscData.attackAngle = json.HRI_010;
    }
    if(json.HRI_011 != undefined) {
      this.setRearWheelsetHscData.steeringRatio = json.HRI_011;
    }
    if(json.HRI_008 != undefined || json.HRI_009 != undefined || json.HRI_010 != undefined || json.HRI_011 != undefined){
      dispatch( setRearWheelsetHscData(this.setRearWheelsetHscData) );
    }      
    // =========================================================================

    // HSC_RUN Vehicle  ========================================================
    if(json.HRI_001 != undefined) {
      this.setMotorControlHscData.speed = json.HRI_001;
    }
    if(json.HRI_002 != undefined) {
      this.setMotorControlHscData.position = json.HRI_002;
    }
    if(json.HRI_003 != undefined) {
      this.setMotorControlHscData.curv = json.HRI_003;
    }
    if(json.HRI_001 != undefined || json.HRI_002 != undefined || json.HRI_003 != undefined) {
      dispatch( setMotorControlHscData(this.setMotorControlHscData) );
    }      
    // =========================================================================

    // HSC_SETUP Front LEFT Motor===============================================
    if(json.HSI_041 != undefined) {
      this.frontLeftMotorData.a = json.HSI_041;
    }
    if(json.HSI_042 != undefined) {
      this.frontLeftMotorData.b = json.HSI_042;
    }
    /*
    if(json.HSI_043 != undefined) {
      this.frontLeftMotorData.c = json.HSI_043;
    }
    */
    if(json.HSI_044 != undefined) {
      this.frontLeftMotorData.temp = json.HSI_044;
    }
    if(json.HSI_045 != undefined) {
      this.frontLeftMotorData.rpm = json.HSI_045;
    }
    if(json.HSI_046 != undefined) {
      this.frontLeftMotorData.torque = json.HSI_046;
    }

    if(json.HSI_041 != undefined || json.HSI_042 != undefined || json.HSI_043 != undefined || json.HSI_044 != undefined || json.HSI_045 != undefined || json.HSI_046 != undefined) {
      dispatch( setFrontLeftMotorData(this.frontLeftMotorData) );
    }      
    // =========================================================================
  
    // HSC_SETUP Front RIGHT Motor==============================================
    if(json.HSI_051 != undefined) {
      this.frontRightMotorData.a = json.HSI_051;
    }
    if(json.HSI_052 != undefined) {
      this.frontRightMotorData.b = json.HSI_052;
    }
    /*
    if(json.HSI_053 != undefined) {
      this.frontRightMotorData.c = json.HSI_053;
    }
    */
    if(json.HSI_054 != undefined) {
      this.frontRightMotorData.temp = json.HSI_054;
    }
    if(json.HSI_055 != undefined) {
      this.frontRightMotorData.rpm = json.HSI_055;
    }
    if(json.HSI_056 != undefined) {
      this.frontRightMotorData.torque = json.HSI_056;
    }

    if(json.HSI_051 != undefined || json.HSI_052 != undefined || json.HSI_053 != undefined || json.HSI_054 != undefined || json.HSI_055 != undefined || json.HSI_056 != undefined) {
      dispatch( setFrontRightMotorData(this.frontRightMotorData) );
    }      
    // =========================================================================
  
    // HSC_SETUP Rear LEFT Motor  ==============================================
    if(json.HSI_061 != undefined) {
      this.rearLeftMotorData.a = json.HSI_061;
    }
    if(json.HSI_062 != undefined) {
      this.rearLeftMotorData.b = json.HSI_062;
    }
    /*
    if(json.HSI_063 != undefined) {
      this.rearLeftMotorData.c = json.HSI_063;
    }
    */
    if(json.HSI_064 != undefined) {
      this.rearLeftMotorData.temp = json.HSI_064;
    }
    if(json.HSI_065 != undefined) {
      this.rearLeftMotorData.rpm = json.HSI_065;
    }
    if(json.HSI_066 != undefined) {
      this.rearLeftMotorData.torque = json.HSI_066;
    }

    if(json.HSI_061 != undefined || json.HSI_062 != undefined || json.HSI_063 != undefined || json.HSI_064 != undefined || json.HSI_065 != undefined || json.HSI_066 != undefined) {
      dispatch( setRearLeftMotorData(this.rearLeftMotorData) );
    }      
    // =========================================================================
    
    // HSC_SETUP Rear RIGHT Motor ==============================================
    if(json.HSI_071 != undefined) {
      this.rearRightMotorData.a = json.HSI_071;
    }
    if(json.HSI_072 != undefined) {
      this.rearRightMotorData.b = json.HSI_072;
    }
    /*
    if(json.HSI_073 != undefined) {
      this.rearRightMotorData.c = json.HSI_073;
    }
    */
    if(json.HSI_074 != undefined) {
      this.rearRightMotorData.temp = json.HSI_074;
    }
    if(json.HSI_075 != undefined) {
      this.rearRightMotorData.rpm = json.HSI_075;
    }
    if(json.HSI_076 != undefined) {
      this.rearRightMotorData.torque = json.HSI_076;
    }

    if(json.HSI_071 != undefined || json.HSI_072 != undefined || json.HSI_073 != undefined || json.HSI_074 != undefined || json.HSI_075 != undefined || json.HSI_076 != undefined) {
      dispatch( setRearRightMotorData(this.rearRightMotorData) );
    }      
    // =========================================================================
 
    // HSC_SETUP Front Sensor Front Axle  ======================================
    if(json.HSI_001 != undefined) {
      this.setFrontSensorData.leftApA = json.HSI_001;
      this.setFrontSensorData.leftApS = currentAValue.frontLeftA1 ? json.HSI_001 - currentAValue.frontLeftA1 : 0; // json.HSI_011;
    }
    if(json.HSI_002 != undefined) {
      this.setFrontSensorData.leftBpA = json.HSI_002;
      this.setFrontSensorData.leftBpS = currentAValue.frontLeftA2 ? json.HSI_002 - currentAValue.frontLeftA2 : 0; // json.HSI_012;
    }
    if(json.HSI_003 != undefined) {
      this.setFrontSensorData.leftLvdtA = json.HSI_003;
      this.setFrontSensorData.leftLvdtS = currentAValue.frontLeftA3 ? json.HSI_003 - currentAValue.frontLeftA3 : 0; // json.HSI_013;
    }
    if(json.HSI_004 != undefined) {
      this.setFrontSensorData.rightApA = json.HSI_004; 
      this.setFrontSensorData.rightApS = currentAValue.frontRightA1 ? json.HSI_004 - currentAValue.frontRightA1 : 0; // json.HSI_014;
    }
    if(json.HSI_005 != undefined) {
      this.setFrontSensorData.rightBpA = json.HSI_005;
      this.setFrontSensorData.rightBpS = currentAValue.frontRightA2 ? json.HSI_005 - currentAValue.frontRightA2 : 0; // json.HSI_015;
    }
    if(json.HSI_006 != undefined) {
      this.setFrontSensorData.rightLvdtA = json.HSI_006;
      this.setFrontSensorData.rightLvdtS = currentAValue.frontRightA3 ? json.HSI_006 - currentAValue.frontRightA3 : 0; // json.HSI_016;
    }
    if(json.HSI_007 != undefined) {
      this.setFrontSensorData.gyroA = json.HSI_007;
      this.setFrontSensorData.gyroS = currentAValue.frontGyroA ? json.HSI_007 - currentAValue.frontGyroA : 0; // // json.HSI_017;
    }
    if(json.HSI_017 != undefined) {
      this.setFrontSensorData.gyroZ = json.HSI_017;
    }
    //console.log('this.setFrontSensorData', this.setFrontSensorData);
    if(json.HSI_001 != undefined || json.HSI_002 != undefined || json.HSI_003 != undefined || json.HSI_004 != undefined || json.HSI_005 != undefined ||
       json.HSI_006 != undefined || json.HSI_007 != undefined || json.HSI_017 != undefined) {
      // console.log('this.setFrontSensorData', this.setFrontSensorData);
      dispatch( setFrontSensorData(this.setFrontSensorData) )
    }
    // =========================================================================

    // HSC_SETUP Rear Sensor Front Axle   ======================================
    if(json.HSI_021 != undefined) {
      this.setRearSensorData.leftApA = json.HSI_021;
      this.setRearSensorData.leftApS = currentAValue.rearLeftA1 ? json.HSI_021 - currentAValue.rearLeftA1 : 0; // json.HSI_031;
    }
    if(json.HSI_022 != undefined) {
      this.setRearSensorData.leftBpA = json.HSI_022; 
      this.setRearSensorData.leftBpS = currentAValue.rearLeftA2 ? json.HSI_022 - currentAValue.rearLeftA2 : 0; // json.HSI_032;
    }
    if(json.HSI_023 != undefined) {
      this.setRearSensorData.leftLvdtA = json.HSI_023;
      this.setRearSensorData.leftLvdtS = currentAValue.rearLeftA3 ? json.HSI_023 - currentAValue.rearLeftA3 : 0; // json.HSI_033; 
    }
    if(json.HSI_024 != undefined) {
      this.setRearSensorData.rightApA = json.HSI_024;
      this.setRearSensorData.rightApS = currentAValue.rearRightA1 ? json.HSI_024 - currentAValue.rearRightA1 : 0; // json.HSI_034; 
    }
    if(json.HSI_025 != undefined) {
      this.setRearSensorData.rightBpA = json.HSI_025;
      this.setRearSensorData.rightBpS = currentAValue.rearRightA2 ? json.HSI_025 - currentAValue.rearRightA2 : 0; // json.HSI_035; 
    }
    if(json.HSI_026 != undefined) {
      this.setRearSensorData.rightLvdtA = json.HSI_026;
      this.setRearSensorData.rightLvdtS = currentAValue.rearRightA3 ? json.HSI_026 - currentAValue.rearRightA3 : 0; // json.HSI_036; 
    }
    if(json.HSI_027 != undefined) {
      this.setRearSensorData.gyroA = json.HSI_027;
      this.setRearSensorData.gyroS = currentAValue.rearGyroA ? json.HSI_027 - currentAValue.rearGyroA : 0; // json.HSI_037;
    }
    if(json.HSI_037 != undefined) {
      this.setRearSensorData.gyroZ = json.HSI_037;
    }
    if(json.HSI_021 != undefined || json.HSI_022 != undefined || json.HSI_023 != undefined || json.HSI_024 != undefined || json.HSI_025 != undefined || 
      json.HSI_026 != undefined || json.HSI_027 != undefined || json.HSI_037 != undefined) {
      dispatch( setRearSensorData(this.setRearSensorData) )
    }
    // =========================================================================
  }
  
  render() {
    return (
      <Router>
        <div>
          <Websocket
            url={`ws://${this.hostname}:8181/`}
            onMessage={this.handleData} debug={false}
          />
          <div>
            {/*페이지 정리*/}
            <Redirect path="/" to="/m3/main" />
            <Route path="/m3/main" component={ViewM3Main} />
            <Route path="/m3/run" component={ViewM3Run} />
            <Route path="/m3/setup" component={ViewM3Setup} />
            <Route path="/m3/spec" component={ViewM3Spec} />

          </div>
          <div 
            className="navi"
            style={{
              background: 'url(/img/navi-bg.png)'
              // background: 'url(/img/navi-drive-bg.png)'
            }}
          >
            <div className="copy">
              <img src="/img/copy.png" alt="copyright"/>
            </div>
            <div className="ver">
              Ver.0.00001
            </div>
            <div
              className="navi-btns"
              style = {{
                width: '722px',
                margin: '0 auto',
                overflow: 'hidden'
              }}
            >
              <ul>
                <li className="navTop2">
                  <NavLink to="/m3/main" activeClassName="navOn" style={{position: 'relative'}}>
                    <img src="/img/navi1.png" alt="main" />
                    <div
                      style={{
                        width: '100%',
                        fontSize: '17px',
                        textTransform: 'uppercase',
                        position: 'absolute',
                        top: '56px',
                        textAlign: 'center'
                      }}
                      className="navText"
                    >main</div>
                  </NavLink>
                </li>
                <li className="navTop3">
                  <NavLink to="/m3/run" activeClassName="navOn" style={{position: 'relative'}}>
                    <img src="/img/navi2.png" alt="ITC Run" />
                    <div
                      style={{
                        width: '100%',
                        fontSize: '17px',
                        textTransform: 'uppercase',
                        position: 'absolute',
                        top: '56px',
                        textAlign: 'center'
                      }}
                      className="navText"
                    >HSC run</div>
                  </NavLink>
                </li>
                <li className="navTop3">
                  <NavLink to="/m3/setup" activeClassName="navOn" style={{position: 'relative'}}>
                    <img src="/img/navi3.png" alt="Setup" />
                    <div
                      style={{
                        width: '100%',
                        fontSize: '17px',
                        textTransform: 'uppercase',
                        position: 'absolute',
                        top: '56px',
                        textAlign: 'center'
                      }}
                      className="navText"
                    >setup</div>
                  </NavLink>
                </li>
                <li className="navTop2">
                  <NavLink to="/m3/spec" activeClassName="navOn" style={{position: 'relative'}}>
                    <img src="/img/navi4.png" alt="Spec" />
                    <div
                      style={{
                        width: '100%',
                        fontSize: '17px',
                        textTransform: 'uppercase',
                        position: 'absolute',
                        top: '56px',
                        textAlign: 'center'
                      }}
                      className="navText"
                    >spec</div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state){
    console.log('state.setSetupButtons.currentAValue',state.setSetupButtons.currentAValue);
    return {
      currentAValue: state.setSetupButtons.currentAValue,
    }
}
export default connect(mapStateToProps)(App);
