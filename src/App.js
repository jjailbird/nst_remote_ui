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
  setRunSwitch,
  setDirectionSwitch,
  setDriveLever
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

import ViewM2Main from './ViewM2Main';
import ViewM2Run from './ViewM2Run';
import ViewM2Setup from './ViewM2Setup';
import ViewM2Spec from './ViewM2Spec';

class App extends Component {
  constructor(props) {
    super(props);
    this.hostname = window.location.hostname;
    this.handleData = this.handleData.bind(this);
    this.thick = this.thick.bind(this);
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

    //hsc    
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

    this.setMotorControlHscData =  {};
    this.setMotorControlHscData.position = 0;
    this.setMotorControlHscData.curv = 0;
    this.setMotorControlHscData.speed = 0;

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
  }
  componentDidMount() {
    this.timer = setInterval(this.thick, 1000 / 30);
  }
  handleData(data) {
    const json = JSON.parse(data); 
    const ITCTEST = json.ITCTEST ? json.ITCTEST : {};
    const ITCSETUP = json.ITCSETUP ? json.ITCSETUP : {}; 
    const { dispatch } = this.props;
    // const json = JSON.parse(data);
    // console.log('webSocket Received:', json)
    const command = json.command ? json.command : null;

    if (command) {
      console.log('command:', command);
      switch(command.charAt(0)) {
        case 's':
          dispatch( setRunSwitch(command.charAt(1)) );
          break;
        case 'd':
          dispatch( setDirectionSwitch(command.charAt(1)) );
          break;          
        case 'n':
          dispatch( setDriveLever(command.charAt(1)) );
          break;          
      }
    }

  }

