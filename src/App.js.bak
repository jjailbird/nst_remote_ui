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
    this.hostname = '192.168.1.2'; // window.location.hostname;
    this.thick = this.thick.bind(this);
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
    // this.timer = setInterval(this.thick, 1000 / 30);
    
  }
  handleData(data) {
    const json = JSON.parse(data); 
    const ITCTEST = json.ITCTEST ? json.ITCTEST : {};
    const ITCSETUP = json.ITCSETUP ? json.ITCSETUP : {}; 
    const { dispatch } = this.props;
    // const json = JSON.parse(data);
    // console.log('webSocket Received:', json);
   
    if (ITCTEST.FrontLeft) {
      if (this.frontLeftData.latDistance.length >= 292) {
        this.frontLeftData.latDistance.shift();
        this.frontLeftData.yawAngle.shift();
        this.frontLeftData.motorTorque.shift();
        this.frontLeftData.motorSpeed.shift();
      }
      this.frontLeftData.latDistance.push(ITCTEST.FrontLeft.LatDistance);
      this.frontLeftData.yawAngle.push(ITCTEST.FrontLeft.YawAngle);
      this.frontLeftData.motorTorque.push(ITCTEST.FrontLeft.MotorTorque);
      this.frontLeftData.motorSpeed.push(ITCTEST.FrontLeft.MotorSpeed);
      dispatch( setFrontLeftData(this.frontLeftData) );
    }

    if (ITCTEST.FrontRight) {
      if (this.frontRightData.latDistance.length >= 292) {
        this.frontRightData.latDistance.shift();
        this.frontRightData.yawAngle.shift();
        this.frontRightData.motorTorque.shift();
        this.frontRightData.motorSpeed.shift();
      }
      this.frontRightData.latDistance.push(ITCTEST.FrontRight.LatDistance);
      this.frontRightData.yawAngle.push(ITCTEST.FrontRight.YawAngle);
      this.frontRightData.motorTorque.push(ITCTEST.FrontRight.MotorTorque);
      this.frontRightData.motorSpeed.push(ITCTEST.FrontRight.MotorSpeed);
      dispatch( setFrontRightData(this.frontRightData) );
    }

    if (ITCTEST.RearLeft) {
      if (this.rearLeftData.latDistance.length >= 292) {
        this.rearLeftData.latDistance.shift();
        this.rearLeftData.yawAngle.shift();
        this.rearLeftData.motorTorque.shift();
        this.rearLeftData.motorSpeed.shift();
      }
      this.rearLeftData.latDistance.push(ITCTEST.RearLeft.LatDistance);
      this.rearLeftData.yawAngle.push(ITCTEST.RearLeft.YawAngle);
      this.rearLeftData.motorTorque.push(ITCTEST.RearLeft.MotorTorque);
      this.rearLeftData.motorSpeed.push(ITCTEST.RearLeft.MotorSpeed);
      dispatch( setRearLeftData(this.rearLeftData) );
    }

    if (ITCTEST.RearRight) {
      if (this.rearRightData.latDistance.length >= 292) {
        this.rearRightData.latDistance.shift();
        this.rearRightData.yawAngle.shift();
        this.rearRightData.motorTorque.shift();
        this.rearRightData.motorSpeed.shift();
      }
      this.rearRightData.latDistance.push(ITCTEST.RearRight.LatDistance);
      this.rearRightData.yawAngle.push(ITCTEST.RearRight.YawAngle);
      this.rearRightData.motorTorque.push(ITCTEST.RearRight.MotorTorque);
      this.rearRightData.motorSpeed.push(ITCTEST.RearRight.MotorSpeed);
      dispatch( setRearRightData(this.rearRightData) );
    }

    if (ITCTEST.Vehicle) {
      // console.log('json.Vehicle:', json.Vehicle);
      this.setMotorControlData.position = ITCTEST.Vehicle.Position;
      this.setMotorControlData.curv = ITCTEST.Vehicle.Radius;
      this.setMotorControlData.speed = ITCTEST.Vehicle.Speed;
      dispatch( setMotorControlData(this.setMotorControlData) );
    }

    if (ITCTEST.FrontWheelset) {
      // console.log('json.FrontWheelset:', json.FrontWheelset);
      this.setFrontWheelsetData.position = ITCTEST.FrontWheelset.Position;
      this.setFrontWheelsetData.trackCurve = ITCTEST.FrontWheelset.TrackCurve;
      this.setFrontWheelsetData.attackAngle = ITCTEST.FrontWheelset.AttackAngle;
      this.setFrontWheelsetData.steeringRatio = ITCTEST.FrontWheelset.SteeringRatio;
      dispatch( setFrontWheelsetData(this.setFrontWheelsetData) );
    }

    if (ITCTEST.RearWheelset) {
      this.setRearWheelsetData.position = ITCTEST.RearWheelset.Position;
      this.setRearWheelsetData.trackCurve = ITCTEST.RearWheelset.TrackCurve;
      this.setRearWheelsetData.attackAngle = ITCTEST.RearWheelset.AttackAngle;
      this.setRearWheelsetData.steeringRatio = ITCTEST.RearWheelset.SteeringRatio;
      dispatch( setRearWheelsetData(this.setRearWheelsetData) );
    }
  
    if (ITCSETUP.FrontLeftMotor) {
      this.frontLeftMotorData.rpm = ITCSETUP.FrontLeftMotor.RPM;
      this.frontLeftMotorData.torque = ITCSETUP.FrontLeftMotor.Torque;
      this.frontLeftMotorData.a = ITCSETUP.FrontLeftMotor.A;
      this.frontLeftMotorData.b = ITCSETUP.FrontLeftMotor.B;
      this.frontLeftMotorData.c = ITCSETUP.FrontLeftMotor.C;
      this.frontLeftMotorData.temp = ITCSETUP.FrontLeftMotor.Temp;
      dispatch( setFrontLeftMotorData(this.frontLeftMotorData) );
    }
    
    if (ITCSETUP.FrontRightMotor) {
      this.frontRightMotorData.rpm = ITCSETUP.FrontRightMotor.RPM;
      this.frontRightMotorData.torque = ITCSETUP.FrontRightMotor.RPM;
      this.frontRightMotorData.a = ITCSETUP.FrontRightMotor.A;
      this.frontRightMotorData.b = ITCSETUP.FrontRightMotor.B;
      this.frontRightMotorData.c = ITCSETUP.FrontRightMotor.C;
      this.frontRightMotorData.temp = ITCSETUP.FrontRightMotor.Temp;
      dispatch( setFrontRightMotorData(this.frontRightMotorData) );
    }

    if (ITCSETUP.RearLeftMotor) {
      this.rearLeftMotorData.rpm = ITCSETUP.RearLeftMotor.RPM;
      this.rearLeftMotorData.torque = ITCSETUP.RearLeftMotor.Torque;
      this.rearLeftMotorData.a = ITCSETUP.RearLeftMotor.A;
      this.rearLeftMotorData.b = ITCSETUP.RearLeftMotor.B;
      this.rearLeftMotorData.c = ITCSETUP.RearLeftMotor.C;
      this.rearLeftMotorData.temp = ITCSETUP.RearLeftMotor.Temp;
      dispatch( setRearLeftMotorData(this.rearLeftMotorData) );
    }

    if (ITCSETUP.RearRightMotor) {
      this.rearRightMotorData.rpm = ITCSETUP.RearRightMotor.RPM;
      this.rearRightMotorData.torque = ITCSETUP.RearRightMotor.Torque;
      this.rearRightMotorData.a = ITCSETUP.RearRightMotor.A;
      this.rearRightMotorData.b = ITCSETUP.RearRightMotor.B;
      this.rearRightMotorData.c = ITCSETUP.RearRightMotor.C;
      this.rearRightMotorData.temp = ITCSETUP.RearRightMotor.Temp;    
      dispatch( setRearRightMotorData(this.rearRightMotorData) );
    }
    
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
 

    
    if (ITCSETUP.FrontAxleLeftLaser) {
      this.setFrontSensorData.lxA = ITCSETUP.FrontAxleLeftLaser.YA_0;
      this.setFrontSensorData.lxS = ITCSETUP.FrontAxleLeftLaser.YS_0;
      
      this.setFrontSensorData.ly1A = ITCSETUP.FrontAxleLeftLaser.YA_1;
      this.setFrontSensorData.ly1S = ITCSETUP.FrontAxleLeftLaser.YS_1;
      
      this.setFrontSensorData.ly2A = ITCSETUP.FrontAxleLeftLaser.YA_1;
      this.setFrontSensorData.ly2S = ITCSETUP.FrontAxleLeftLaser.YS_1;
      
      this.setFrontSensorData.rxA = ITCSETUP.FrontAxleRightLaser.YA_0;
      this.setFrontSensorData.rxS = ITCSETUP.FrontAxleRightLaser.YS_0;
      
      this.setFrontSensorData.ry1A = ITCSETUP.FrontAxleRightLaser.YA_1;
      this.setFrontSensorData.ry1S = ITCSETUP.FrontAxleRightLaser.YS_1;
      
      this.setFrontSensorData.ry2A = ITCSETUP.FrontAxleRightLaser.YA_1;
      this.setFrontSensorData.ry2S = ITCSETUP.FrontAxleRightLaser.YS_1;
      
      this.setFrontSensorData.gA = ITCSETUP.FrontAxleGyro.GyroA;
      this.setFrontSensorData.gS = ITCSETUP.FrontAxleGyro.GyroS;
      dispatch( setFrontSensorData(this.setFrontSensorData) )
    }

     if (ITCSETUP.RearAxleLeftLaser) {
      this.setRearSensorData.lxA = getRandomFloat(-10,10);
      
      this.setRearSensorData.lxA = ITCSETUP.RearAxleLeftLaser.YA_0;
      this.setRearSensorData.lxS = ITCSETUP.RearAxleLeftLaser.YS_0;
      
      this.setRearSensorData.ly1A = ITCSETUP.RearAxleLeftLaser.YA_1;
      this.setRearSensorData.ly1S = ITCSETUP.RearAxleLeftLaser.YS_1;
      
      this.setRearSensorData.ly2A = ITCSETUP.RearAxleLeftLaser.YA_1;
      this.setRearSensorData.ly2S = ITCSETUP.RearAxleLeftLaser.YS_1;
      
      this.setRearSensorData.rxA = ITCSETUP.RearAxleRightLaser.YA_0;
      this.setRearSensorData.rxS = ITCSETUP.RearAxleRightLaser.YS_0;
      
      this.setRearSensorData.ry1A = ITCSETUP.RearAxleRightLaser.YA_1;
      this.setRearSensorData.ry1S = ITCSETUP.RearAxleRightLaser.YS_1;
      
      this.setRearSensorData.ry2A = ITCSETUP.RearAxleRightLaser.YA_1;
      this.setRearSensorData.ry2S = ITCSETUP.RearAxleRightLaser.YS_1;
      
      this.setRearSensorData.gA = ITCSETUP.RearAxleGyro.GyroA;
      this.setRearSensorData.gS = ITCSETUP.RearAxleGyro.GyroS;
      dispatch( setRearSensorData(this.setRearSensorData) )
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
