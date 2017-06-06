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
  setDriveData,
  setItcTestData,
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
  Route,
  NavLink
} from 'react-router-dom';

import { getRandomInt, getRandomFloat } from './utils/functions';

import ViewMain from './ViewMain';
import ViewITCRun from './ViewITCRun';
import ViewSetup from './ViewSetup';
import ViewTrain from './ViewTrain';
import ViewSpec from './ViewSpec';
import ViewTest from './ViewTest';
import ViewTest2 from './ViewTest2';
import ViewTestSetupPanel from './ViewTestSetupPanel';


class App extends Component {
  constructor(props) {
    super(props);
    this.worker = null;
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

    this.currentData = null;
  }
  componentDidMount() {
     // this.timer = setInterval(this.thick, 1000 / 30);
    /*
    this.socket = new WebSocket('ws://localhost:8181/');
    this.socket.onmessage = e => {
      var json = JSON.parse(e.data);
      this.handleData(json);
      // this.currentData = json;
      // setTimeout(this.handleData, 10);
    } 
    */
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

    /*
    if (ITCSETUP.)
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
    */

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



    this.setMotorControlData.position = getRandomFloat(0,250);
    this.setMotorControlData.curv = getRandomInt(0,10000);
    this.setMotorControlData.speed = getRandomFloat(0,60);
    dispatch( setMotorControlData(this.setMotorControlData) );

    

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
            <Route exact path="/main" component={ViewMain}/>
            <Route path="/itcrun" component={ViewITCRun}/>
            <Route path="/setup" component={ViewSetup}/>
            <Route path="/train" component={ViewTrain}/>
            <Route path="/spec" component={ViewSpec}/>
            <Route path="/test" component={ViewTest} />
            <Route path="/test2" component={ViewTest2} />
            <Route path="/testsetuppanel" component={ViewTestSetupPanel} />
          </div>
          <div className="navi">
            <div className="copy">
              <img src="img/copy.png" alt="copyright"/>
            </div>
            <div className="ver">
              Ver.0.00001
            </div>
            <div className="navi-btns" style={{ width: '730px' }}>
              <ul>
                <li className="navTop1">
                  <NavLink to="/main" activeClassName="navOn">
                    <img src="img/navi1.png" alt="main" />
                  </NavLink>
                </li>
                <li className="navTop3">
                  <NavLink to="/itcrun" activeClassName="navOn">
                    <img src="img/navi2.png" alt="ITC Run" />
                  </NavLink>
                </li>
                <li className="navTop3">
                  <NavLink to="/setup" activeClassName="navOn">
                    <img src="img/navi3.png" alt="Setup" />
                  </NavLink>
                </li>
                <li className="navTop1">
                  <NavLink to="/spec" activeClassName="navOn">
                    <img src="img/navi4.png" alt="Spec" />
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
