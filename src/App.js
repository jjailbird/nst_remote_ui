import Websocket from 'react-websocket';
import { connect } from 'react-redux';
/*
import {
} from './actions';
*/
import { 
  setDriveData,
  setEmergencyStop, setRunSwitch, setDriveLever,
  setTestSetupData, setPower ,setLight,
  setMileageTotal, setMileageTest,
  setPositionStart, setPositionStop, setRunCount, setLimitSpeedA, setLimitSpeedM, setShuntSpeed
  /*
  setInvCon1, setInvCon2, setTbms, setDcDc, setApc, setInvOut1, setInvOut2, setSbms, setSinv, setCamera,
  setPower ,setLight, setDriveMode, setRunDirection, setHydroBk, setRegenBk,
  , ,
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

import { 
        //getRandomInt, getRandomFloat, 
        getHostName, sendCommandToDevice 
} from './utils/functions';
//페이지 정리

import ViewM2Main from './ViewM2Main';
import ViewM2Run from './ViewM2Run';
import ViewM2Setup from './ViewM2Setup';
import ViewM2Spec from './ViewM2Spec';

class App extends Component {
  constructor(props) {
    super(props);
    this.hostname = getHostName();
  
    this.data = "{}";

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
    this.setDriveData.power = 0;
    this.setDriveData.light = 0;
    this.setDriveData.itc = 0;
    this.setDriveData.hsc = 0;

    this.testSetup = {};
    // T-BMS -----------------------------
    this.testSetup.TBmsSoc0 = 0;
    this.testSetup.TBmsSoc1 = 0;
    this.testSetup.TBmsSoc2 = 0;
    this.testSetup.TBmsSoc3 = 0;
    this.testSetup.TBmsSoc4 = 0;
    this.testSetup.TBmsTemp0 = 0;
    this.testSetup.TBmsTemp1 = 0;
    this.testSetup.TBmsTemp2 = 0;
    this.testSetup.TBmsTemp3 = 0;
    this.testSetup.TBmsTemp4 = 0;
    // -----------------------------------

    // INV -------------------------------
    this.testSetup.InvVolt0 = 0;
    this.testSetup.InvVolt1 = 0;
    this.testSetup.InvVolt2 = 0;
    this.testSetup.InvVolt3 = 0;
    this.testSetup.InvVolt4 = 0;
    this.testSetup.InvTemp0 = 0;
    this.testSetup.InvTemp1 = 0;
    this.testSetup.InvTemp2 = 0;
    this.testSetup.InvTemp3 = 0;
    this.testSetup.InvTemp4 = 0;
    // -----------------------------------

    // C-BMS -----------------------------
    this.testSetup.CBmsSoc1 = 0;
    this.testSetup.CBmsVolt1 = 0;
    // -----------------------------------

    // S-BMS -----------------------------
    this.testSetup.SBmsSoc0 = 0;
    this.testSetup.SBmsSoc1 = 0;
    this.testSetup.SBmsSoc2 = 0;
    this.testSetup.SBmsVolt0 = 0;
    this.testSetup.SBmsVolt1 = 0;
    this.testSetup.SBmsVolt2 = 0;
    // -----------------------------------
    
    // TEST SETUP Drive Data -------------
    this.testSetup.Notch = 0;
    this.testSetup.BatterySoc = 0;
    this.testSetup.Tract =0;
    this.testSetup.Brake = 0;
    this.testSetup.VehicleSpeed = 0;
    this.testSetup.VehiclePosition = 0;
    this.testSetup.VehicleSpeedArray = [];
    // -----------------------------------

    this.handleData = this.handleData.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.changeNaviBackground = this.changeNaviBackground.bind(this);
    // ========================================================
 }
  componentDidMount() {
    // console.log('timer start!');
    this.timer = setInterval(this.fetchData, 1000 / 30);

    const command = {
      'NST_test_label': `${localStorage.getItem('NST_test_label')}` 
    }
    sendCommandToDevice(JSON.stringify(command));
    // For test =========================================================
    /*
    const fetchUrl = `http://${this.hostname}${window.location.port == 80 ? '': ':' + window.location.port}/getTestLabel`;
    console.log('url:', fetchUrl);
    
    fetch(fetchUrl).then((res) => {
      console.log('fetch', res.text() );
    });
    fetch(fetchUrl).then(function(response) {
      return response.text().then(function(text) {
        console.log('text', text);
      });
    });
    */
    // ==================================================================
  }
  handleData(data) {
    this.data = data;
    const json = JSON.parse(data);
    const { dispatch } = this.props;
    
    if(json.GET_NST_test_label) {
      const command = {
        'NST_test_label': `${localStorage.getItem('NST_test_label')}` 
      }
      sendCommandToDevice(JSON.stringify(command));
    }

    if(json.TSO_010 !== undefined) {
      dispatch(setPositionStart(json.TSO_010));
    }
    if(json.TSO_011 !== undefined) {
      dispatch(setPositionStop(json.TSO_011));
    }
    if(json.TSO_012 !== undefined) {
      dispatch(setLimitSpeedA(json.TSO_012));
    }
    if(json.TSO_013 !== undefined) {
      dispatch(setRunCount(json.TSO_013));
    }
    if(json.TSO_014 !== undefined) {
      dispatch(setLimitSpeedM(json.TSO_014));
    }
    if(json.TSO_015 !== undefined) {
      dispatch(setShuntSpeed(json.TSO_015));
    }

  }
  fetchData() {
    
    const json = JSON.parse(this.data); 
    const { dispatch } = this.props;

    // TEST_RUN Drive Data ==================================================================
    if(json.TRI_001 !== undefined) {
      this.setDriveData.position = json.TRI_001;
    }

    if(json.TRI_003 !== undefined) {
      this.setDriveData.speed = json.TRI_003;
    }
    if(json.TRI_004 !== undefined) {
      this.setDriveData.trat = json.TRI_004;
    }
    if(json.TRI_005 !== undefined) {
      this.setDriveData.brake = json.TRI_005;
    }
    if(json.TRI_006 !== undefined) {
      this.setDriveData.battTemp = json.TRI_006;
    }
    if(json.TRI_007 !== undefined) {
      this.setDriveData.soc = json.TRI_007;
    }
    if(json.TRI_008 !== undefined) {
      this.setDriveData.tracBatt = json.TRI_008;
    }
    if(json.TRI_009 !== undefined) {
      this.setDriveData.contBatt = json.TRI_009;
    }
    if(json.TRI_010 !== undefined) {
      this.setDriveData.maxInvTemp = json.TRI_010;
    }
    if(json.TRI_011 !== undefined) {
      this.setDriveData.maxMotorTemp = json.TRI_011;
    }
    
    if(json.TRI_012 !== undefined) {
      this.setDriveData.power = json.TRI_012;
      dispatch( setPower(json.TRI_012 == 1 ? 'on' : 'off') );
    }
    if(json.TRI_013 !== undefined) {
      this.setDriveData.light = json.TRI_013;
      dispatch( setLight(json.TRI_013 == 1 ? 'on' : 'off') );
    }
    if(json.TRI_014 !== undefined) {
      this.setDriveData.itc = json.TRI_014;
    }
    if(json.TRI_015 !== undefined) {
      this.setDriveData.hsc = json.TRI_015;
    }

    if(json.TRI_001 !== undefined || json.TRI_003 !== undefined || json.TRI_004 !== undefined || json.TRI_005 !== undefined || json.TRI_006 !== undefined ||
       json.TRI_007 !== undefined || json.TRI_008 !== undefined || json.TRI_009 !== undefined || json.TRI_010 !== undefined || json.TRI_011 !== undefined ||
       json.TRI_012 !== undefined || json.TRI_013 !== undefined || json.TRI_014 !== undefined || json.TRI_015 !== undefined) {
      dispatch( setDriveData(this.setDriveData) );
    }
    // ======================================================================================
    
    // TEST SETUP =======================================================================================================================================
    // TEST SETUP Drive Data -------------
    if(json.TSI_001 !== undefined) {
      this.testSetup.Notch = json.TSI_001;
    }
    if(json.TSI_002 !== undefined) {
      this.testSetup.VehicleSpeed = json.TSI_002;
    }
    if(json.TSI_003 !== undefined) {
      this.testSetup.BatterySoc = json.TSI_003;
    }
    if(json.TSI_004 !== undefined) {
      this.testSetup.Tract = json.TSI_004;
    }
    if(json.TSI_005 !== undefined) {
      this.testSetup.Brake = json.TSI_005;
    }
    if(json.TSI_006 !== undefined) {
      this.testSetup.VehiclePosition = json.TSI_006;
    }

    if (this.testSetup.VehicleSpeedArray >= 234)
      this.testSetup.VehicleSpeedArray.shift();
    this.testSetup.VehicleSpeedArray.push(this.testSetup.VehicleSpeed);
    // -----------------------------------
    
    // T-BMS -----------------------------
    if(json.TSI_010 !== undefined) {
      this.testSetup.TBmsSoc0 = json.TSI_010;
    }
    if(json.TSI_011 !== undefined) {
      this.testSetup.TBmsSoc1 = json.TSI_011;
    }
    if(json.TSI_012 !== undefined) {
      this.testSetup.TBmsSoc2 = json.TSI_012;
    }
    if(json.TSI_013 !== undefined) {
      this.testSetup.TBmsSoc3 = json.TSI_013;
    }
    if(json.TSI_014 !== undefined) {
      this.testSetup.TBmsSoc4 = json.TSI_014;
    }

    if(json.TSI_015 !== undefined) {
      this.testSetup.TBmsTemp0 = json.TSI_015;
    }
    if(json.TSI_016 !== undefined) {
      this.testSetup.TBmsTemp1 = json.TSI_016;
    }
    if(json.TSI_017 !== undefined) {
      this.testSetup.TBmsTemp2 = json.TSI_017;
    }
    if(json.TSI_018 !== undefined) {
      this.testSetup.TBmsTemp3 = json.TSI_018;
    }
    if(json.TSI_019 !== undefined) {
      this.testSetup.TBmsTemp4 = json.TSI_019;
    }
    // -----------------------------------

    // INV -------------------------------
    if(json.TSI_020 !== undefined) {
      this.testSetup.InvVolt0 = json.TSI_020;
    }
    if(json.TSI_021 !== undefined) {
      this.testSetup.InvVolt1 = json.TSI_021;
    }
    if(json.TSI_022 !== undefined) {
      this.testSetup.InvVolt2 = json.TSI_022;
    }
    if(json.TSI_023 !== undefined) {
      this.testSetup.InvVolt3 = json.TSI_023;
    }
    if(json.TSI_024 !== undefined) {
      this.testSetup.InvVolt4 = json.TSI_024;
    }
    if(json.TSI_025 !== undefined) {
      this.testSetup.InvTemp0 = json.TSI_025;
    }
    if(json.TSI_026 !== undefined) {
      this.testSetup.InvTemp1 = json.TSI_026;
    }
    if(json.TSI_027 !== undefined) {
      this.testSetup.InvTemp2 = json.TSI_027;
    }
    if(json.TSI_028 !== undefined) {
      this.testSetup.InvTemp3 = json.TSI_028;
    }
    if(json.TSI_029 !== undefined) {
      this.testSetup.InvTemp4 = json.TSI_029;
    }
    // -----------------------------------

    // C-BMS -----------------------------
    if(json.TSI_030 !== undefined) {
      this.testSetup.CBmsSoc1 = json.TSI_030;
    }
    if(json.TSI_031 !== undefined) {
      this.testSetup.CBmsVolt1 = json.TSI_031;
    }
    // -----------------------------------

    // S-BMS -----------------------------
    if(json.TSI_032 !== undefined) {
      this.testSetup.SBmsSoc0 = json.TSI_032;
    }
    if(json.TSI_033 !== undefined) {
      this.testSetup.SBmsSoc1 = json.TSI_033;
    }
    if(json.TSI_034 !== undefined) {
      this.testSetup.SBmsSoc2 = json.TSI_034;
    }
    if(json.TSI_035 !== undefined) {
      this.testSetup.SBmsVolt0 = json.TSI_035;
    }
    if(json.TSI_036 !== undefined) {
      this.testSetup.SBmsVolt1 = json.TSI_036;
    }
    if(json.TSI_037 !== undefined) {
      this.testSetup.SBmsVolt2 = json.TSI_037;
    }
    // -----------------------------------
    if(json.TSI_001 !== undefined || json.TSI_002 !== undefined || json.TSI_003 !== undefined || json.TSI_004 !== undefined || json.TSI_005 !== undefined || json.TSI_006 !== undefined ||
       json.TSI_010 !== undefined || json.TSI_011 !== undefined || json.TSI_012 !== undefined || json.TSI_013 !== undefined || json.TSI_014 !== undefined ||
       json.TSI_015 !== undefined || json.TSI_016 !== undefined || json.TSI_017 !== undefined || json.TSI_018 !== undefined || json.TSI_019 !== undefined ||
       json.TSI_020 !== undefined || json.TSI_021 !== undefined || json.TSI_022 !== undefined || json.TSI_023 !== undefined || json.TSI_024 !== undefined ||
       json.TSI_025 !== undefined || json.TSI_026 !== undefined || json.TSI_027 !== undefined || json.TSI_028 !== undefined || json.TSI_029 !== undefined ||
       json.TSI_030 !== undefined || json.TSI_031 !== undefined || json.TSI_032 !== undefined || json.TSI_033 !== undefined || json.TSI_034 !== undefined ||  
       json.TSI_035 !== undefined || json.TSI_036 !== undefined || json.TSI_037 !== undefined) {
      dispatch( setTestSetupData(this.testSetup) );
    }
    // ==================================================================================================================================================

    // Notch --------------------------------------
    if(json.TRI_002 !== undefined) {
      dispatch( setDriveLever(json.TRI_002) );
    }
    // --------------------------------------------
    // Emergency Stop -----------------------------
    if(json.TSI_000 !== undefined) {
      dispatch( setEmergencyStop(json.TSI_000) );
      dispatch( setRunSwitch(json.TSI_000) );
    }

    // Running Mileage -----------------------------
    if(json.TSI_038 !== undefined) {
      dispatch( setMileageTotal(json.TSI_038) );
    }
    if(json.TSI_039 !== undefined) {
      dispatch( setMileageTest(json.TSI_039) );
    }    
    // ---------------------------------------------
   

  }
  changeNaviBackground(src) {
    const navi = document.getElementById('naviMenu');
    if(navi) {
      navi.style.backgroundImage = `url(${src})`;
    }
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
