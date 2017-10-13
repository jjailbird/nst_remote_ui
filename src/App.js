import Websocket from 'react-websocket';
import { connect } from 'react-redux';
import {
  setDriveData
} from './actions';

import { 
  setTestSetupData, setEmergencyStop, setRunSwitch, setDriveLever,
  /*
  setInvCon1, setInvCon2, setTbms, setDcDc, setApc, setInvOut1, setInvOut2, setSbms, setSinv, setCamera,
  setPower ,setLight, setDriveMode, setRunDirection, setHydroBk, setRegenBk,
  setPositionStart, setPositionStop,
  */
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
    
    this.setDriveData = {};
    this.setDriveData.tracBatt = 0; // getRandomFloat(300,900);
    this.setDriveData.contBatt = 0; // getRandomFloat(10,40);
    this.setDriveData.maxInvTemp = 0; // getRandomFloat(0,100);
    this.setDriveData.maxMotorTemp = 0; // getRandomFloat(0,100);
    this.setDriveData.battTemp = 0; //getRandomFloat(0,100);
    this.setDriveData.soc = 0; // getRandomFloat(0,100);
    this.setDriveData.fwd = 0; // getRandomInt(-3,3);
    this.setDriveData.speed = 0; // getRandomFloat(0,60);
    this.setDriveData.position = 0; // getRandomFloat(0,250);
    this.setDriveData.trat = 0;
    this.setDriveData.brake = 0;
    
    this.handleData = this.handleData.bind(this);
    this.changeNaviBackground = this.changeNaviBackground.bind(this);
 
    // M2SetupData ============================================
    this.testSetup = {
      data: {
        TBmsSoc1: 0, TBmsSoc2: 0, TBmsSoc3: 0, TBmsSoc4: 0,
        TBmsTemp1: 0, TBmsTemp2: 0, TBmsTemp3: 0, TBmsTemp4: 0,
        InvVolt1: 0, InvVolt2: 0, InvVolt3: 0, InvVolt4: 0,
        InvTemp1: 0, InvTemp2: 0, InvTemp3: 0, InvTemp4: 0,
        
        CBmsSoc1: 0, CBmsVolt1: 0,
        SBmsSoc1: 0, SBmsSoc2: 0,
        SBmsVolt1: 0, SBmsVolt2: 0,
  
        Notch: 0, BatterySoc: 0, Tract: 0, Brake: 0,
        VehicleSpeed: 0, VehiclePosition: 0
      },
      VehicleSpeedArray: []
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
    // console.log("socket handleData", json);
    const TESTDRIVE = json.TESTDRIVE ? json.TESTDRIVE : null;
    const TESTSETUP = json.TESTSETUP ? json.TESTSETUP : null;
    const { dispatch } = this.props;
    const command = json.command ? json.command : null;

    // TEST_RUN Drive Data ==================================================================
    //this.setDriveData.fwd = TESTDRIVE.CircleRight.FWD; // getRandomInt(-3,3);
    if(json.TRI_001 != undefined) {
      this.setDriveData.position = json.TRI_001;
    }
    if(json.TRI_003 != undefined) {
      this.setDriveData.speed = json.TRI_003;
    }
    if(json.TRI_004 != undefined) {
      this.setDriveData.trat = json.TRI_004;
    }
    if(json.TRI_005 != undefined) {
      this.setDriveData.brake = json.TRI_005;
    }
    if(json.TRI_006 != undefined) {
      this.setDriveData.battTemp = json.TRI_006;
    }
    if(json.TRI_007 != undefined) {
      this.setDriveData.soc = json.TRI_007;
    }
    if(json.TRI_008 != undefined) {
      this.setDriveData.tracBatt = json.TRI_008;
    }
    if(json.TRI_009 != undefined) {
      this.setDriveData.contBatt = json.TRI_009;
    }
    if(json.TRI_010 != undefined) {
      this.setDriveData.maxInvTemp = json.TRI_010;
    }
    if(json.TRI_011 != undefined) {
      this.setDriveData.maxMotorTemp = json.TRI_011;
    }
    if(json.TRI_001 != undefined || json.TRI_003 != undefined || json.TRI_004 != undefined || json.TRI_005 != undefined || json.TRI_006 != undefined ||
       json.TRI_007 != undefined || json.TRI_008 != undefined || json.TRI_009 != undefined || json.TRI_010 != undefined || json.TRI_011 != undefined) {
      dispatch( setDriveData(this.setDriveData) );
    }
    // ======================================================================================
    
    // Notch --------------------------------------
    if(json.TRI_002 != undefined) {
      dispatch( setDriveLever(json.TRI_002) );
      
    }
    // --------------------------------------------
    // Emergency Stop -----------------------------
    if(json.TSI_000 != undefined) {
      dispatch( setEmergencyStop(json.TSI_000) );
      dispatch( setRunSwitch(json.TSI_000) );
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
