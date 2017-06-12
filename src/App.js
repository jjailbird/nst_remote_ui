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
    this.hostname = window.location.hostname;
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
    const HSCTEST = json.HSCTEST ? json.HSCTEST : null;
    const HSCSETUP = json.HSCSETUP ? json.HSCSETUP : null; 
    const { dispatch } = this.props;

    if (HSCTEST) {
      this.setMotorControlHscData.position = HSCTEST.Vehicle.Position; // getRandomFloat(0,250);
      this.setMotorControlHscData.curv = HSCTEST.Vehicle.Radius; // getRandomInt(0,10000);
      this.setMotorControlHscData.speed = HSCTEST.Vehicle.Speed; // getRandomFloat(0,60);
      dispatch( setMotorControlHscData(this.setMotorControlHscData) );

      if (this.frontLeftHscData.sylinder.length >= 292) {
        this.frontLeftHscData.sylinder.shift();
        this.frontLeftHscData.yawAngle.shift();
        this.frontLeftHscData.aPort.shift();
        this.frontLeftHscData.bPort.shift();
      }
      this.frontLeftHscData.sylinder.push(HSCTEST.FrontLeft.CylStrokes);
      this.frontLeftHscData.yawAngle.push(HSCTEST.FrontLeft.YawAngle);
      this.frontLeftHscData.aPort.push(HSCTEST.FrontLeft.APressure);
      this.frontLeftHscData.bPort.push(HSCTEST.FrontLeft.BPressure);
      dispatch( setFrontLeftHscData(this.frontLeftHscData) );

      if (this.frontRightHscData.sylinder.length >= 292) {
        this.frontRightHscData.sylinder.shift();
        this.frontRightHscData.yawAngle.shift();
        this.frontRightHscData.aPort.shift();
        this.frontRightHscData.bPort.shift();
      }
      this.frontRightHscData.sylinder.push(HSCTEST.FrontRight.CylStrokes);
      this.frontRightHscData.yawAngle.push(HSCTEST.FrontRight.YawAngle);
      this.frontRightHscData.aPort.push(HSCTEST.FrontRight.APressure);
      this.frontRightHscData.bPort.push(HSCTEST.FrontRight.BPressure);
      dispatch( setFrontRightHscData(this.frontRightHscData) );

      if (this.rearLeftHscData.sylinder.length >= 292) {
        this.rearLeftHscData.sylinder.shift();
        this.rearLeftHscData.yawAngle.shift();
        this.rearLeftHscData.aPort.shift();
        this.rearLeftHscData.bPort.shift();
      }
      this.rearLeftHscData.sylinder.push(HSCTEST.RearLeft.CylStrokes);
      this.rearLeftHscData.yawAngle.push(HSCTEST.RearLeft.YawAngle);
      this.rearLeftHscData.aPort.push(HSCTEST.RearLeft.APressure);
      this.rearLeftHscData.bPort.push(HSCTEST.RearLeft.BPressure);
      dispatch( setRearLeftHscData(this.rearLeftHscData) );

      if (this.rearRightHscData.sylinder.length >= 292) {
        this.rearRightHscData.sylinder.shift();
        this.rearRightHscData.yawAngle.shift();
        this.rearRightHscData.aPort.shift();
        this.rearRightHscData.bPort.shift();
      }
      this.rearRightHscData.sylinder.push(HSCTEST.RearRight.CylStrokes);
      this.rearRightHscData.yawAngle.push(HSCTEST.RearRight.YawAngle);
      this.rearRightHscData.aPort.push(HSCTEST.RearRight.APressure);
      this.rearRightHscData.bPort.push(HSCTEST.RearRight.BPressure);
      dispatch( setRearRightHscData(this.rearRightHscData) );

      this.setFrontWheelsetHscData.position = HSCTEST.FrontWheelset.Position; // getRandomFloat(0,250);
      this.setFrontWheelsetHscData.trackCurve = HSCTEST.FrontWheelset.TrackCurve;// getRandomFloat(0,10000);
      this.setFrontWheelsetHscData.attackAngle = HSCTEST.FrontWheelset.AttackAngle; //getRandomFloat(-5,5);
      this.setFrontWheelsetHscData.steeringRatio = HSCTEST.FrontWheelset.SteeringRatio; //getRandomFloat(0,2);
      dispatch( setFrontWheelsetHscData(this.setFrontWheelsetHscData) );

      this.setRearWheelsetHscData.position = HSCTEST.RearWheelset.Position; // getRandomFloat(0,250);
      this.setRearWheelsetHscData.trackCurve = HSCTEST.RearWheelset.TrackCurve;// getRandomFloat(0,10000);
      this.setRearWheelsetHscData.attackAngle = HSCTEST.RearWheelset.AttackAngle; //getRandomFloat(-5,5);
      this.setRearWheelsetHscData.steeringRatio = HSCTEST.RearWheelset.SteeringRatio; //getRandomFloat(0,2);
      dispatch( setRearWheelsetHscData(this.setRearWheelsetHscData) );
    }

    if (HSCSETUP) {
      // HSCSETUP. FrontRight FrontLeft RearRight RearLeft
      // SteerForce LVDT GyroZ
      
      this.setFrontLaserData.lx = HSCSETUP.FrontLeft.SteerForce;  // getRandomFloat(-10,10);
      this.setFrontLaserData.ly = HSCSETUP.FrontLeft.LVDT;        //getRandomFloat(-10,10);
      this.setFrontLaserData.rx = HSCSETUP.FrontRight.SteerForce; // getRandomFloat(-10,10);
      this.setFrontLaserData.ry = HSCSETUP.FrontRight.LVDT;       // getRandomFloat(-10,10);
      this.setFrontLaserData.g =  HSCSETUP.FrontRight.GyroZ;      // getRandomFloat(-5,5);
      dispatch( setFrontLaserData(this.setFrontLaserData) )

      this.setRearLaserData.lx = HSCSETUP.RearLeft.SteerForce;    // getRandomFloat(-10,10);
      this.setRearLaserData.ly = HSCSETUP.RearLeft.LVDT;          // getRandomFloat(-10,10);
      this.setRearLaserData.rx = HSCSETUP.FrontRight.SteerForce;  // getRandomFloat(-10,10);
      this.setRearLaserData.ry = HSCSETUP.FrontRight.LVDT;        // getRandomFloat(-10,10);
      this.setRearLaserData.g = HSCSETUP.FrontRight.GyroZ;        // getRandomFloat(-5,5);
      dispatch( setRearLaserData(this.setRearLaserData) )


      // rpm ==> force
      // torque ==> stroke
      // c ==> delete!
      this.frontLeftMotorData.rpm = HSCSETUP.FrontLeftCylinder.Force; // getRandomInt(0,3000);
      this.frontLeftMotorData.torque = HSCSETUP.FrontLeftCylinder.Stroke; //getRandomInt(0,3000);
      this.frontLeftMotorData.a = HSCSETUP.FrontLeftCylinder.APress; //getRandomInt(0,500);
      this.frontLeftMotorData.b = HSCSETUP.FrontLeftCylinder.BPress //getRandomInt(0,500);
      // this.frontLeftMotorData.c = HSCSETUP.FrontLeftCylinder. //getRandomInt(0,500);
      this.frontLeftMotorData.temp = HSCSETUP.FrontLeftCylinder.FTemp; //getRandomInt(0,100);
      dispatch( setFrontLeftMotorData(this.frontLeftMotorData) );

      this.frontRightMotorData.rpm = HSCSETUP.FrontRightCylinder.Force; // getRandomInt(0,3000);
      this.frontRightMotorData.torque = HSCSETUP.FrontRightCylinder.Stroke; //getRandomInt(0,3000);
      this.frontRightMotorData.a = HSCSETUP.FrontRightCylinder.APress; //getRandomInt(0,500);
      this.frontRightMotorData.b = HSCSETUP.FrontRightCylinder.BPress; //getRandomInt(0,500);
      // this.frontRightMotorData.c = getRandomInt(0,500);
      this.frontRightMotorData.temp = HSCSETUP.FrontRightCylinder.FTemp; //getRandomInt(0,100);
      dispatch( setFrontRightMotorData(this.frontRightMotorData) );

      this.rearLeftMotorData.rpm = HSCSETUP.RearLeftCylinder.Force; //getRandomInt(0,3000);
      this.rearLeftMotorData.torque = HSCSETUP.RearLeftCylinder.Stroke; //getRandomInt(0,3000);
      this.rearLeftMotorData.a = HSCSETUP.RearLeftCylinder.APress; //getRandomInt(0,500);
      this.rearLeftMotorData.b = HSCSETUP.RearLeftCylinder.BPress; //getRandomInt(0,500);
      // this.rearLeftMotorData.c = getRandomInt(0,500);
      this.rearLeftMotorData.temp = HSCSETUP.RearLeftCylinder.FTemp; //getRandomInt(0,100);
      dispatch( setRearLeftMotorData(this.rearLeftMotorData) );

      this.rearRightMotorData.rpm = HSCSETUP.RearRightCylinder.Force; // getRandomInt(0,3000);
      this.rearRightMotorData.torque = HSCSETUP.RearRightCylinder.Stroke; // getRandomInt(0,3000);
      this.rearRightMotorData.a = HSCSETUP.RearRightCylinder.APress; // getRandomInt(0,500);
      this.rearRightMotorData.b = HSCSETUP.RearRightCylinder.BPress; // getRandomInt(0,500);
      // this.rearRightMotorData.c = HSCSETUP.RearRightCylinder.Force; // getRandomInt(0,500);
      this.rearRightMotorData.temp = HSCSETUP.RearRightCylinder.FTemp; // getRandomInt(0,100);    
      dispatch( setRearRightMotorData(this.rearRightMotorData) );

      this.setFrontSensorData.lxA = HSCSETUP.AxleFrontLeftCylinder.AP_A; // getRandomFloat(-10,10);
      this.setFrontSensorData.lxS = HSCSETUP.AxleFrontLeftCylinder.AP_S;// getRandomFloat(-10,10);
      this.setFrontSensorData.ly1A = HSCSETUP.AxleFrontLeftCylinder.BP_A; // getRandomFloat(-10,10);
      this.setFrontSensorData.ly1S = HSCSETUP.AxleFrontLeftCylinder.BP_S; // getRandomFloat(-10,10);
      this.setFrontSensorData.ly2A = HSCSETUP.AxleFrontLeftCylinder.S_A; // getRandomFloat(-10,10);
      this.setFrontSensorData.ly2S = HSCSETUP.AxleFrontLeftCylinder.S_S; // getRandomFloat(-10,10);
      this.setFrontSensorData.rxA = HSCSETUP.AxleFrontRightCylinder.AP_A; // getRandomFloat(-10,10);
      this.setFrontSensorData.rxS = HSCSETUP.AxleFrontRightCylinder.AP_S; // getRandomFloat(-10,10);
      this.setFrontSensorData.ry1A = HSCSETUP.AxleFrontRightCylinder.BP_A; // getRandomFloat(-10,10);
      this.setFrontSensorData.ry1S = HSCSETUP.AxleFrontRightCylinder.BP_S; // getRandomFloat(-10,10);
      this.setFrontSensorData.ry2A = HSCSETUP.AxleFrontRightCylinder.S_A; // getRandomFloat(-10,10);
      this.setFrontSensorData.ry2S = HSCSETUP.AxleFrontRightCylinder.S_S; // getRandomFloat(-10,10);
      this.setFrontSensorData.gA = HSCSETUP.AxleFrontGyro.GyroA; // getRandomFloat(-5,5);
      this.setFrontSensorData.gS = HSCSETUP.AxleFrontGyro.GyroS; // getRandomFloat(-5,5);
      dispatch( setFrontSensorData(this.setFrontSensorData) )

      this.setRearSensorData.lxA = HSCSETUP.AxleRearLeftCylinder.AP_A;  // getRandomFloat(-10,10);
      this.setRearSensorData.lxS = HSCSETUP.AxleRearLeftCylinder.AP_S;  // getRandomFloat(-10,10);
      this.setRearSensorData.ly1A = HSCSETUP.AxleRearLeftCylinder.BP_A;  // getRandomFloat(-10,10);
      this.setRearSensorData.ly1S = HSCSETUP.AxleRearLeftCylinder.BP_S;  // getRandomFloat(-10,10);
      this.setRearSensorData.ly2A = HSCSETUP.AxleRearLeftCylinder.S_A;  // getRandomFloat(-10,10);
      this.setRearSensorData.ly2S = HSCSETUP.AxleRearLeftCylinder.S_S;  // getRandomFloat(-10,10);
      this.setRearSensorData.rxA = HSCSETUP.AxleRearRightCylinder.AP_A; // getRandomFloat(-10,10);
      this.setRearSensorData.rxS = HSCSETUP.AxleRearRightCylinder.AP_S; // getRandomFloat(-10,10);
      this.setRearSensorData.ry1A = HSCSETUP.AxleRearRightCylinder.BP_A; // getRandomFloat(-10,10);
      this.setRearSensorData.ry1S = HSCSETUP.AxleRearRightCylinder.BP_S; // getRandomFloat(-10,10);
      this.setRearSensorData.ry2A = HSCSETUP.AxleRearRightCylinder.S_A; // getRandomFloat(-10,10);
      this.setRearSensorData.ry2S = HSCSETUP.AxleRearRightCylinder.S_S; // getRandomFloat(-10,10);
      this.setRearSensorData.gA = HSCSETUP.AxleRearGyro.GyroA; // getRandomFloat(-5,5);
      this.setRearSensorData.gS = HSCSETUP.AxleRearGyro.GyroS; // getRandomFloat(-5,5);
      dispatch( setRearSensorData(this.setRearSensorData) )



    }



    // const json = JSON.parse(data);
    // console.log('webSocket Received:', json);
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

export default connect()(App);
