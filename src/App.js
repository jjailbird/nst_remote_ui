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
    this.setFrontSensorData.lxA = 0;
    this.setFrontSensorData.lxS = 0;
    this.setFrontSensorData.ly1A = 0;
    this.setFrontSensorData.ly1S = 0;
    this.setFrontSensorData.ly2A = 0;
    this.setFrontSensorData.ly2S = 0;
    this.setFrontSensorData.rxA = 0;
    this.setFrontSensorData.rxS = 0;
    this.setFrontSensorData.ry1A = 0;
    this.setFrontSensorData.ry1S = 0;
    this.setFrontSensorData.ry2A = 0;
    this.setFrontSensorData.ry2S = 0;
    this.setFrontSensorData.gA = 0;
    this.setFrontSensorData.gS = 0;

    this.setRearSensorData = {};
    this.setRearSensorData.lxA = 0;
    this.setRearSensorData.lxS = 0;
    this.setRearSensorData.ly1A = 0;
    this.setRearSensorData.ly1S = 0;
    this.setRearSensorData.ly2A = 0;
    this.setRearSensorData.ly2S = 0;
    this.setRearSensorData.rxA = 0;
    this.setRearSensorData.rxS = 0;
    this.setRearSensorData.ry1A = 0;
    this.setRearSensorData.ry1S = 0;
    this.setRearSensorData.ry2A = 0;
    this.setRearSensorData.ry2S = 0;
    this.setRearSensorData.gA = 0;
    this.setRearSensorData.gS = 0;

  }
  componentDidMount() {
    
  }
  handleData(data) {
    const json = JSON.parse(data); 
    const ITCTEST = json.ITCTEST ? json.ITCTEST : {};
    const ITCSETUP = json.ITCSETUP ? json.ITCSETUP : {}; 
    const { dispatch } = this.props;
    



    // ITC_RUN Front LEFT =====================================================
    if(json.IRI_012) {
      if (this.frontLeftData.latDistance.length >= 292)
        this.frontLeftData.latDistance.shift();
      this.frontLeftData.latDistance.push(json.IRI_012);
    }  
    if(json.IRI_013) {
      if (this.frontLeftData.yawAngle.length >= 292)
        this.frontLeftData.yawAngle.shift();
      this.frontLeftData.yawAngle.push(json.IRI_013);
    }  
    if(json.IRI_014) {
      if (this.frontLeftData.motorTorque.length >= 292)
        this.frontLeftData.motorTorque.shift();
      this.frontLeftData.motorTorque.push(json.IRI_014);
    }  
    if(json.IRI_015) {
      if (this.frontLeftData.motorSpeed.length >= 292)
        this.frontLeftData.motorSpeed.shift();
      this.frontLeftData.motorSpeed.push(json.IRI_015);
    }  
    if(json.IRI_012 || json.IRI_013 || json.IRI_014 || json.IRI_015){
      dispatch( setFrontLeftData(this.frontLeftData) );
    }      
    // =========================================================================

    // ITC_RUN Front Right =====================================================
    if(json.IRI_016) {
      if (this.frontRightData.latDistance.length >= 292)
        this.frontRightData.latDistance.shift();
      this.frontRightData.latDistance.push(json.IRI_016);
    }  
    if(json.IRI_017) {
      if (this.frontRightData.yawAngle.length >= 292)
        this.frontRightData.yawAngle.shift();
      this.frontRightData.yawAngle.push(json.IRI_017);
    }  
    if(json.IRI_018) {
      if (this.frontRightData.motorTorque.length >= 292)
        this.frontRightData.motorTorque.shift();
      this.frontRightData.motorTorque.push(json.IRI_018);
    }  
    if(json.IRI_019) {
      if (this.frontRightData.motorSpeed.length >= 292)
        this.frontRightData.motorSpeed.shift();
      this.frontRightData.motorSpeed.push(json.IRI_019);
    }  
    if(json.IRI_016 || json.IRI_017 || json.IRI_018 || json.IRI_019){
      dispatch( setFrontRightData(this.frontRightData) );
    }      
    // =========================================================================
    
    // ITC_RUN Rear LEFT =====================================================
    if(json.IRI_020) {
      if (this.rearLeftData.latDistance.length >= 292)
        this.rearLeftData.latDistance.shift();
      this.rearLeftData.latDistance.push(json.IRI_020);
    }  
    if(json.IRI_021) {
      if (this.rearLeftData.yawAngle.length >= 292)
        this.rearLeftData.yawAngle.shift();
      this.rearLeftData.yawAngle.push(json.IRI_021);
    }  
    if(json.IRI_022) {
      if (this.rearLeftData.motorTorque.length >= 292)
        this.rearLeftData.motorTorque.shift();
      this.rearLeftData.motorTorque.push(json.IRI_022);
    }  
    if(json.IRI_023) {
      if (this.rearLeftData.motorSpeed.length >= 292)
        this.rearLeftData.motorSpeed.shift();
      this.rearLeftData.motorSpeed.push(json.IRI_023);
    }  
    if(json.IRI_020 || json.IRI_021 || json.IRI_022 || json.IRI_023){
      dispatch( setRearLeftData(this.rearLeftData) );
    }      
    // =========================================================================
    // ITC_RUN Rear Right =====================================================
    if(json.IRI_024) {
      if (this.rearRightData.latDistance.length >= 292)
        this.rearRightData.latDistance.shift();
      this.rearRightData.latDistance.push(json.IRI_024);
    }  
    if(json.IRI_025) {
      if (this.rearRightData.yawAngle.length >= 292)
        this.rearRightData.yawAngle.shift();
      this.rearRightData.yawAngle.push(json.IRI_025);
    }  
    if(json.IRI_026) {
      if (this.rearRightData.motorTorque.length >= 292)
        this.rearRightData.motorTorque.shift();
      this.rearRightData.motorTorque.push(json.IRI_026);
    }  
    if(json.IRI_027) {
      if (this.rearRightData.motorSpeed.length >= 292)
        this.rearRightData.motorSpeed.shift();
      this.rearRightData.motorSpeed.push(json.IRI_027);
    }  
    if(json.IRI_024 || json.IRI_025 || json.IRI_026 || json.IRI_027){
      dispatch( setRearRightData(this.rearRightData) );
    }      
    // =========================================================================

    // ITC_RUN Front Wheelset ==================================================
    if(json.IRI_004) {
      this.setFrontWheelsetData.position = json.IRI_004;
    }
    if(json.IRI_005) {
      this.setFrontWheelsetData.trackCurve = json.IRI_005;
    }
    if(json.IRI_006) {
      this.setFrontWheelsetData.attackAngle = json.IRI_006;
    }
    if(json.IRI_007) {
      this.setFrontWheelsetData.steeringRatio = json.IRI_007;
    }
    if(json.IRI_004 || json.IRI_005 || json.IRI_006 || json.IRI_007){
      // console.log(json.IRI_004 ,json.IRI_005 ,json.IRI_006 ,json.IRI_007);
      console.log('this.setFrontWheelsetData', this.setFrontWheelsetData);
      dispatch( setFrontWheelsetData(this.setFrontWheelsetData) );
    }      
    // =========================================================================

    // ITC_RUN Rear Wheelset ==================================================
    if(json.IRI_008) {
      this.setRearWheelsetData.position = json.IRI_008;
    }
    if(json.IRI_009) {
      this.setRearWheelsetData.trackCurve = json.IRI_009;
    }
    if(json.IRI_010) {
      this.setRearWheelsetData.attackAngle = json.IRI_010;
    }
    if(json.IRI_011) {
      this.setRearWheelsetData.steeringRatio = json.IRI_011;
    }
    if(json.IRI_008 || json.IRI_009 || json.IRI_010 || json.IRI_011){
      dispatch( setRearWheelsetData(this.setRearWheelsetData) );
    }      
    // =========================================================================

    // ITC_RUN Vehicle  ========================================================
    if(json.IRI_001) {
      this.setMotorControlData.speed = json.IRI_001;
    }
    if(json.IRI_002) {
      this.setMotorControlData.position = json.IRI_002;
    }
    if(json.IRI_013) {
      this.setMotorControlData.curv = json.IRI_003;
    }
    if(json.IRI_001 || json.IRI_002 || json.IRI_003){
      dispatch( setMotorControlData(this.setMotorControlData) );
    }      
    // =========================================================================

    // ITC_SETUP Front LEFT Motor===============================================
    if(json.ISI_041) {
      this.frontLeftMotorData.a = json.ISI_041;
    }
    if(json.ISI_042) {
      this.frontLeftMotorData.b = json.ISI_042;
    }
    if(json.ISI_043) {
      this.frontLeftMotorData.c = json.ISI_043;
    }
    if(json.ISI_044) {
      this.frontLeftMotorData.temp = json.ISI_044;
    }
    if(json.ISI_045) {
      this.frontLeftMotorData.rpm = json.ISI_045;
    }
    if(json.ISI_046) {
      this.frontLeftMotorData.torque = json.ISI_046;
    }

    if(json.ISI_041 || json.ISI_042 || json.ISI_043 || json.ISI_044 || json.ISI_045 || json.ISI_046) {
      dispatch( setFrontLeftMotorData(this.frontLeftMotorData) );
    }      
    // =========================================================================
  
    // ITC_SETUP Front RIGHT Motor==============================================
    if(json.ISI_051) {
      this.frontRightMotorData.a = json.ISI_051;
    }
    if(json.ISI_052) {
      this.frontRightMotorData.b = json.ISI_052;
    }
    if(json.ISI_053) {
      this.frontRightMotorData.c = json.ISI_053;
    }
    if(json.ISI_054) {
      this.frontRightMotorData.temp = json.ISI_054;
    }
    if(json.ISI_055) {
      this.frontRightMotorData.rpm = json.ISI_055;
    }
    if(json.ISI_056) {
      this.frontRightMotorData.torque = json.ISI_056;
    }

    if(json.ISI_051 || json.ISI_052 || json.ISI_053 || json.ISI_054 || json.ISI_055 || json.ISI_056) {
      dispatch( setFrontRightMotorData(this.frontRightMotorData) );
    }      
    // =========================================================================
  
    // ITC_SETUP Rear LEFT Motor  ==============================================
    if(json.ISI_061) {
      this.rearLeftMotorData.a = json.ISI_061;
    }
    if(json.ISI_062) {
      this.rearLeftMotorData.b = json.ISI_062;
    }
    if(json.ISI_063) {
      this.rearLeftMotorData.c = json.ISI_063;
    }
    if(json.ISI_064) {
      this.rearLeftMotorData.temp = json.ISI_064;
    }
    if(json.ISI_065) {
      this.rearLeftMotorData.rpm = json.ISI_065;
    }
    if(json.ISI_066) {
      this.rearLeftMotorData.torque = json.ISI_066;
    }

    if(json.ISI_061 || json.ISI_062 || json.ISI_063 || json.ISI_064 || json.ISI_065 || json.ISI_066) {
      dispatch( setRearLeftMotorData(this.rearLeftMotorData) );
    }      
    // =========================================================================
    
    // ITC_SETUP Rear RIGHT Motor ==============================================
    if(json.ISI_071) {
      this.rearRightMotorData.a = json.ISI_071;
    }
    if(json.ISI_072) {
      this.rearRightMotorData.b = json.ISI_072;
    }
    if(json.ISI_073) {
      this.rearRightMotorData.c = json.ISI_073;
    }
    if(json.ISI_074) {
      this.rearRightMotorData.temp = json.ISI_074;
    }
    if(json.ISI_075) {
      this.rearRightMotorData.rpm = json.ISI_075;
    }
    if(json.ISI_076) {
      this.rearRightMotorData.torque = json.ISI_076;
    }

    if(json.ISI_071 || json.ISI_072 || json.ISI_073 || json.ISI_074 || json.ISI_075 || json.ISI_076) {
      dispatch( setRearRightMotorData(this.rearRightMotorData) );
    }      
    // =========================================================================

    // ITC_SETUP Front Sensor Front Axle  ======================================
    if(json.ISI_001) {
      this.setFrontSensorData.lxA = json.ISI_001; 
    }
    if(json.ISI_002) {
      this.setFrontSensorData.ly1A = json.ISI_002; 
    }
    if(json.ISI_003) {
      this.setFrontSensorData.ly2A = json.ISI_003; 
    }
    if(json.ISI_004) {
      this.setFrontSensorData.rxA = json.ISI_004; 
    }
    if(json.ISI_005) {
      this.setFrontSensorData.ry1A = json.ISI_005; 
    }
    if(json.ISI_006) {
      this.setFrontSensorData.ry2A = json.ISI_006; 
    }
    if(json.ISI_007) {
      this.setFrontSensorData.gA = json.ISI_007; 
    }
    if(json.ISI_001 || json.ISI_002 || json.ISI_003 || json.ISI_004 || json.ISI_005 || json.ISI_006 || json.ISI_007) {
      dispatch( setFrontSensorData(this.setFrontSensorData) )
    }
    // =========================================================================

    // ITC_SETUP Rear Sensor Front Axle   ======================================
    if(json.ISI_021) {
      this.setRearSensorData.lxA = json.ISI_021; 
    }
    if(json.ISI_022) {
      this.setRearSensorData.ly1A = json.ISI_022; 
    }
    if(json.ISI_023) {
      this.setRearSensorData.ly2A = json.ISI_023; 
    }
    if(json.ISI_024) {
      this.setRearSensorData.rxA = json.ISI_024; 
    }
    if(json.ISI_025) {
      this.setRearSensorData.ry1A = json.ISI_025; 
    }
    if(json.ISI_026) {
      this.setRearSensorData.ry2A = json.ISI_026; 
    }
    if(json.ISI_027) {
      this.setRearSensorData.gA = json.ISI_027; 
    }
    if(json.ISI_021 || json.ISI_022 || json.ISI_023 || json.ISI_024 || json.ISI_025 || json.ISI_026 || json.ISI_027) {
      dispatch( setRearSensorData(this.setRearSensorData) )
    }
    // =========================================================================

    
    if (ITCSETUP.FrontLeft) {
      this.ITCSETUP_FrontLeftData.laserX = ITCSETUP.FrontLeft.LaserX;
      this.ITCSETUP_FrontLeftData.laserY = ITCSETUP.FrontLeft.LaserY;
      dispatch( setItcSetupFrontLeftData(this.ITCSETUP_FrontLeftData) );
    }

    if (ITCSETUP.FrontRight) {
      this.ITCSETUP_FrontRightData.laserX = ITCSETUP.FrontRight.LaserX;
      this.ITCSETUP_FrontRightData.laserY = ITCSETUP.FrontRight.LaserY;
      this.ITCSETUP_FrontRightData.gyroZ = ITCSETUP.FrontRight.GyroZ;
      dispatch( setItcSetupFrontRightData(this.ITCSETUP_FrontRightData) );
    }
 
    if (ITCSETUP.RearLeft) {
      this.ITCSETUP_RearLeftData.laserX = ITCSETUP.RearLeft.LaserX;
      this.ITCSETUP_RearLeftData.laserY = ITCSETUP.RearLeft.LaserY;
      dispatch( setItcSetupRearLeftData(this.ITCSETUP_RearLeftData) );
    }

    if (ITCSETUP.RearRight) {
      this.ITCSETUP_RearRightData.laserX = ITCSETUP.RearRight.LaserX;
      this.ITCSETUP_RearRightData.laserY = ITCSETUP.RearRight.LaserY;
      this.ITCSETUP_RearRightData.gyroZ = ITCSETUP.RearRight.GyroZ;
      dispatch( setItcSetupRearRightData(this.ITCSETUP_RearRightData) );
    }

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

export default connect()(App);
