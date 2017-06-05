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
  setDriveInfoData
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

/*
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <NavLink to={`${match.url}/rendering`}>
          Rendering with React
        </NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/components`}>
          Components
        </NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/props-v-state`}>
          Props v. State
        </NavLink>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);
*/

class App extends Component {
  constructor(props) {
    super(props);
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
  }
  componentDidMount() {
    this.timer = setInterval(this.thick, 1000 / 30);
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
  }
  render() {
    return (
      <Router>
        <div>
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
            <div className="navi-btns">
              <ul>
                <li className="navTop1">
                  <NavLink to="/main" activeClassName="navOn">
                    <img src="img/navi1.png" alt="main" />
                  </NavLink>
                </li>
                <li className="navTop2">
                  <NavLink to="/itcrun" activeClassName="navOn">
                    <img src="img/navi2.png" alt="ITC Run" />
                  </NavLink>
                </li>
                <li className="navTop3">
                  <NavLink to="/setup" activeClassName="navOn">
                    <img src="img/navi3.png" alt="Setup" />
                  </NavLink>
                </li>
                <li className="navTop2">
                  <NavLink to="/spec" activeClassName="navOn">
                    <img src="img/navi4.png" alt="Spec" />
                  </NavLink>
                </li>
                <li className="navTop1">
                  <NavLink to="/" activeClassName="navOn">
                    <img src="img/navi5.png" alt="Demo" />
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
