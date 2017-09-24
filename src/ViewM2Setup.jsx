import React, { Component } from 'react';
import PanelControlButtonsLeft from './components/PanelControlButtonsLeft';
import PanelControlButtonsRight from './components/PanelControlButtonsRight';
import ControlSwitchButtonOnOff from './components/ControlSwitchButtonOnOff';
import ControlSwitchButtonOnOffPatch from './components/ControlSwitchButtonOnOffPatch';
import TestSetupPanelDataContainer from './components/TestSetupPanelDataContainer';
import TestSetupPanelDataContainer1 from './components/TestSetupPanelDataContainer1';
import TestSetupPanelDataContainerDonutChart from './components/TestSetupPanelDataContainerDonutChart';
import TestSetupGaugeBar from './components/TestSetupGaugeBar';
import DynamicLineChart2 from './components/DynamicLineChart2';
import RailroadTrailStartStop from './components/RailroadTrailStartStop';

import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/src/Keyboard.css';
import Keyboard from 'react-virtual-keyboard';

import { setRunSwitch, setDirectionSwitch, setDriveMode, setEmergencyStop
  ,setPower ,setLight, setInvCon1, setInvCon2, setTbms, setDcDc, setApc, setInvOut1, setInvOut2
  ,setSbms ,setSinv, setCamera, setHydroBk, setRegenBk, setPositionStart, setPositionStop
  ,setTestSetupData
} from './actions/m2SetupActions';

import { connect } from 'react-redux';