  thick() {
    const { dispatch } = this.props;

    if (this.frontLeftData.latDistance.length >= 292) {
      this.frontLeftData.latDistance.shift();
      this.frontLeftData.yawAngle.shift();
      this.frontLeftData.motorTorque.shift();
      this.frontLeftData.motorSpeed.shift();
    }
    this.frontLeftData.latDistance.push(getRandomFloat(-10,10));
    this.frontLeftData.yawAngle.push(getRandomFloat(-5,5));
    this.frontLeftData.motorTorque.push(getRandomInt(0,3000));
    this.frontLeftData.motorSpeed.push(getRandomInt(0,3000));

    dispatch( setFrontLeftData(this.frontLeftData) );

    if (this.frontRightData.latDistance.length >= 292) {
      this.frontRightData.latDistance.shift();
      this.frontRightData.yawAngle.shift();
      this.frontRightData.motorTorque.shift();
      this.frontRightData.motorSpeed.shift();
    }
    this.frontRightData.latDistance.push(getRandomFloat(-10,10));
    this.frontRightData.yawAngle.push(getRandomFloat(-5,5));
    this.frontRightData.motorTorque.push(getRandomInt(0,3000));
    this.frontRightData.motorSpeed.push(getRandomInt(0,3000));
    
    dispatch( setFrontRightData(this.frontRightData) );

    if (this.rearLeftData.latDistance.length >= 292) {
      this.rearLeftData.latDistance.shift();
      this.rearLeftData.yawAngle.shift();
      this.rearLeftData.motorTorque.shift();
      this.rearLeftData.motorSpeed.shift();
    }
    this.rearLeftData.latDistance.push(getRandomFloat(-10,10));
    this.rearLeftData.yawAngle.push(getRandomFloat(-5,5));
    this.rearLeftData.motorTorque.push(getRandomInt(0,3000));
    this.rearLeftData.motorSpeed.push(getRandomInt(0,3000));
    
    dispatch( setRearLeftData(this.rearLeftData) );

    if (this.rearRightData.latDistance.length >= 292) {
      this.rearRightData.latDistance.shift();
      this.rearRightData.yawAngle.shift();
      this.rearRightData.motorTorque.shift();
      this.rearRightData.motorSpeed.shift();
    }
    this.rearRightData.latDistance.push(getRandomFloat(-10,10));
    this.rearRightData.yawAngle.push(getRandomFloat(-5,5));
    this.rearRightData.motorTorque.push(getRandomInt(0,3000));
    this.rearRightData.motorSpeed.push(getRandomInt(0,3000));
    
    dispatch( setRearRightData(this.rearRightData) );

    this.frontLeftMotorData.rpm = getRandomInt(0,3000);
    this.frontLeftMotorData.torque = getRandomInt(0,3000);
    this.frontLeftMotorData.a = getRandomInt(0,500);
    this.frontLeftMotorData.b = getRandomInt(0,500);
    this.frontLeftMotorData.c = getRandomInt(0,500);
    this.frontLeftMotorData.temp = getRandomInt(0,100);
    
    dispatch( setFrontLeftMotorData(this.frontLeftMotorData) );

    this.frontRightMotorData.rpm = getRandomInt(0,3000);
    this.frontRightMotorData.torque = getRandomInt(0,3000);
    this.frontRightMotorData.a = getRandomInt(0,500);
    this.frontRightMotorData.b = getRandomInt(0,500);
    this.frontRightMotorData.c = getRandomInt(0,500);
    this.frontRightMotorData.temp = getRandomInt(0,100);
    
    dispatch( setFrontRightMotorData(this.frontRightMotorData) );

    this.rearLeftMotorData.rpm = getRandomInt(0,3000);
    this.rearLeftMotorData.torque = getRandomInt(0,3000);
    this.rearLeftMotorData.a = getRandomInt(0,500);
    this.rearLeftMotorData.b = getRandomInt(0,500);
    this.rearLeftMotorData.c = getRandomInt(0,500);
    this.rearLeftMotorData.temp = getRandomInt(0,100);
    
    dispatch( setRearLeftMotorData(this.rearLeftMotorData) );

    this.rearRightMotorData.rpm = getRandomInt(0,3000);
    this.rearRightMotorData.torque = getRandomInt(0,3000);
    this.rearRightMotorData.a = getRandomInt(0,500);
    this.rearRightMotorData.b = getRandomInt(0,500);
    this.rearRightMotorData.c = getRandomInt(0,500);
    this.rearRightMotorData.temp = getRandomInt(0,100);    
      
    dispatch( setRearRightMotorData(this.rearRightMotorData) );

    this.setMotorControlData.position = getRandomFloat(0,250);
    this.setMotorControlData.curv = getRandomInt(0,10000);
    this.setMotorControlData.speed = getRandomFloat(0,60);
      
    dispatch( setMotorControlData(this.setMotorControlData) );

    this.setFrontWheelsetData.position = getRandomFloat(0,250);
    this.setFrontWheelsetData.trackCurve = getRandomFloat(0,10000);
    this.setFrontWheelsetData.attackAngle = getRandomFloat(-5,5);
    this.setFrontWheelsetData.steeringRatio = getRandomFloat(0,2);

    dispatch( setFrontWheelsetData(this.setFrontWheelsetData) );

    this.setRearWheelsetData.position = getRandomFloat(0,250);
    this.setRearWheelsetData.trackCurve = getRandomFloat(0,10000);
    this.setRearWheelsetData.attackAngle = getRandomFloat(-5,5);
    this.setRearWheelsetData.steeringRatio = getRandomFloat(0,2);

    dispatch( setRearWheelsetData(this.setRearWheelsetData) );

    this.setBmsSocData.cell1 = getRandomFloat(-10,10);
    this.setBmsSocData.cell2 = getRandomFloat(-5,5);
    this.setBmsSocData.cell3 = getRandomFloat(0,3000);
    this.setBmsSocData.cell4 = getRandomFloat(0,3000);
    
    dispatch( setBmsSocData(this.setBmsSocData) );

    this.setBmsTempData.cell1 = getRandomFloat(-10,10);
    this.setBmsTempData.cell2 = getRandomFloat(-5,5);
    this.setBmsTempData.cell3 = getRandomFloat(0,3000);
    this.setBmsTempData.cell4 = getRandomFloat(0,3000);
    
    dispatch( setBmsTempData(this.setBmsTempData) );

    this.setInvVoltData.inv1 = getRandomFloat(-10,10);
    this.setInvVoltData.inv2 = getRandomFloat(-5,5);
    this.setInvVoltData.inv3 = getRandomFloat(0,3000);
    this.setInvVoltData.inv4 = getRandomFloat(0,3000);
    
    dispatch( setInvVoltData(this.setInvVoltData) );

    this.setInvTempData.inv1 = getRandomFloat(-10,10);
    this.setInvTempData.inv2 = getRandomFloat(-5,5);
    this.setInvTempData.inv3 = getRandomFloat(0,3000);
    this.setInvTempData.inv4 = getRandomFloat(0,3000);
    
    dispatch( setInvTempData(this.setInvTempData) );

    this.setBcuMBogieData.b1 = getRandomFloat(0,250);
    this.setBcuMBogieData.b2 = getRandomFloat(0,10000);
    this.setBcuMBogieData.b3 = getRandomFloat(-5,5);
    this.setBcuMBogieData.b4 = getRandomFloat(0,2);

    dispatch( setBcuMBogieData(this.setBcuMBogieData) )

    this.setBcuTBogieData.b1 = getRandomFloat(0,250);
    this.setBcuTBogieData.b2 = getRandomFloat(0,10000);
    this.setBcuTBogieData.b3 = getRandomFloat(-5,5);
    this.setBcuTBogieData.b4 = getRandomFloat(0,2);

    dispatch( setBcuTBogieData(this.setBcuTBogieData) )

    if (this.setDriveInfoData.speed.length >= 234) {
      this.setDriveInfoData.speed.shift();
    }

    this.setDriveInfoData.notch = getRandomInt(-3,3);
    this.setDriveInfoData.speed.push(getRandomFloat(0,15));
    this.setDriveInfoData.soc = getRandomFloat(0,90);
    this.setDriveInfoData.tract = getRandomFloat(0,30);
    this.setDriveInfoData.brake = getRandomFloat(0,10);

    dispatch( setDriveInfoData(this.setDriveInfoData) )

    this.setFrontLaserData.lx = getRandomFloat(-10,10);
    this.setFrontLaserData.ly = getRandomFloat(-10,10);
    this.setFrontLaserData.rx = getRandomFloat(-10,10);
    this.setFrontLaserData.ry = getRandomFloat(-10,10);
    this.setFrontLaserData.g = getRandomFloat(-5,5);

    dispatch( setFrontLaserData(this.setFrontLaserData) )

    this.setRearLaserData.lx = getRandomFloat(-10,10);
    this.setRearLaserData.ly = getRandomFloat(-10,10);
    this.setRearLaserData.rx = getRandomFloat(-10,10);
    this.setRearLaserData.ry = getRandomFloat(-10,10);
    this.setRearLaserData.g = getRandomFloat(-5,5);

    dispatch( setRearLaserData(this.setRearLaserData) )

    if (this.setDriveData.speed.length >= 234) {
      this.setDriveData.speed.shift();
    }

    this.setDriveData.tracBatt = getRandomFloat(300,900);
    this.setDriveData.contBatt = getRandomFloat(10,40);
    this.setDriveData.maxInvTemp = getRandomFloat(0,100);
    this.setDriveData.maxMotorTemp = getRandomFloat(0,100);
    this.setDriveData.battTemp = getRandomFloat(0,100);
    this.setDriveData.soc = getRandomFloat(0,100);
    this.setDriveData.fwd = getRandomInt(-3,3);
    this.setDriveData.speed = getRandomFloat(0,60);
    this.setDriveData.position = getRandomFloat(0,250);
    //this.setDriveData.trat = getRandomFloat(,);//최대최소값이 없음;;;
    //this.setDriveData.brake = getRandomFloat(,);

    dispatch( setDriveData(this.setDriveData) )

    this.setFrontSensorData.lxA = getRandomFloat(-10,10);
    this.setFrontSensorData.lxS = getRandomFloat(-10,10);
    this.setFrontSensorData.ly1A = getRandomFloat(-10,10);
    this.setFrontSensorData.ly1S = getRandomFloat(-10,10);
    this.setFrontSensorData.ly2A = getRandomFloat(-10,10);
    this.setFrontSensorData.ly2S = getRandomFloat(-10,10);
    this.setFrontSensorData.rxA = getRandomFloat(-10,10);
    this.setFrontSensorData.rxS = getRandomFloat(-10,10);
    this.setFrontSensorData.ry1A = getRandomFloat(-10,10);
    this.setFrontSensorData.ry1S = getRandomFloat(-10,10);
    this.setFrontSensorData.ry2A = getRandomFloat(-10,10);
    this.setFrontSensorData.ry2S = getRandomFloat(-10,10);
    this.setFrontSensorData.gA = getRandomFloat(-5,5);
    this.setFrontSensorData.gS = getRandomFloat(-5,5);

    dispatch( setFrontSensorData(this.setFrontSensorData) )

    this.setRearSensorData.lxA = getRandomFloat(-10,10);
    this.setRearSensorData.lxS = getRandomFloat(-10,10);
    this.setRearSensorData.ly1A = getRandomFloat(-10,10);
    this.setRearSensorData.ly1S = getRandomFloat(-10,10);
    this.setRearSensorData.ly2A = getRandomFloat(-10,10);
    this.setRearSensorData.ly2S = getRandomFloat(-10,10);
    this.setRearSensorData.rxA = getRandomFloat(-10,10);
    this.setRearSensorData.rxS = getRandomFloat(-10,10);
    this.setRearSensorData.ry1A = getRandomFloat(-10,10);
    this.setRearSensorData.ry1S = getRandomFloat(-10,10);
    this.setRearSensorData.ry2A = getRandomFloat(-10,10);
    this.setRearSensorData.ry2S = getRandomFloat(-10,10);
    this.setRearSensorData.gA = getRandomFloat(-5,5);
    this.setRearSensorData.gS = getRandomFloat(-5,5);

    dispatch( setRearSensorData(this.setRearSensorData) )

    //hsc

    if (this.frontLeftHscData.sylinder.length >= 292) {
      this.frontLeftHscData.sylinder.shift();
      this.frontLeftHscData.yawAngle.shift();
      this.frontLeftHscData.aPort.shift();
      this.frontLeftHscData.bPort.shift();
    }
    this.frontLeftHscData.sylinder.push(getRandomFloat(-10,10));
    this.frontLeftHscData.yawAngle.push(getRandomFloat(-5,5));
    this.frontLeftHscData.aPort.push(getRandomInt(0,50));
    this.frontLeftHscData.bPort.push(getRandomInt(0,150));

    dispatch( setFrontLeftHscData(this.frontLeftHscData) );

    if (this.frontRightHscData.sylinder.length >= 292) {
      this.frontRightHscData.sylinder.shift();
      this.frontRightHscData.yawAngle.shift();
      this.frontRightHscData.aPort.shift();
      this.frontRightHscData.bPort.shift();
    }
    this.frontRightHscData.sylinder.push(getRandomFloat(-10,10));
    this.frontRightHscData.yawAngle.push(getRandomFloat(-5,5));
    this.frontRightHscData.aPort.push(getRandomInt(0,50));
    this.frontRightHscData.bPort.push(getRandomInt(0,150));
    
    dispatch( setFrontRightHscData(this.frontRightHscData) );

    if (this.rearLeftHscData.sylinder.length >= 292) {
      this.rearLeftHscData.sylinder.shift();
      this.rearLeftHscData.yawAngle.shift();
      this.rearLeftHscData.aPort.shift();
      this.rearLeftHscData.bPort.shift();
    }
    this.rearLeftHscData.sylinder.push(getRandomFloat(-10,10));
    this.rearLeftHscData.yawAngle.push(getRandomFloat(-5,5));
    this.rearLeftHscData.aPort.push(getRandomInt(0,50));
    this.rearLeftHscData.bPort.push(getRandomInt(0,150));
    
    dispatch( setRearLeftHscData(this.rearLeftHscData) );

    if (this.rearRightHscData.sylinder.length >= 292) {
      this.rearRightHscData.sylinder.shift();
      this.rearRightHscData.yawAngle.shift();
      this.rearRightHscData.aPort.shift();
      this.rearRightHscData.bPort.shift();
    }
    this.rearRightHscData.sylinder.push(getRandomFloat(-10,10));
    this.rearRightHscData.yawAngle.push(getRandomFloat(-5,5));
    this.rearRightHscData.aPort.push(getRandomInt(0,50));
    this.rearRightHscData.bPort.push(getRandomInt(0,150));
    
    dispatch( setRearRightHscData(this.rearRightHscData) );

    this.setMotorControlHscData.position = getRandomFloat(0,250);
    this.setMotorControlHscData.curv = getRandomInt(0,10000);
    this.setMotorControlHscData.speed = getRandomFloat(0,60);
      
    dispatch( setMotorControlHscData(this.setMotorControlHscData) );

    this.setFrontWheelsetHscData.position = getRandomFloat(0,250);
    this.setFrontWheelsetHscData.trackCurve = getRandomFloat(0,10000);
    this.setFrontWheelsetHscData.attackAngle = getRandomFloat(-5,5);
    this.setFrontWheelsetHscData.steeringRatio = getRandomFloat(0,2);

    dispatch( setFrontWheelsetHscData(this.setFrontWheelsetHscData) );

    this.setRearWheelsetHscData.position = getRandomFloat(0,250);
    this.setRearWheelsetHscData.trackCurve = getRandomFloat(0,10000);
    this.setRearWheelsetHscData.attackAngle = getRandomFloat(-5,5);
    this.setRearWheelsetHscData.steeringRatio = getRandomFloat(0,2);

    dispatch( setRearWheelsetHscData(this.setRearWheelsetHscData) );
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
            <Redirect from="/" to="/m2/main" />
            <Route exact path="/m2/main" component={ViewM2Main} />
            <Route path="/m2/run" component={ViewM2Run} />
            <Route path="/m2/setup" component={ViewM2Setup} />
            <Route path="/m2/spec" component={ViewM2Spec} />
          </div>
          <div 
            className="navi"
            style={{
              //background: 'url(/img/navi-bg.png)'
              background: 'url(/img/navi-drive-bg.png)'
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
                  <NavLink to="/m2/main" activeClassName="navOn" style={{position: 'relative'}}>
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
                  <NavLink to="/m2/run" activeClassName="navOn" style={{position: 'relative'}}>
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
                    >TEST run</div>
                  </NavLink>
                </li>
                <li className="navTop3">
                  <NavLink to="/m2/setup" activeClassName="navOn" style={{position: 'relative'}}>
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
                  <NavLink to="/m2/spec" activeClassName="navOn" style={{position: 'relative'}}>
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
