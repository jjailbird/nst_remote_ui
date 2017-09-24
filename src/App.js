import Websocket from 'react-websocket';
import { connect } from 'react-redux';
import { 
  setDriveInfoData, setDriveData,
  setEmergencyStop, setRunSwitch, setDirectionSwitch, setDriveLever
} from './actions';

import { 
  setTbmsSoc1, setTbmsSoc2, setTbmsSoc3, setTbmsSoc4,
  setTbmsTemp1, setTbmsTemp2, setTbmsTemp3, setTbmsTemp4, 
  setInvVolt1, setInvVolt2, setInvVolt3, setInvVolt4,
  setInvTemp1, setInvTemp2, setInvTemp3, setInvTemp4,
  setCbmsSoc1, setCbmsVolt1,
  setSbmsSoc1, setSbmsSoc2,
  setSbmsVolt1, setSbmsVolt2,
  setTestSetupData
} from './actions/m2SetupActions';

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
import { withRouter } from 'react-router';

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
    // this.hostname = window.location.host;
    this.handleData = this.handleData.bind(this);
    this.changeNaviBackground = this.changeNaviBackground.bind(this);
    
    // M2SetupData ============================================
    this.testSetupData = {
      TBmsSoc1: 0,
      TBmsSoc2: 0,
      TBmsSoc3: 0,
      TBmsSoc4: 0,
      TBmsTemp1: 0,
      TBmsTemp2: 0,
      TBmsTemp3: 0,
      TBmsTemp4: 0,
      InvVolt1: 0,
      InvVolt2: 0,
      InvVolt3: 0,
      InvVolt4: 0,
      InvTemp1: 0,
      InvTemp2: 0,
      InvTemp3: 0,
      InvTemp4: 0,
      CBmsSoc1: 0,
      CBmsVolt1: 0,
      SBmsSoc1: 0,
      SBmsSoc2: 0,
      SBmsVolt1: 0,
      SBmsVolt2: 0
    };
    // ========================================================
    
 }
  componentDidMount() {
    // console.log('this.hostname',this.hostname);
    // this.timer = setInterval(this.thick, 1000);
  }
  handleData(data) {
    // console.log("socket handleData", data);
    const json = JSON.parse(data); 
    const TESTDRIVE = json.TESTDRIVE ? json.TESTDRIVE : null;
    const TESTSETUP = json.TESTSETUP ? json.TESTSETUP : null;
    const { dispatch } = this.props;
    const command = json.command ? json.command : null;
    
    console.log('TESTSETUP', json.TESTSETUP);

    if (command) {
      console.log('command:', command);
      switch(command.charAt(0)) {
        case 'S':
          dispatch( setRunSwitch(command.charAt(1)) );
          break;
        case 'D':
          dispatch( setDirectionSwitch(command.charAt(1)) );
          break;          
        case 'N':
          dispatch( setDriveLever(command.charAt(1)) );
          break;          
        case 'E':
          dispatch( setEmergencyStop(command.charAt(1)) );
          dispatch( setRunSwitch(command.charAt(1)) );
          break;          
      }
    }

    if (TESTSETUP) {
      
      // M2SetupData ============================================
      this.testSetupData = TESTSETUP;
      dispatch(setTestSetupData(this.testSetupData));
      // ========================================================
      /*
      this.setInvVoltData.inv1 = TESTSETUP.INV.Inv1; // getRandomFloat(-10,10);
      this.setInvVoltData.inv2 = TESTSETUP.INV.Inv2; // getRandomFloat(-5,5);
      this.setInvVoltData.inv3 = TESTSETUP.INV.Inv3; // getRandomFloat(0,3000);
      this.setInvVoltData.inv4 = TESTSETUP.INV.Inv4; // getRandomFloat(0,3000);
      this.setInvVoltData.invAvg = TESTSETUP.INV.InvAvg;
      dispatch( setInvVoltData(this.setInvVoltData) );

      this.setInvTempData.inv1 = TESTSETUP.INV.Temp1; // getRandomFloat(-10,10);
      this.setInvTempData.inv2 = TESTSETUP.INV.Temp2; // getRandomFloat(-5,5);
      this.setInvTempData.inv3 = TESTSETUP.INV.Temp3; // getRandomFloat(0,3000);
      this.setInvTempData.inv4 = TESTSETUP.INV.Temp4; // getRandomFloat(0,3000);
      this.setInvTempData.tempAvg = TESTSETUP.INV.TempAvg; // getRandomFloat(0,3000);
      dispatch( setInvTempData(this.setInvTempData) );

      this.setBcuMBogieData.b1 = TESTSETUP.BCU.MBogie1; // getRandomFloat(0,250);
      this.setBcuMBogieData.b2 = TESTSETUP.BCU.MBogie2; // getRandomFloat(0,10000);
      this.setBcuMBogieData.b3 = TESTSETUP.BCU.MBogie3; // getRandomFloat(-5,5);
      this.setBcuMBogieData.b4 = TESTSETUP.BCU.MBogie4; // getRandomFloat(0,2);
      this.setBcuMBogieData.mBogieAvg = TESTSETUP.BCU.MBogieAvg;
      dispatch( setBcuMBogieData(this.setBcuMBogieData) )

      this.setBcuTBogieData.b1 = TESTSETUP.BCU.TBogie1; // getRandomFloat(0,250);
      this.setBcuTBogieData.b2 = TESTSETUP.BCU.TBogie2; // getRandomFloat(0,10000);
      this.setBcuTBogieData.b3 = TESTSETUP.BCU.TBogie3; // getRandomFloat(-5,5);
      this.setBcuTBogieData.b4 = TESTSETUP.BCU.TBogie4; // getRandomFloat(0,2);
      this.setBcuTBogieData.tBogieAvg = TESTSETUP.BCU.TBogieAvg;
      dispatch( setBcuTBogieData(this.setBcuTBogieData) )
      */

      this.setDriveInfoData.notch = TESTSETUP.Drive.Notch // getRandomInt(-3,3);
      if (this.setDriveInfoData.speed.length >= 234) {
        this.setDriveInfoData.speed.shift();
      }
      this.setDriveInfoData.speed.push(TESTSETUP.Drive.Speed);
      this.setDriveInfoData.soc = TESTSETUP.Drive.Soc;
      this.setDriveInfoData.tract = TESTSETUP.Drive.Trat;
      this.setDriveInfoData.brake = TESTSETUP.Drive.Brake;
      dispatch( setDriveInfoData(this.setDriveInfoData) )
    }

    if (TESTDRIVE) {
      // console.log('TESTDRIVE', TESTDRIVE);
      this.setDriveData.tracBatt = TESTDRIVE.SignalLeft.TrcBatt; // getRandomFloat(300,900);
      this.setDriveData.contBatt = TESTDRIVE.SignalLeft.ContBatt; // getRandomFloat(10,40);
      this.setDriveData.maxInvTemp = TESTDRIVE.SignalLeft.MaxInvT; // getRandomFloat(0,100);
      this.setDriveData.maxMotorTemp = TESTDRIVE.SignalLeft.MaxMotT; // getRandomFloat(0,100);
      this.setDriveData.battTemp = TESTDRIVE.CircleLeft.BattTemp; //getRandomFloat(0,100);
      this.setDriveData.soc = TESTDRIVE.CircleLeft.Soc; // getRandomFloat(0,100);
      this.setDriveData.fwd = TESTDRIVE.CircleRight.FWD; // getRandomInt(-3,3);
      this.setDriveData.speed = TESTDRIVE.CircleRight.Speed; // getRandomFloat(0,60);
      this.setDriveData.position = TESTDRIVE.CircleRight.Position; // getRandomFloat(0,250);
      this.setDriveData.trat = TESTDRIVE.CircleRight.Trat;
      this.setDriveData.brake = TESTDRIVE.CircleRight.Brake;
      dispatch( setDriveData(this.setDriveData) )
    }
    
  }
  changeNaviBackground(src) {
    const navi = document.getElementById('naviMenu');
    if(navi) {
      navi.style.backgroundImage = `url(${src})`;
    }
  }
  sendCommandToDevice(command) {
    var ws = new WebSocket(`ws://${this.hostname}:8181/`);
    this.send = function (message, callback) {
      this.waitForConnection(function () {
          ws.send(message);
          ws.close();
          if (typeof callback !== 'undefined') {
              callback();
          }
      }, 100);
    };

    this.waitForConnection = function (callback, interval) {
      if (ws.readyState === 1) {
        callback();
      } else {
        var that = this;
        // optional: implement backoff for interval here
        setTimeout(function () {
            that.waitForConnection(callback, interval);
        }, interval);
      }
    };
    this.send(command);
  }
  render() {
    const ChangeTracker = withRouter(({match, location, history}) => {
      const backgroundSrc = location.pathname === '/m2/run' ?  '/img/navi-drive-bg.png' : '/img/navi-bg.png';
      this.changeNaviBackground(backgroundSrc);
      return false;
    })
    return (
      <Router>
        <div>
          <ChangeTracker />
          <Websocket
            url={`ws://${this.hostname}:8181/`}
            // url={`ws://${this.hostname}/h5sws`}
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
            id="naviMenu" 
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