class ViewM2Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclePositionStart: 0,
      vehiclePositionStop: 0
    };
    this.NST_test_label = localStorage.getItem("NST_test_label") ? localStorage.getItem("NST_test_label") : 'NST 01';
    this.hostname = window.location.hostname;
    this.railLength = 250;
    
    this.onVehiclePositionStartChange = this.onVehiclePositionStartChange.bind(this);
    this.onVehiclePositionStopChange = this.onVehiclePositionStopChange.bind(this);
    // #1
    this.onPowerChange = this.onPowerChange.bind(this);
    // s02
    this.onLightChange = this.onLightChange.bind(this);
    // s03 -1
    this.onInvCon1Change = this.onInvCon1Change.bind(this);
    // s03 -2
    this.onInvCon2Change = this.onInvCon2Change.bind(this);
    // s04
    this.onTbmsChange = this.onTbmsChange.bind(this);
    // s05
    this.onDcDcChange = this.onDcDcChange.bind(this);
    // s06
    this.onApcChange = this.onApcChange.bind(this);
    // s07-1
    this.onInvOut1Change = this.onInvOut1Change.bind(this);
    // s07-2
    this.onInvOut2Change = this.onInvOut2Change.bind(this);
    // s08
    this.onSbmsChange = this.onSbmsChange.bind(this);
    // s09
    this.onSinvChange = this.onSinvChange.bind(this);
    // s10
    this.onCameraChange = this.onCameraChange.bind(this);
    // s11
    this.onDriveModeChanged = this.onDriveModeChanged.bind(this);
    // s12
    this.onDirectionSwitchClick = this.onDirectionSwitchClick.bind(this);
    // s13?

    // s14
    this.onRunSwitchClick = this.onRunSwitchClick.bind(this);
    // s15-1
    this.onHydroBkChange = this.onHydroBkChange.bind(this);
    // s15-2
    this.onRegenBkChange = this.onRegenBkChange.bind(this); 
    // this.sendMessageToDevice = this.sendMessageToDevice.bind(this);

    this.setCurrentPositionStart = this.setCurrentPositionStart.bind(this);
    this.setCurrentPositionStop = this.setCurrentPositionStop.bind(this);
  }
  onVehiclePositionStartChange(value) {
    let start = value.replace('m', '');
    start = start.replace(' ', '');
    start = start.trim();

    const { positionStop } = this.props;
    if(start >= 0 && start < this.railLength) {
      this.setState({
        vehiclePositionStart: start
      });
    }

  }
  onVehiclePositionStopChange(value) {
    let stop = value.replace('m', '');
    stop = stop.replace(' ', '');
    stop = stop.trim();

    const { positionStar } = this.props;
    if(stop >= 0 && stop <= this.railLength) {
      this.setState({
        vehiclePositionStop: stop
      });
    }
  }
  setCurrentPositionStart() {
    const { dispatch } = this.props;
    alert(this.state.vehiclePositionStart);
    dispatch(setPositionStart(this.state.vehiclePositionStart));
  }
  setCurrentPositionStop() {
    const { dispatch } = this.props;
    alert(this.state.vehiclePositionStop);
    dispatch(setPositionStop(this.state.vehiclePositionStop));
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
  // sequence start =======================================================
  // s01
  onPowerChange(value) {
    //alert('s01:' + value);
    const { dispatch } = this.props;
    dispatch( setPower(value) );
  }
  // s02
  onLightChange(value) {
    const { power, dispatch } = this.props;
    //alert('power:' + power);
    //alert('s02:' + value);
    dispatch( setLight(value) );
  }
  // s03 -1
  onInvCon1Change(value) {
    //alert('s03-1:' + value);
    const { power, dispatch } = this.props;
    if(power == 'off' && value == 'on') {
      alert('You must turn on the POWER');
      return false;
    } else {
      dispatch( setInvCon1(value) );
    }
  }
  // s03 -2
  onInvCon2Change(value) {
    //alert('s03-2:' + value);
    const { invCon1, dispatch } = this.props;
    if(invCon1 == 'off' && value == 'on') {
      alert('You must turn on the INV CON1');
      return false;
    } else {
      dispatch( setInvCon2(value) );
    }
  }
  // s04
  onTbmsChange(value) {
    //alert('s04:' + value);
    const { invCon2, dispatch } = this.props;
    if(invCon2 == 'off' && value == 'on') {
      alert('You must turn on the INV CON2');
      return false;
    } else {
      dispatch( setTbms(value) );
    }
  }
  // s05
  onDcDcChange(value) {
    //alert('s05:' + value);
    const { tBms, dispatch } = this.props;
    if(tBms == 'off' && value == 'on') {
      alert('You must turn on the T-BMS');
      return false;
    } else {
      dispatch( setDcDc(value) );
    }
  }
  // s06
  onApcChange(value) {
    //alert('s06:' + value);
    const { dcDc, dispatch } = this.props;
    if(dcDc == 'off' && value == 'on') {
      alert('You must turn on the DC/DC');
      return false;
    } else {
      dispatch( setApc(value) );
    }
  }
  // s07-1
  onInvOut1Change(value) {
    //alert('s07-1:' + value);
    const { apc, dispatch } = this.props;
    if(apc == 'off' && value == 'on') {
      alert('You must turn on the APC');
      return false;
    } else {
      dispatch( setInvOut1(value) );
    }
  }
  // s07-2
  onInvOut2Change(value) {
    //alert('s07-2:' + value);
    const { invOut1, dispatch } = this.props;
    if(invOut1 == 'off' && value == 'on') {
      alert('You must turn on the INV OUT1');
      return false;
    } else {
      dispatch( setInvOut2(value) );
    }
  }
  // s08
  onSbmsChange(value) {
    //alert('s08:' + value);
    const { invOut2, dispatch } = this.props;
    if(invOut2 == 'off' && value == 'on') {
      alert('You must turn on the INV OUT2');
      return false;
    } else {
      dispatch( setSbms(value) );
    }
  }
  // s09
  onSinvChange(value) {
    //alert('s09:' + value);
    const { sBms, dispatch } = this.props;
    if(sBms == 'off' && value == 'on') {
      alert('You must turn on the S-BMS');
      return false;
    } else {
      dispatch( setSinv(value) );
    }
  }
  // s10
  onCameraChange(value) {
    //alert('s10:' + value);
    const { sInv, dispatch } = this.props;
    if(sInv == 'off' && value == 'on') {
      alert('You must turn on the S-INV');
      return false;
    } else {
      dispatch( setCamera(value) );
    }
  }
  // s11
  onDriveModeChanged(value) {
    //alert('s11:' + value);
    const { dispatch } = this.props;
    dispatch( setDriveMode(value) );
  }
  // s12
  onDirectionSwitchClick(value) {
    //alert('s12:' + value);
    
    const { dispatch } = this.props;
    const command = value === "on" ? "d1" : "d0";
    dispatch( setDirectionSwitch(command.charAt(1)) );
    this.sendCommandToDevice(command);
  }
  // s13 제동 선택?

  // s14
  onRunSwitchClick(value) {
    //alert('s14:' + value);
    const { dispatch } = this.props;
    const command = value === "on" ? "s1" : "s0";
    dispatch( setRunSwitch(command.charAt(1)) );
    this.sendCommandToDevice(command);
  }

  // s15-1
  onHydroBkChange(value) {
    // alert('s15-1:' + value);
    const { dispatch } = this.props;
    dispatch( setHydroBk(value) );
  }
  // s15-2
  onRegenBkChange(value) {
    // alert('s15-2:' + value);
    const { dispatch } = this.props;
    dispatch( setRegenBk(value) );
  }
  componentDidMount() {
    // alert(this.NST_test_label);
  }
  render() {
    const { 
      bmsSocData,
      bmsTempData,
      invVoltData,
      invTempData,
      bcuMBogieData,
      bcuMTogieData,
      driveInfoData,
      driveData,
      // motorControlData,
      runSwitch,
      directionSwitch,
      driveMode,
      emergencyStop,
      // sequence
      power, light, invCon1, invCon2, tBms, dcDc, apc,
      invOut1, invOut2, sBms, sInv, camera, hydroBk, regenBk
      ,positionStart, positionStop
      ,testSetup, dispatch
    } = this.props;
    const runSwitchValue = runSwitch == 0 ? "off" : "on";
    const directionSwitchValue = directionSwitch == 0 ? "off" : "on";
    
    console.log('testSetup', testSetup);
    // console.log('runSwitch:', runSwitchValue);
    let sDriveModeStatus = '';
    let sDriveModeStatusColor = '#fff673';
    switch(driveMode) {
      case 'ST':
        sDriveModeStatus = 'SHUNT READY';
        break;
      case 'Manual':
        sDriveModeStatus = 'MANUAL READY';
        break;
      case 'Auto':
        sDriveModeStatus = 'AUTO READY';
        break;
    }
    //console.log('emergencyStop:', emergencyStop);
    if (runSwitchValue === "on") {
      sDriveModeStatus = sDriveModeStatus.replace('READY', 'ACTIVE');
      sDriveModeStatusColor = 'red';
      // dispatch(setEmergencyStop(0));
    }

    if(emergencyStop == 0) {
      sDriveModeStatus = 'EMERGENCY STOP!';
      sDriveModeStatusColor = 'red';
    }
    return (
        <div className="contBox">
          <div className="headArea">
            <div className="headLeft pull-left">
              <img src="/img/titlev2-setup.png" alt="titlev2-setup"/>
              <span id="pageHiddenTitle" style={{display: 'none'}}>TEST_SETUP_PANEL</span>
            </div>
            <div className="headRight pull-right">                
              hyundai rotem company
            </div>
          </div>
          <div className="conBoxArea textSetupPanelContainer">
            <div
              className="textSetupPanelContainer-child"
              style={{
                float: 'left',
                width: '604px',
                minHeight: '815px',
              }}
            >
              {/*
              <TestSetupPanelDataContainer dataLeft={bmsSocData.data} dataRight={bmsTempData.data} compTitle="BMS" nameLeft="BMS SOC" nameRight="BMS Temp" unitLeft="%" unitRight="℃" cNameLeft="SOC" cNameRight="TEMP" barTitle="PACK #" CompColor="#3581c9"/>
              */}
              {console.log('testSetup', testSetup)}
              <TestSetupPanelDataContainer
                compTitle="T-BMS" nameLeft="CELL SOC" nameRight="CELL TEMP" unitLeft="%" unitRight="℃" cNameLeft="SOC" cNameRight="TEMP" barTitle="PACK #" CompColor="#3581c9"
                dataLeft={{data1: testSetup.data.TBmsSoc1, data2: testSetup.data.TBmsSoc2, data3: testSetup.data.TBmsSoc3, data4: testSetup.data.TBmsSoc4}}
                // dataLeft={bmsTempData.data}
                dataRight={bmsTempData.data}
              /> 
              <TestSetupPanelDataContainer dataLeft={invVoltData.data} dataRight={invTempData.data} compTitle="INV" nameLeft="" nameRight="" unitLeft="V" unitRight="℃" cNameLeft="OUT VOLT" cNameRight="TEMP" barTitle="INV #" CompColor="#3581c9"/>
              {/*<TestSetupPanelDataContainer dataLeft={bcuMBogieData.data} dataRight={bcuMTogieData.data} compTitle="BCU" nameLeft="" nameRight="" unitLeft="Kpa" unitRight="Kpa" cNameLeft="M Bogie" cNameRight="T Bogie" barTitle="Caliper #" CompColor="#6f9450"/>*/}
              <TestSetupPanelDataContainer1
                dataLeft={bcuMBogieData.data}
                dataRight={bcuMTogieData.data}
                compTitle1="C-BMS"
                compTitle2="S-BMS"
                nameLeft="" nameRight="" 
                cNameLeft1="SOC"
                cNameLeft2="OUT VOLT"
                cNameRight1="SOC"
                cNameRight2="OUT VOLT" 
                unitLeft1="%" 
                unitLeft2="V"
                unitRight1="%" 
                unitRight2="V" 
                barTitle="PACK #" 
                CompColor="#6f9450"/>
              <PanelControlButtonsLeft />
            </div>
            <div
              className="textSetupPanelContainer-child"
              style={{
                float: 'left',
                width: '604px',
                height: '815px',
                margin: '0 16px'
              }}
            >
              <div className="testSetupPanelvehicleBox">
                <div className="pull-left tepvBox">
                  <div className="testPanelBox tepvBoxInner boxVehicleStatus">
                    <span className="testPanelBoxTitleFull">
                      VEHICLE STATUS
                    </span>
                    <div className="pull-left tepvBoxInnerImg">
                      <img src="/img/vehicle_status.png" alt="vehicle_status.png"/>
                    </div>
                    <div className="pull-right tepvBoxInnerBtns">
                      <ControlSwitchButtonOnOff
                        // title="signal"
                        title="INV CON1"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={invCon1}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onInvCon1Change}
                      />
                      <ControlSwitchButtonOnOff
                        title="INV CON2"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={invCon2}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onInvCon2Change}
                      />
                      <ControlSwitchButtonOnOff
                        title="T-BMS"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={tBms}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onTbmsChange}
                      />
                      <ControlSwitchButtonOnOff
                        title="DC/DC"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={dcDc}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onDcDcChange}
                      />
                      <ControlSwitchButtonOnOff
                        title="APC"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={apc}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onApcChange}
                      />
                      <ControlSwitchButtonOnOff
                        title="INV OUT1"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={invOut1}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onInvOut1Change}
                      />
                      <ControlSwitchButtonOnOff
                        title="INV OUT2"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={invOut2}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onInvOut2Change}
                      />
                      <ControlSwitchButtonOnOff
                        title="S-BMS"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={sBms}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onSbmsChange}
                      />
                      <ControlSwitchButtonOnOff
                        title="S-INV"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={sInv}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onSinvChange}
                      />
                      <ControlSwitchButtonOnOff
                        title="camera"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value={camera}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onCameraChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="pull-right tepvBox">
                  <div className="testPanelBox tepvBoxInner tepvDataBox">
                    <span className="testPanelBoxTitleFull">
                      DRIVE NOTCH
                    </span>
                    <TestSetupPanelDataContainerDonutChart 
                      data={driveInfoData.data.notch} 
                      unit="DRIVE" 
                      name="notch" 
                      strokeColor="#b23d41" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="90" 
                      donutStrokeWidth="9"
                      valueFontSize="35px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="testPanelBox tepvBoxInner tepvDataBox">
                    <span className="testPanelBoxTitleFull">
                      VEHICLE SPEED
                    </span>
                    <TestSetupPanelDataContainerDonutChart 
                      data={driveInfoData.data.speed} 
                      unit="km/h" 
                      name="speed" 
                      strokeColor="#b23d41" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="90" 
                      donutStrokeWidth="9"
                      valueFontSize="35px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="testPanelBox tepvBoxInner tepvDataBox">
                    <span className="testPanelBoxTitleFull">
                      BATTERY SOC
                    </span>
                    <TestSetupPanelDataContainerDonutChart 
                      data={driveInfoData.data.soc} 
                      unit="%" 
                      name="soc" 
                      strokeColor="#b23d41" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="90" 
                      donutStrokeWidth="9"
                      valueFontSize="35px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="tractBrakeBox">

                    <div className="boxTract pull-left">
                      <div className="testPanelBox boxTractInner">
                        <span className="testPanelBoxTitleFull">
                          TRACT
                        </span>
                        <TestSetupGaugeBar data={driveInfoData.data.tract} name="tract" unit="" fillColor="#949a3f"/>
                      </div>
                    </div>

                    <div className="boxBrake pull-right">
                      <div className="testPanelBox boxTractInner">
                        <span className="testPanelBoxTitleFull">
                          BRAKE
                        </span>
                        <TestSetupGaugeBar data={driveInfoData.data.brake} name="brake" unit="" fillColor="#949a3f"/>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div
              className="textSetupPanelContainer-child"
              style={{
                float: 'left',
                width: '604px',
                height: '815px'
              }}
            >
              <div
                className="tspcRightButtonBox"
                style={{
                  width: '100%',
                  minHeight: '200px',
                  overflow: 'hidden'
                }}
              >
                <div
                className="tspcRightButtonBoxChild"
                  style={{
                    width: '292px',
                    height: '534px',
                    float: 'left',
                    marginBottom: '16px'
                  }}
                >
                  <div
                    /*우측 버튼영역 Power light 부모요소*/
                    style={{
                      overflow: 'hidden',
                      marginBottom: '16px'
                    }}
                  >
                    <div
                      className="pull-left"
                      style={{
                        height: '100px',
                        width: '146px',
                        padding: '59px 22px 45px',
                        background: 'rgba(0,0,0,0.3)',
                        position: 'relative',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <span className="testPanelBoxTitleFull">
                        POWER
                      </span>
                      <ControlSwitchButtonOnOff
                        title=""
                        ref="powerButton"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 0px" 
                        value={power}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onPowerChange}
                      />
                    </div>
                    <div
                      className="pull-right"
                      style={{
                        height: '100px',
                        width: '146px',
                        padding: '59px 22px 45px',
                        background: 'rgba(0,0,0,0.3)',
                        position: 'relative',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <span className="testPanelBoxTitleFull">
                        LIGHT
                      </span>
                      <ControlSwitchButtonOnOff
                        id="btnLight"
                        title=""
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 0px" 
                        value={light}
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                        onChange={this.onLightChange}
                      />
                    </div>
                  </div>{/*우측 버튼영역 Power light 부모요소 END*/}
                  <div
                    style={{
                        padding: '61px 22px 12px',
                        border: '1px solid rgba(255,255,255,0.3)',
                        position: 'relative',
                        background: 'rgba(0,0,0,0.3)'
                    }}
                  >
                    <span className="testPanelBoxTitleFull">
                      DRIVE SETTING
                    </span>
                    <ControlSwitchButtonOnOffPatch
                      title=""
                      onBgColor="#919138" 
                      offBgColor="#848695" 
                      onTextColor="#000"  
                      offTextColor="#000" 
                      padding="7px 0px" 
                      value={driveMode}
                      onChange={this.onDriveModeChanged}
                      width='33.33%'
                      buttons={[
                        { idx: 1, title: 'ST', value: 'ST' }, 
                        { idx: 2, title: 'Manual', value: 'Manual' }, 
                        { idx: 3, title: 'Auto', value: 'Auto' }
                      ]}
                    />
                  </div>
                  <div
                    style={{
                        padding: '61px 22px 12px',
                        border: '1px solid rgba(255,255,255,0.3)',
                        marginBottom: '17px',
                        position: 'relative',
                        background: 'rgba(0,0,0,0.3)'
                    }}
                  >
                    <span className="testPanelBoxTitleFull">
                      RUN DIRECTION
                    </span>
                    <ControlSwitchButtonOnOffPatch
                      title=""
                      onBgColor="rgba(21,163,80,0.5)" 
                      offBgColor="rgba(201,53,53,0.5)" 
                      onTextColor="#fff"  
                      offTextColor="#fff" 
                      padding="7px 0px" 
                      value={directionSwitchValue}
                      width='50%'
                      onChange={this.onDirectionSwitchClick}
                      buttons={[
                        { idx: 1, title: 'Foward', value: 'on' }, 
                        { idx: 2, title: 'Reverse', value: 'off' }
                      ]}
                    />
                  </div>                  <div 
                    style={{
                      border: '1px solid rgba(255,255,255,0.3)',
                      padding: '8px',
                      width: '100%',
                      background: 'rgba(53,129,201,0.3)',
                      overflow: 'hidden'
                    }}
                  >
                    {/*----------button Area-----------*/}
                    <div
                      style={{
                        overflow: 'hidden',
                        height: '48px'
                      }}
                    >
                      <div
                        style={{
                          float: 'left',
                          width: '120px',
                          padding: '14px 8px',
                          color: '#fff',

                        }}
                      >
                      RUN SWITCH
                      </div>
                      <div
                        style={{
                          float: 'right',
                          width: '150px',
                          padding: '8px 5px'
                        }}
                      >
                        <ControlSwitchButtonOnOffPatch
                          title=""
                          onBgColor="rgba(21,163,80,0.5)" 
                          offBgColor="rgba(201,53,53,0.5)" 
                          onTextColor="#fff"  
                          offTextColor="#fff" 
                          padding="7px 0px" 
                          value={runSwitchValue}
                          width='50%'
                          onChange={this.onRunSwitchClick}
                          buttons={[
                            { idx: 1, title: 'START', value: 'on' }, 
                            { idx: 2, title: 'STOP', value: 'off' }
                          ]}
                        />
                      </div>
                    </div>
                    {/*----------button Area END-----------*/}
                  </div>
                  <div
                    style={{
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderTop: 'none',
                      padding: '8px',
                      width: '100%',
                      background: 'rgba(0,0,0,0.3)',
                      overflow: 'hidden',
                      marginBottom: '16px'
                    }}
                  >
                    {/*----------button Area-----------*/}
                    <div
                      style={{
                        overflow: 'hidden',
                        height: '48px'
                      }}
                    >
                      <div
                        style={{
                          float: 'left',
                          width: '120px',
                          padding: '14px 8px',
                          color: '#fff',

                        }}
                      >
                      {/*BMS SWITCH*/}
                      Hydro Bk
                      </div>
                      <div
                        style={{
                          float: 'right',
                          width: '150px',
                          padding: '8px 5px'
                        }}
                      >
                        <ControlSwitchButtonOnOff
                          title=""
                          onBgColor="rgba(21,163,80,0.5)" 
                          offBgColor="rgba(201,53,53,0.5)" 
                          onTextColor="#fff"  
                          offTextColor="#fff" 
                          padding="7px 0px" 
                          value="off"
                          width='50%'
                          buttons={[
                            { idx: 1, title: 'START', value: 'on' }, 
                            { idx: 2, title: 'STOP', value: 'off' }
                          ]}
                          onChange={this.onHydroBkChange}
                        />
                      </div>
                    </div>
                    {/*----------button Area END-----------*/}
                    {/*----------button Area-----------*/}
                    <div
                      style={{
                        overflow: 'hidden',
                        height: '48px'
                      }}
                    >
                      <div
                        style={{
                          float: 'left',
                          width: '120px',
                          padding: '14px 8px',
                          color: '#fff',

                        }}
                      >
                      {/*APC RUN*/}
                      Regen Bk
                      </div>
                      <div
                        style={{
                          float: 'right',
                          width: '150px',
                          padding: '8px 5px'
                        }}
                      >
                        <ControlSwitchButtonOnOff
                          title=""
                          onBgColor="rgba(21,163,80,0.5)" 
                          offBgColor="rgba(201,53,53,0.5)" 
                          onTextColor="#fff"  
                          offTextColor="#fff" 
                          padding="7px 0px" 
                          value="off"
                          width='50%'
                          buttons={[
                            { idx: 1, title: 'START', value: 'on' }, 
                            { idx: 2, title: 'STOP', value: 'off' }
                          ]}
                          onChange={this.onRegenBkChange}
                        />
                      </div>
                    </div>
                    {/*----------button Area END-----------*/}
                  </div>
                </div>
                <div
                  className="tspcRightButtonBoxChild"
                  style={{
                    background: 'rgba(0,0,0,0)',
                    width: '292px',
                    height: '534px',
                    float: 'right',
                    marginBottom: '14px'
                  }}
                > 
                  <div
                    style={{
                        border: '1px solid rgba(255,255,255,0.3)',
                        width: '100%',
                        height: '196px',
                        background: 'rgba(0,0,0,0.3)',
                        marginBottom: '14px'
                    }}
                  >
                  <DynamicLineChart2 data={driveInfoData.data.speed} unit="km/h" name="Vehicle Speed"/>
                  </div>
                  <div
                    style={{
                      border: '1px solid rgba(255,255,255,0.3)',
                      padding: '8px',
                      width: '100%',
                      background: 'rgba(0,0,0,0.3)',
                      overflow: 'hidden',
                      height: '181px',
                      marginBottom: '16px'
                    }}
                  >
                    <div><span>{positionStart} {positionStop}</span></div>
                    <RailroadTrailStartStop value={driveData.data.position} name="VEHICLE POSITION" unit="m" start={positionStart} stop={positionStop} />
                  </div>
                  <div
                    style={{
                      border: '1px solid rgba(255,255,255,0.3)',
                      width: '100%',
                      background: 'rgba(53,129,201,0.3)',
                      overflow: 'hidden',
                      height: '127px',
                      textAlign: 'center',
                      textTransform: 'uppercase'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        fontSize: '21px',
                        fontWeight: 'bold',
                        color: '#fff',
                        padding: '12px',
                        borderBottom: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >Drive mode Status</div>
                    <div
                      style={{
                        width: '100%',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        color: sDriveModeStatusColor, // '#fff673',
                        padding: '15px'
                      }}
                    >
                      {sDriveModeStatus}
                    </div>
                  </div>
                </div>
                <div
                  className="tspcButtonBoxChildBoth"
                  style={{
                    border: '1px solid rgba(255,255,255,0.3)',
                    clear: 'both',
                    width: '100%',
                    height: '264px',
                    background: 'rgba(0,0,0,0.5)'
                  }}
                >
                  <div
                    style={{
                      padding: '9px',
                      fontSize: '23px',
                      color: '#fff',
                      textAlign: 'center',
                      borderBottom: '1px solid rgba(255,255,255,0.3)',
                      fontWeight: 'bold'
                    }}
                  >RUN Auto Drive Setup</div>
                  <div
                    className=""
                    style={{
                      overflow: 'hidden',
                      borderBottom: '1px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    <div
                      className="inputLeftGroup"
                      style={{
                        float: 'left',
                        width: '312px',
                        marginBottom: '4px'
                      }}
                    >
                      <div
                        className="inputGroup"
                        style={{
                          overflow: 'hidden',
                          marginTop: '4px'
                        }}
                      >
                        <div
                          style={{
                            float: 'left',
                            fontSize: '16px',
                            color: '#fff',
                            textTransform: 'uppercase',
                            width: '150px',
                            padding: '7px 0px 7px 9px',
                            textAlign: 'left'
                          }}
                        >Start Position</div>
                        <KeyboardedInput
                          enabled
                          className="input-vehicel-position"
                          type="text"
                          defaultKeyboard="us"
                          value={`${this.state.vehiclePositionStart} m`}
                          onChange={this.onVehiclePositionStartChange}
                        /> 
                        <input
                          value="SET"
                          onClick={this.setCurrentPositionStart}
                          style={{
                            float: 'left',
                            width: '70px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            background: 'rgba(132,134,149,1)',
                            color: '#000',
                            padding: '8px 5px',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                          }}
                        />
                       
                      </div>{/*inputGroup END*/}
                      <div
                        className="inputGroup"
                        style={{
                          overflow: 'hidden',
                          marginTop: '4px'
                        }}
                      >
                        <div
                          style={{
                            float: 'left',
                            fontSize: '16px',
                            color: '#fff',
                            textTransform: 'uppercase',
                            width: '150px',
                            padding: '7px 0px 7px 9px',
                            textAlign: 'left'
                          }}
                        >Stop Position</div>
                        <KeyboardedInput
                          enabled
                          className="input-vehicel-position"
                          type="text"
                          defaultKeyboard="us"
                          value={`${this.state.vehiclePositionStop} m`}
                          onChange={this.onVehiclePositionStopChange}
                        /> 
                        <input
                          type="button"
                          value="SET"
                          onClick={this.setCurrentPositionStop}
                          style={{
                            float: 'left',
                            width: '70px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            background: 'rgba(132,134,149,1)',
                            color: '#000',
                            padding: '8px 5px',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                          }}
                        />
                      </div>{/*inputGroup END*/}
                    </div>{/*inputLeftGroup END*/}
                    <div
                    className="inputRightGroup"
                      style={{
                        float: 'right',
                        width: '280px',
                        marginBottom: '4px'
                      }}
                    >
                      <div
                        className="inputGroup"
                        style={{
                          overflow: 'hidden',
                          marginTop: '4px'
                        }}
                      >
                        <div
                          style={{
                            float: 'left',
                            fontSize: '16px',
                            color: '#fff',
                            textTransform: 'uppercase',
                            width: '130px',
                            padding: '7px 0px 7px 9px',
                            textAlign: 'left'
                          }}
                        >Limit Speed</div>
                        <input
                          value="15 km/h"
                          style={{
                            float: 'left',
                            width: '115px',
                            background: 'none',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: '#fff',
                            padding: '7px 5px',
                            textAlign: 'center',
                            fontSize: '15px',
                            marginRight: '5px'
                          }}
                        />
                      </div>{/*inputGroup END*/}
                      <div
                        className="inputGroup"
                        style={{
                          overflow: 'hidden',
                          marginTop: '4px'
                        }}
                      >
                        <div
                          style={{
                            float: 'left',
                            fontSize: '16px',
                            color: '#fff',
                            textTransform: 'uppercase',
                            width: '130px',
                            padding: '7px 0px 7px 9px',
                            textAlign: 'left'
                          }}
                        >Run Count</div>
                        <input
                          value="0"
                          style={{
                            float: 'left',
                            width: '115px',
                            background: 'none',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: '#fff',
                            padding: '7px 5px',
                            textAlign: 'center',
                            fontSize: '15px',
                            marginRight: '5px'
                          }}
                        />
                      </div>{/*inputGroup END*/}
                    </div>{/*inputLeftGroup END*/}
                  </div>
                  <div
                    style={{
                      overflow: 'hidden',
                      borderBottom: '1px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    <div
                      style={{
                        float: 'left',
                        width:'50%',
                        textAlign: 'center',
                        padding: '12px',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '19px',
                        borderRight: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >Manual Drive Setup</div>
                    <div
                      style={{
                        float: 'right',
                        width:'49%',
                        textAlign: 'center',
                        padding: '12px',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '19px'
                      }}
                    >Shunt Drive Setup</div>
                  </div>
                  <div
                    style={{
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        float: 'left',
                        width:'50%',
                        textAlign: 'center',
                        padding: '0px 12px',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '19px'
                      }}
                    >
                      <div
                        className="inputGroup"
                        style={{
                          overflow: 'hidden',
                          marginTop: '4px'
                        }}
                      >
                        <div
                          style={{
                            float: 'left',
                            fontSize: '16px',
                            color: '#fff',
                            textTransform: 'uppercase',
                            width: '130px',
                            padding: '7px 0px 7px 9px',
                            textAlign: 'left'
                          }}
                        >Limit speed</div>
                        <input
                          value="0"
                          style={{
                            float: 'left',
                            width: '115px',
                            background: 'none',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: '#fff',
                            padding: '7px 5px',
                            textAlign: 'center',
                            fontSize: '15px',
                            marginRight: '5px'
                          }}
                        />
                      </div>{/*inputGroup END*/}
                    </div>
                    <div
                      style={{
                        float: 'right',
                        width:'49%',
                        textAlign: 'center',
                        padding: '0px 12px',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '19px'
                      }}
                    >
                      <div
                        className="inputGroup"
                        style={{
                          overflow: 'hidden',
                          marginTop: '4px'
                        }}
                      >
                        <div
                          style={{
                            float: 'left',
                            fontSize: '16px',
                            color: '#fff',
                            textTransform: 'uppercase',
                            width: '130px',
                            padding: '7px 0px 7px 9px',
                            textAlign: 'left'
                          }}
                        >Shunt Speed</div>
                        <input
                          value="0"
                          style={{
                            float: 'left',
                            width: '115px',
                            background: 'none',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: '#fff',
                            padding: '7px 5px',
                            textAlign: 'center',
                            fontSize: '15px',
                            marginRight: '5px'
                          }}
                        />
                      </div>{/*inputGroup END*/}
                      <div
                        style={{
                          overflow: 'hidden',
                          marginTop: '2px',
                          paddingRight: '17px'
                        }}
                      >
                        <input
                          type="button"
                          value="Default"
                          style={{
                            padding: '5px 10px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            background: 'rgba(132, 134, 149, 1)',
                            color: '#000',
                            fontSize: '14px',
                            marginRight: '3px',
                            width: '110px',
                            fontWeight: 'bold'
                          }}
                        />
                        <input
                          type="button"
                          value="INIT"
                          style={{
                            padding: '5px 10px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            background: 'rgba(132, 134, 149, 1)',
                            color: '#000',
                            fontSize: '14px',
                            marginRight: '3px',
                            width: '60px',
                            fontWeight: 'bold'
                          }}
                        />
                        <input
                          type="button"
                          value="SET"
                          style={{
                            padding: '5px 10px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            background: 'rgba(132, 134, 149, 1)',
                            color: '#000',
                            fontSize: '14px',
                            width: '60px',
                            fontWeight: 'bold'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <PanelControlButtonsRight />
              </div>
            </div>         
          </div>
        </div>

    )
   }
}

function mapStateToProps(state){
    console.log('state:', state.setM2SetupData.testSetup);
    return {
      testSetup: state.setM2SetupData.testSetup,

      bmsSocData: state.bmsSocData,
      bmsTempData: state.bmsTempData,
      invTempData: state.invTempData,
      invVoltData: state.invVoltData,
      bcuMBogieData: state.bcuMBogieData,
      bcuMTogieData: state.bcuMTogieData,
      driveInfoData: state.driveInfoData,
      // motorControlData: state.motorControlData,
      driveData: state.driveData,
      // DIO Command =================================
      emergencyStop: state.setEmergencyStop.data,
      runSwitch: state.setRunSwitch.data,
      directionSwitch: state.setDirectionSwitch.data,
      driveMode: state.setDriveMode.data,

      power: state.setM2SetupButtons.power, 
      light: state.setM2SetupButtons.light,
      invCon1: state.setM2SetupButtons.invCon1,
      invCon2: state.setM2SetupButtons.invCon2,
      tBms:state.setM2SetupButtons.tBms,
      dcDc: state.setM2SetupButtons.dcDc,
      apc: state.setM2SetupButtons.apc,
      invOut1: state.setM2SetupButtons.invOut1,
      invOut2: state.setM2SetupButtons.invOut2,
      sBms: state.setM2SetupButtons.sBms,
      sInv: state.setM2SetupButtons.sInv,
      camera: state.setM2SetupButtons.camera,
      hydroBk: state.setM2SetupButtons.hydroBk,
      regenBk: state.setM2SetupButtons.regenBk,

      positionStart: state.setM2SetupButtons.positionStart,
      positionStop: state.setM2SetupButtons.positionStop,
      // =============================================
    }
}

export default connect(mapStateToProps)(ViewM2Setup);
