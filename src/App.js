import Websocket from 'react-websocket';
import { connect } from 'react-redux';
import { 
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
  setDriveData,
  setFrontLeftHscData,//hsc data start
  setFrontRightHscData,
  setRearLeftHscData,
  setRearRightHscData,
  setMotorControlHscData,
  setFrontWheelsetHscData,
  setRearWheelsetHscData,
  setItcSetupFrontLeftData,
  setItcSetupFrontRightData,
  setItcSetupRearLeftData,
  setItcSetupRearRightData
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
  Route,Redirect,
  NavLink
} from 'react-router-dom';

import { getRandomInt, getRandomFloat } from './utils/functions';

//페이지 정리
import ViewM1Main from './ViewM1Main';
import ViewM1Run from './ViewM1Run';
import ViewM1Setup from './ViewM1Setup';
import ViewM1Spec from './ViewM1Spec';

class App extends Component {
  constructor(props) {
    super(props);
    this.hostname = '192.168.1.2';
    // this.hostname = window.location.hostname; 
    
    this.handleData = this.handleData.bind(this);
    this.patchData = this.patchData.bind(this);
    this.data = "{}";

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
    this.frontLeftMotorData.torque = -20;
    this.frontLeftMotorData.a = 0;
    this.frontLeftMotorData.b = 0;
    this.frontLeftMotorData.c = 0;
    this.frontLeftMotorData.temp = 0;

    this.frontRightMotorData = {};
    this.frontRightMotorData.rpm = 0;
    this.frontRightMotorData.torque = -20;
    this.frontRightMotorData.a = 0;
    this.frontRightMotorData.b = 0;
    this.frontRightMotorData.c = 0;
    this.frontRightMotorData.temp = 0;

    this.rearLeftMotorData = {};
    this.rearLeftMotorData.rpm = 0;
    this.rearLeftMotorData.torque = -20;
    this.rearLeftMotorData.a = 0;
    this.rearLeftMotorData.b = 0;
    this.rearLeftMotorData.c = 0;
    this.rearLeftMotorData.temp = 0;

    this.rearRightMotorData = {};
    this.rearRightMotorData.rpm = 0;
    this.rearRightMotorData.torque = -20;
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

    // ITCSETUP ===========================
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

    this.ITCSETUP_FrontLeftData = {};
    this.ITCSETUP_FrontLeftData.laserX = 0;
    this.ITCSETUP_FrontLeftData.laserY = 0;

    this.ITCSETUP_FrontRightData = {};
    this.ITCSETUP_FrontRightData.laserX = 0;
    this.ITCSETUP_FrontRightData.laserY = 0;
    this.ITCSETUP_FrontRightData.gyroZ = 0;

    this.ITCSETUP_RearLeftData = {};
    this.ITCSETUP_RearLeftData.laserX = 0;
    this.ITCSETUP_RearLeftData.laserY = 0;
    
    this.ITCSETUP_RearRightData = {};
    this.ITCSETUP_RearLeftData.laserX = 0;
    this.ITCSETUP_RearLeftData.laserY = 0;
    this.ITCSETUP_RearLeftData.gyroZ = 0;
    // ======================================

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

  }
  componentDidMount() {
    console.log('timer start!');
    this.timer = setInterval(this.patchData, 1000 / 30);
  }
  handleData(data) {
    this.data = data;
  }
  patchData() {
    const json = JSON.parse(this.data); 
    const { dispatch, currentAValue } = this.props;

    // ITC_RUN Front LEFT =====================================================
    if(json.IRI_012 !== undefined) {
      if (this.frontLeftData.latDistance.length >= 292)
        this.frontLeftData.latDistance.shift();
      this.frontLeftData.latDistance.push(json.IRI_012);
    }  
    if(json.IRI_013 !== undefined) {
      if (this.frontLeftData.yawAngle.length >= 292)
        this.frontLeftData.yawAngle.shift();
      this.frontLeftData.yawAngle.push(json.IRI_013);
    }  
    if(json.IRI_014 !== undefined) {
      if (this.frontLeftData.motorTorque.length >= 292)
        this.frontLeftData.motorTorque.shift();
      this.frontLeftData.motorTorque.push(json.IRI_014);
    }  
    if(json.IRI_015 !== undefined) {
      if (this.frontLeftData.motorSpeed.length >= 292)
        this.frontLeftData.motorSpeed.shift();
      this.frontLeftData.motorSpeed.push(json.IRI_015);
    }  
    if(json.IRI_012 !== undefined || json.IRI_013 !== undefined || json.IRI_014 !== undefined || json.IRI_015 !== undefined){
      dispatch( setFrontLeftData(this.frontLeftData) );
    }      
    // =========================================================================

    // ITC_RUN Front Right =====================================================
    if(json.IRI_016 !== undefined) {
      if (this.frontRightData.latDistance.length >= 292)
        this.frontRightData.latDistance.shift();
      this.frontRightData.latDistance.push(json.IRI_016);
    }  
    if(json.IRI_017 !== undefined) {
      if (this.frontRightData.yawAngle.length >= 292)
        this.frontRightData.yawAngle.shift();
      this.frontRightData.yawAngle.push(json.IRI_017);
    }  
    if(json.IRI_018 !== undefined) {
      if (this.frontRightData.motorTorque.length >= 292)
        this.frontRightData.motorTorque.shift();
      this.frontRightData.motorTorque.push(json.IRI_018);
    }  
    if(json.IRI_019 !== undefined) {
      if (this.frontRightData.motorSpeed.length >= 292)
        this.frontRightData.motorSpeed.shift();
      this.frontRightData.motorSpeed.push(json.IRI_019);
    }  
    if(json.IRI_016 !== undefined || json.IRI_017 !== undefined || json.IRI_018 !== undefined || json.IRI_019 !== undefined){
      dispatch( setFrontRightData(this.frontRightData) );
    }      
    // =========================================================================
    
    // ITC_RUN Rear LEFT =====================================================
    if(json.IRI_020 !== undefined) {
      if (this.rearLeftData.latDistance.length >= 292)
        this.rearLeftData.latDistance.shift();
      this.rearLeftData.latDistance.push(json.IRI_020);
    }  
    if(json.IRI_021 !== undefined) {
      if (this.rearLeftData.yawAngle.length >= 292)
        this.rearLeftData.yawAngle.shift();
      this.rearLeftData.yawAngle.push(json.IRI_021);
    }  
    if(json.IRI_022 !== undefined) {
      if (this.rearLeftData.motorTorque.length >= 292)
        this.rearLeftData.motorTorque.shift();
      this.rearLeftData.motorTorque.push(json.IRI_022);
    }  
    if(json.IRI_023 !== undefined) {
      if (this.rearLeftData.motorSpeed.length >= 292)
        this.rearLeftData.motorSpeed.shift();
      this.rearLeftData.motorSpeed.push(json.IRI_023);
    }  
    if(json.IRI_020 !== undefined || json.IRI_021 !== undefined || json.IRI_022 !== undefined || json.IRI_023 !== undefined){
      dispatch( setRearLeftData(this.rearLeftData) );
    }      
    // =========================================================================
    // ITC_RUN Rear Right =====================================================
    if(json.IRI_024 !== undefined) {
      if (this.rearRightData.latDistance.length >= 292)
        this.rearRightData.latDistance.shift();
      this.rearRightData.latDistance.push(json.IRI_024);
    }  
    if(json.IRI_025 !== undefined) {
      if (this.rearRightData.yawAngle.length >= 292)
        this.rearRightData.yawAngle.shift();
      this.rearRightData.yawAngle.push(json.IRI_025);
    }  
    if(json.IRI_026 !== undefined) {
      if (this.rearRightData.motorTorque.length >= 292)
        this.rearRightData.motorTorque.shift();
      this.rearRightData.motorTorque.push(json.IRI_026);
    }  
    if(json.IRI_027 !== undefined) {
      if (this.rearRightData.motorSpeed.length >= 292)
        this.rearRightData.motorSpeed.shift();
      this.rearRightData.motorSpeed.push(json.IRI_027);
    }  
    if(json.IRI_024 !== undefined || json.IRI_025 !== undefined || json.IRI_026 !== undefined || json.IRI_027 !== undefined){
      dispatch( setRearRightData(this.rearRightData) );
    }      
    // =========================================================================

    // ITC_RUN Front Wheelset ==================================================
    if(json.IRI_004 !== undefined) {
      this.setFrontWheelsetData.position = json.IRI_004;
    }
    if(json.IRI_005 !== undefined) {
      this.setFrontWheelsetData.trackCurve = json.IRI_005;
    }
    if(json.IRI_006 !== undefined) {
      this.setFrontWheelsetData.attackAngle = json.IRI_006;
    }
    if(json.IRI_007 !== undefined) {
      this.setFrontWheelsetData.steeringRatio = json.IRI_007;
    }
    if(json.IRI_004 !== undefined || json.IRI_005 !== undefined || json.IRI_006 !== undefined || json.IRI_007 !== undefined){
      dispatch( setFrontWheelsetData(this.setFrontWheelsetData) );
    }      
    // =========================================================================

    // ITC_RUN Rear Wheelset ==================================================
    if(json.IRI_008 !== undefined) {
      this.setRearWheelsetData.position = json.IRI_008;
    }
    if(json.IRI_009 !== undefined) {
      this.setRearWheelsetData.trackCurve = json.IRI_009;
    }
    if(json.IRI_010 !== undefined) {
      this.setRearWheelsetData.attackAngle = json.IRI_010;
    }
    if(json.IRI_011 !== undefined) {
      this.setRearWheelsetData.steeringRatio = json.IRI_011;
    }
    if(json.IRI_008 !== undefined || json.IRI_009 !== undefined || json.IRI_010 !== undefined || json.IRI_011 !== undefined){
      dispatch( setRearWheelsetData(this.setRearWheelsetData) );
    }      
    // =========================================================================

    // ITC_RUN Vehicle  ========================================================
    if(json.IRI_001 !== undefined) {
      this.setMotorControlData.speed = json.IRI_001;
    }
    if(json.IRI_002 !== undefined) {
      this.setMotorControlData.position = json.IRI_002;
    }
    if(json.IRI_013 !== undefined) {
      this.setMotorControlData.curv = json.IRI_003;
    }
    if(json.IRI_001 !== undefined || json.IRI_002 !== undefined || json.IRI_003 !== undefined){
      dispatch( setMotorControlData(this.setMotorControlData) );
    }      
    // =========================================================================

    // ITC_SETUP Front LEFT Motor===============================================
    if(json.ISI_041 !== undefined) {
      this.frontLeftMotorData.a = json.ISI_041;
    }
    if(json.ISI_042 !== undefined) {
      this.frontLeftMotorData.b = json.ISI_042;
    }
    if(json.ISI_043 !== undefined) {
      this.frontLeftMotorData.c = json.ISI_043;
    }
    if(json.ISI_044 !== undefined) {
      this.frontLeftMotorData.temp = json.ISI_044;
    }
    if(json.ISI_045 !== undefined) {
      this.frontLeftMotorData.rpm = json.ISI_045;
    }
    if(json.ISI_046 !== undefined) {
      this.frontLeftMotorData.torque = json.ISI_046;
    }

    if(json.ISI_041 !== undefined || json.ISI_042 !== undefined || json.ISI_043 !== undefined || json.ISI_044 !== undefined || json.ISI_045 !== undefined || json.ISI_046 !== undefined) {
      dispatch( setFrontLeftMotorData(this.frontLeftMotorData) );
    }      
    // =========================================================================
  
    // ITC_SETUP Front RIGHT Motor==============================================
    if(json.ISI_051 !== undefined) {
      this.frontRightMotorData.a = json.ISI_051;
    }
    if(json.ISI_052 !== undefined) {
      this.frontRightMotorData.b = json.ISI_052;
    }
    if(json.ISI_053 !== undefined) {
      this.frontRightMotorData.c = json.ISI_053;
    }
    if(json.ISI_054 !== undefined) {
      this.frontRightMotorData.temp = json.ISI_054;
    }
    if(json.ISI_055 !== undefined) {
      this.frontRightMotorData.rpm = json.ISI_055;
    }
    if(json.ISI_056 !== undefined) {
      this.frontRightMotorData.torque = json.ISI_056;
    }

    if(json.ISI_051 !== undefined || json.ISI_052 !== undefined || json.ISI_053 !== undefined || json.ISI_054 !== undefined || json.ISI_055 !== undefined || json.ISI_056 !== undefined) {
      dispatch( setFrontRightMotorData(this.frontRightMotorData) );
    }      
    // =========================================================================
  
    // ITC_SETUP Rear LEFT Motor  ==============================================
    if(json.ISI_061 !== undefined) {
      this.rearLeftMotorData.a = json.ISI_061;
    }
    if(json.ISI_062 !== undefined) {
      this.rearLeftMotorData.b = json.ISI_062;
    }
    if(json.ISI_063 !== undefined) {
      this.rearLeftMotorData.c = json.ISI_063;
    }
    if(json.ISI_064 !== undefined) {
      this.rearLeftMotorData.temp = json.ISI_064;
    }
    if(json.ISI_065 !== undefined) {
      this.rearLeftMotorData.rpm = json.ISI_065;
    }
    if(json.ISI_066 !== undefined) {
      this.rearLeftMotorData.torque = json.ISI_066;
    }

    if(json.ISI_061 !== undefined || json.ISI_062 !== undefined || json.ISI_063 !== undefined || json.ISI_064 !== undefined || json.ISI_065 !== undefined || json.ISI_066 !== undefined) {
      dispatch( setRearLeftMotorData(this.rearLeftMotorData) );
    }      
    // =========================================================================
    
    // ITC_SETUP Rear RIGHT Motor ==============================================
    if(json.ISI_071 !== undefined) {
      this.rearRightMotorData.a = json.ISI_071;
    }
    if(json.ISI_072 !== undefined) {
      this.rearRightMotorData.b = json.ISI_072;
    }
    if(json.ISI_073 !== undefined) {
      this.rearRightMotorData.c = json.ISI_073;
    }
    if(json.ISI_074 !== undefined) {
      this.rearRightMotorData.temp = json.ISI_074;
    }
    if(json.ISI_075 !== undefined) {
      this.rearRightMotorData.rpm = json.ISI_075;
    }
    if(json.ISI_076 !== undefined) {
      this.rearRightMotorData.torque = json.ISI_076;
    }

    if(json.ISI_071 !== undefined || json.ISI_072 !== undefined || json.ISI_073 !== undefined || json.ISI_074 !== undefined || json.ISI_075 !== undefined || json.ISI_076 !== undefined) {
      dispatch( setRearRightMotorData(this.rearRightMotorData) );
    }      
    // =========================================================================
    
    // ITC_SETUP Front Sensor Front Axle  ======================================
    if(json.ISI_001 !== undefined) {
      this.setFrontSensorData.leftApA = json.ISI_001; 
      this.setFrontSensorData.leftApS = (currentAValue.frontLeftA1) ? json.ISI_001 - currentAValue.frontLeftA1 : 0;  // json.ISI_011;
    }
    if(json.ISI_002 !== undefined) {
      this.setFrontSensorData.leftBpA = json.ISI_002;
      this.setFrontSensorData.leftBpS = currentAValue.frontLeftA2 ? json.ISI_002 - currentAValue.frontLeftA2 : 0;  // json.ISI_012;
    }
    if(json.ISI_003 !== undefined) {
      this.setFrontSensorData.leftLvdtA = json.ISI_003;
      this.setFrontSensorData.leftLvdtS = currentAValue.frontLeftA3 ? json.ISI_003 - currentAValue.frontLeftA3 : 0; // json.ISI_013;   
    }
    if(json.ISI_004 !== undefined) {
      this.setFrontSensorData.rightApA = json.ISI_004;
      this.setFrontSensorData.rightApS = currentAValue.frontRightA1 ? json.ISI_004 - currentAValue.frontRightA1 : 0; // json.ISI_014; 
    }
    if(json.ISI_005 !== undefined) {
      this.setFrontSensorData.rightBpA = json.ISI_005;
      this.setFrontSensorData.rightBpS = currentAValue.frontRightA2 ? json.ISI_005 - currentAValue.frontRightA2 : 0; // json.ISI_015; 
    }
    if(json.ISI_006 !== undefined) {
      this.setFrontSensorData.rightLvdtA = json.ISI_006;
      this.setFrontSensorData.rightLvdtS = currentAValue.frontRightA3 ? json.ISI_006 - currentAValue.frontRightA3 : 0; // json.ISI_016; 
    }
    if(json.ISI_007 !== undefined) {
      this.setFrontSensorData.gyroA = json.ISI_007;
      this.setFrontSensorData.gyroS = currentAValue.frontGyroA ? json.ISI_007 - currentAValue.frontGyroA : 0; // json.ISI_017; 
      

    }
    if(json.ISI_001 !== undefined || json.ISI_002 !== undefined || json.ISI_003 !== undefined || json.ISI_004 !== undefined || json.ISI_005 !== undefined || json.ISI_006 !== undefined || json.ISI_007 !== undefined) {
      dispatch( setFrontSensorData(this.setFrontSensorData) )
    }
    // =========================================================================

    // ITC_SETUP Rear Sensor Front Axle   ======================================
    if(json.ISI_021 !== undefined) {
      this.setRearSensorData.leftApA = json.ISI_021;
      this.setRearSensorData.leftApS = currentAValue.rearLeftA1 ? json.ISI_021 - currentAValue.rearLeftA1 : 0; // json.ISI_031;  
    }
    if(json.ISI_022 !== undefined) {
      this.setRearSensorData.leftBpA = json.ISI_022;
      this.setRearSensorData.leftBpS = currentAValue.rearLeftA2 ? json.ISI_022 - currentAValue.rearLeftA2 : 0; // json.ISI_032; 
    }
    if(json.ISI_023 !== undefined) {
      this.setRearSensorData.leftLvdtA = json.ISI_023;
      this.setRearSensorData.leftLvdtS = currentAValue.rearLeftA3 ? json.ISI_023 - currentAValue.rearLeftA3 : 0; // json.ISI_033; 
    }
    if(json.ISI_024 !== undefined) {
      this.setRearSensorData.rightApA = json.ISI_024;
      this.setRearSensorData.rightApS = currentAValue.rearRightA1 ? json.ISI_024 - currentAValue.rearRightA1 : 0; // json.ISI_034; 
    }
    if(json.ISI_025 !== undefined) {
      this.setRearSensorData.rightBpA = json.ISI_025;
      this.setRearSensorData.rightBpS = currentAValue.rearRightA2 ? json.ISI_025 - currentAValue.rearRightA2 : 0; // json.ISI_035; 
    }
    if(json.ISI_026 !== undefined) {
      this.setRearSensorData.rightLvdtA = json.ISI_026;
      this.setRearSensorData.rightLvdtS = currentAValue.rearRightA3 ? json.ISI_026 - currentAValue.rearRightA3 : 0; // json.ISI_036; 
    }
    if(json.ISI_027 !== undefined) {
      this.setRearSensorData.gyroA = json.ISI_027;
      this.setRearSensorData.gyroS = currentAValue.rearGyroA ? json.ISI_027 - currentAValue.rearGyroA : 0; // json.ISI_037; 
    }
    if(json.ISI_021 !== undefined || json.ISI_022 !== undefined || json.ISI_023 !== undefined || json.ISI_024 !== undefined || json.ISI_025 !== undefined || json.ISI_026 !== undefined || json.ISI_027 !== undefined) {
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
            <Redirect from="/" to="/m1/main" />
            <Route path="/m1/main" component={ViewM1Main} />
            <Route path="/m1/run" component={ViewM1Run} />
            <Route path="/m1/setup" component={ViewM1Setup} />
            <Route path="/m1/spec" component={ViewM1Spec} />

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
                  <NavLink to="/m1/main" activeClassName="navOn" style={{position: 'relative'}}>
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
                  <NavLink to="/m1/run" activeClassName="navOn" style={{position: 'relative'}}>
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
                    >itc run</div>
                  </NavLink>
                </li>
                <li className="navTop3">
                  <NavLink to="/m1/setup" activeClassName="navOn" style={{position: 'relative'}}>
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
                  <NavLink to="/m1/spec" activeClassName="navOn" style={{position: 'relative'}}>
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
    // console.log('itcsetup',state.setItcSetupFrontRightData);
    return {
      currentAValue: state.setM2SetupButtons.currentAValue,
    }
}

export default connect(mapStateToProps)(App);
