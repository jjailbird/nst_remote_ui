import React, { Component } from 'react';
import PanelControlButtonsLeft from './components/PanelControlButtonsLeft';
import PanelControlButtonsRight from './components/PanelControlButtonsRight';
import ControlSwitchButtonOnOff from './components/ControlSwitchButtonOnOff';
import ControlSwitchButtonOnOffPatch from './components/ControlSwitchButtonOnOffPatch';
import TestSetupPanelDataContainer from './components/TestSetupPanelDataContainer';
import TestSetupPanelDataContainer1 from './components/TestSetupPanelDataContainer1';
import TestSetupPanelDataContainer2 from './components/TestSetupPanelDataContainer2';
import TestSetupPanelDataContainerDonutChart from './components/TestSetupPanelDataContainerDonutChart';
import TestSetupGaugeBar from './components/TestSetupGaugeBar';
import DynamicLineChart2 from './components/DynamicLineChart2';
import RailroadTrailStartStop from './components/RailroadTrailStartStop';

import KeyboardedInput from './components/react-touch-screen-keyboard/src/KeyboardedInput';
import 'react-touch-screen-keyboard/src/Keyboard.css';
// import Keyboard from 'react-virtual-keyboard';
import { 
  // setTestSetupData, 
  setEmergencyStop,
  setInvCon1, setInvCon2, setTbms, setDcDc, setApc, setInvOut1, setInvOut2, setSbms, setSinv, setCamera,
  setPower ,setLight, setDriveMode, setRunDirection, setRunSwitch, setHydroBk, setRegenBk,
  setPositionStart, setPositionStop, setLimitSpeedA, setRunCount, setLimitSpeedM, setShuntSpeed,
} from './actions/m2SetupActions';

import { connect } from 'react-redux';
import { getSocketCommand } from './utils/functions.js';

class ViewM2Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclePositionStart: this.props.positionStart ? this.props.positionStart : 0,
      vehiclePositionStop: this.props.positionStop ? this.props.positionStop : 0,
      vehicleLimitSpeedA: this.props.limitSpeedA,
      vehicleRunCount: this.props.runCount,
      vehicleLimitSpeedM: this.props.limitSpeedM,
      vehicleShuntSpeed: this.props.shuntSpeed,
    
    };
    this.NST_test_label = localStorage.getItem("NST_test_label") ? localStorage.getItem("NST_test_label") : 'NST 01';
    this.hostname = window.location.hostname;
    this.railLength = 250;
    
    this.onVehiclePositionStartChange = this.onVehiclePositionStartChange.bind(this);
    this.onVehiclePositionStopChange = this.onVehiclePositionStopChange.bind(this);
    
    this.onVehicleLimitSpeedAChange = this.onVehicleLimitSpeedAChange.bind(this);
    this.onVehicleLimitSpeedAKeyboardHide = this.onVehicleLimitSpeedAKeyboardHide.bind(this);

    this.onVehicleRunCountChange = this.onVehicleRunCountChange.bind(this);
    this.onVehicleRunCountkeyboardHide = this.onVehicleRunCountkeyboardHide.bind(this);

    this.onVehicleLimitSpeedMChange = this.onVehicleLimitSpeedMChange.bind(this);
    this.onVehicleLimitSpeedMKeyboardHide = this.onVehicleLimitSpeedMKeyboardHide.bind(this);
    
    this.onVehicleShuntSpeedChange = this.onVehicleShuntSpeedChange.bind(this);
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
    this.onDriveModeChange = this.onDriveModeChange.bind(this);
    // s12
    this.onRunDirectionChange = this.onRunDirectionChange.bind(this);
    // s13?

    // s14
    this.onRunSwitchChange = this.onRunSwitchChange.bind(this);
    // s15-1
    this.onHydroBkChange = this.onHydroBkChange.bind(this);
    // s15-2
    this.onRegenBkChange = this.onRegenBkChange.bind(this); 
    // this.sendMessageToDevice = this.sendMessageToDevice.bind(this);

    this.setCurrentPositionStart = this.setCurrentPositionStart.bind(this);
    this.setCurrentPositionStop = this.setCurrentPositionStop.bind(this);
    this.setCurrentManualSpeed = this.setCurrentManualSpeed.bind(this);
  }
  onVehiclePositionStartChange(value) {
    let start = value.replace('m', '');
    start = start.replace(' ', '');
    start = start.trim();

    // const { positionStop } = this.props;
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

    // const { positionStart } = this.props;
    if(stop >= 0 && stop <= this.railLength) {
      this.setState({
        vehiclePositionStop: stop
      });
    }
  }
  onVehicleLimitSpeedAChange(value) {
    let speed = value.replace('km/h', '');
    speed = speed.replace(' ', '');
    speed = speed.trim();

    // const { positionStart } = this.props;
    if(speed >= 0 && speed <= 100) {
      this.setState({
        vehicleLimitSpeedA: speed
      });
    }
  }
  onVehicleLimitSpeedAKeyboardHide(){
    const command = getSocketCommand('TSO_012', this.state.vehicleLimitSpeedA);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setLimitSpeedA(this.state.vehicleLimitSpeedA));

  }

  onVehicleRunCountChange(value) {
    this.setState({
      vehicleRunCount: value
    });
  }
  onVehicleRunCountkeyboardHide() {
    const command = getSocketCommand('TSO_013', this.state.vehicleRunCount);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setRunCount(this.state.vehicleRunCount));
  }
  onVehicleLimitSpeedMChange(value) {
    let speed = value.replace('km/h', '');
    speed = speed.replace(' ', '');
    speed = speed.trim();

    // const { positionStart } = this.props;
    if(speed >= 0 && speed <= 100) {
      this.setState({
        vehicleLimitSpeedM: speed
      });
    }
  }
  onVehicleLimitSpeedMKeyboardHide(){
    const command = getSocketCommand('TSO_014', this.state.vehicleLimitSpeedM);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setLimitSpeedM(this.state.vehicleLimitSpeedM));
  }

  onVehicleShuntSpeedChange(value) {
    let speed = value.replace('km/h', '');
    speed = speed.replace(' ', '');
    speed = speed.trim();

    // const { positionStart } = this.props;
    if(speed >= 0 && speed <= 100) {
      this.setState({
        vehicleShuntSpeed: speed
      });
    }
  }
  setCurrentPositionStart() {
    
    const command = getSocketCommand('TSO_010', this.state.vehiclePositionStart);
    this.sendCommandToDevice(command);

    // console.log('this.railroad', this.railroad);
    this.railroad.moveStartPoint(this.state.vehiclePositionStart);

    const { dispatch } = this.props;
    dispatch(setPositionStart(this.state.vehiclePositionStart));
    
  }
  setCurrentPositionStop() {
    const command = getSocketCommand('TSO_011', this.state.vehiclePositionStop);
    this.sendCommandToDevice(command);

    this.railroad.moveStartPoint(this.state.vehiclePositionStop);

    const { dispatch } = this.props;
    dispatch(setPositionStop(this.state.vehiclePositionStop));
  }
  setCurrentManualSpeed() {
    const command = getSocketCommand('TSO_015', this.state.vehicleShuntSpeed);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setShuntSpeed(this.state.vehicleShuntSpeed));
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
    
    const command = getSocketCommand('TSO_001', value == 'on' ? 1:0);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch( setPower(value) );
  }
  // s02
  onLightChange(value) {
    
    const command = getSocketCommand('TSO_002', value == 'on' ? 1:0);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch( setLight(value) );
  }
  // s03 -1
  onInvCon1Change(value) {
    const { power, dispatch } = this.props;
    if(power === 'off' && value === 'on') {
      alert('You must turn on the POWER');
      return false;
    } else {
      
      const command = getSocketCommand('TSO_021', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setInvCon1(value) );
    }
  }
  // s03 -2
  onInvCon2Change(value) {
    //alert('s03-2:' + value);
    const { invCon1, dispatch } = this.props;
    if(invCon1 === 'off' && value === 'on') {
      alert('You must turn on the INV CON1');
      return false;
    } else {
      const command = getSocketCommand('TSO_022', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setInvCon2(value) );
    }
  }
  // s04
  onTbmsChange(value) {
    //alert('s04:' + value);
    const { invCon2, dispatch } = this.props;
    if(invCon2 === 'off' && value === 'on') {
      alert('You must turn on the INV CON2');
      return false;
    } else {
      
      const command = getSocketCommand('TSO_023', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setTbms(value) );
    }
  }
  // s05
  onDcDcChange(value) {
    //alert('s05:' + value);
    const { tBms, dispatch } = this.props;
    if(tBms === 'off' && value === 'on') {
      alert('You must turn on the T-BMS');
      return false;
    } else {
      
      const command = getSocketCommand('TSO_024', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setDcDc(value) );
    }
  }
  // s06
  onApcChange(value) {
    //alert('s06:' + value);
    const { dcDc, dispatch } = this.props;
    if(dcDc === 'off' && value === 'on') {
      alert('You must turn on the DC/DC');
      return false;
    } else {
      
      const command = getSocketCommand('TSO_025', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setApc(value) );
    }
  }
  // s07-1
  onInvOut1Change(value) {
    //alert('s07-1:' + value);
    const { apc, dispatch } = this.props;
    if(apc === 'off' && value === 'on') {
      alert('You must turn on the APC');
      return false;
    } else {
      const command = getSocketCommand('TSO_026', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setInvOut1(value) );
    }
  }
  // s07-2
  onInvOut2Change(value) {
    //alert('s07-2:' + value);
    const { invOut1, dispatch } = this.props;
    if(invOut1 === 'off' && value === 'on') {
      alert('You must turn on the INV OUT1');
      return false;
    } else {
      const command = getSocketCommand('TSO_027', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setInvOut2(value) );
    }
  }
  // s08
  onSbmsChange(value) {
    //alert('s08:' + value);
    const { invOut2, dispatch } = this.props;
    if(invOut2 === 'off' && value === 'on') {
      alert('You must turn on the INV OUT2');
      return false;
    } else {
      const command = getSocketCommand('TSO_028', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setSbms(value) );
    }
  }
  // s09
  onSinvChange(value) {
    //alert('s09:' + value);
    const { sBms, dispatch } = this.props;
    if(sBms === 'off' && value === 'on') {
      alert('You must turn on the S-BMS');
      return false;
    } else {
      const command = getSocketCommand('TSO_029', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setSinv(value) );
    }
  }
  // s10
  onCameraChange(value) {
    //alert('s10:' + value);
    const { sInv, dispatch } = this.props;
    if(sInv === 'off' && value === 'on') {
      alert('You must turn on the S-INV');
      return false;
    } else {
      const command = getSocketCommand('TSO_030', value == 'on' ? 1:0);
      this.sendCommandToDevice(command);

      dispatch( setCamera(value) );
    }
  }
  // s11
  onDriveModeChange(value) {
    let cValue = 0;
    switch(value){
      case 'ST':
        cValue = 0;
        break;
      case 'Manual':
        cValue = 1;
        break;
      case 'Auto':
        cValue = 2;
        break;
    }
    const command = getSocketCommand('TSO_003', cValue);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setDriveMode(value));
  }
  // s12
  onRunDirectionChange(value) {
    const command = getSocketCommand('TSO_004', value == 'on' ? 1:0);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    const command2 = value === "on" ? "d1" : "d0";
    dispatch( setRunDirection(parseInt(command2.charAt(1))));
    //this.sendCommandToDevice(command);
  }
  // s13 제동 선택?

  // s14
  onRunSwitchChange(value) {
    const command = getSocketCommand('TSO_005', value == 'on' ? 1:0);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    const command2 = value === "on" ? "s1" : "s0";
    dispatch(setRunSwitch(parseInt(command2.charAt(1))));
  }

  // s15-1
  onHydroBkChange(value) {
    const command = getSocketCommand('TSO_006', value == 'on' ? 1:0);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch( setHydroBk(value) );
  }
  // s15-2
  onRegenBkChange(value) {
    const command = getSocketCommand('TSO_007', value == 'on' ? 1:0);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch( setRegenBk(value) );
  }
  componentDidMount() {
    // alert(this.NST_test_label);

  }
  render() {
    const { 
      emergencyStop,
      // TEST_SETUP_DATA -------------------------------------------
      TBmsSoc0, TBmsSoc1, TBmsSoc2, TBmsSoc3, TBmsSoc4,
      TBmsTemp0, TBmsTemp1, TBmsTemp2, TBmsTemp3, TBmsTemp4,
      InvVolt0, InvVolt1, InvVolt2, InvVolt3, InvVolt4,
      InvTemp0, InvTemp1, InvTemp2, InvTemp3, InvTemp4,
      CBmsSoc1, CBmsVolt1, SBmsSoc0, SBmsSoc1, SBmsSoc2, SBmsVolt0, SBmsVolt1, SBmsVolt2,
      
      Notch, BatterySoc, Tract, Brake, 
      VehicleSpeed, VehiclePosition,
      VehicleSpeedArray,
      // -----------------------------------------------------------
      // Buttons sequence ------------------------------------------
      invCon1, invCon2, tBms, dcDc, apc,
      invOut1, invOut2, sBms, sInv, camera,
      power, light, driveMode, runDirection, runSwitch, hydroBk, regenBk,
      positionStart, positionStop, limitSpeedA, runCount, limitSpeedM, shuntSpeed,
      // -----------------------------------------------------------
      dispatch
    } = this.props;
    
    console.log('VehicleSpeedArray', VehicleSpeedArray);

    const runSwitchValue = runSwitch === 0 ? "off" : "on";
    const runDirectionValue = runDirection === 0 ? "off" : "on";
    
    // console.log('runSwitchValue', runSwitch, runSwitchValue);
    // console.log('runDirectionValue:', runDirection, runDirectionValue);
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

    if(emergencyStop === 0) {
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
              <TestSetupPanelDataContainer2
                compTitle="T-BMS" nameLeft="CELL SOC" nameRight="CELL TEMP" unitLeft="%" unitRight="℃" cNameLeft="SOC" cNameRight="TEMP" barTitle="PACK #" CompColor="#3581c9"
                dataLeft={{ 
                  // data1: testSetup.data.TBmsSoc1, data2: testSetup.data.TBmsSoc2, data3: testSetup.data.TBmsSoc3, data4: testSetup.data.TBmsSoc4
                  // ,circle: (testSetup.data.TBmsSoc1 + testSetup.data.TBmsSoc2 + testSetup.data.TBmsSoc3 + testSetup.data.TBmsSoc4) / 4
                  data1: TBmsSoc1, data2: TBmsSoc2, data3: TBmsSoc3, data4: TBmsSoc4
                  //,circle: (TBmsSoc1 + TBmsSoc2 + TBmsSoc3 + TBmsSoc4) / 4
                  ,circle: TBmsSoc0
                  ,valueMax: 110

                }}
                dataRight={{ 
                  data1: TBmsTemp1, data2: TBmsTemp2, data3: TBmsTemp3, data4: TBmsTemp4,
                  // circle: (TBmsTemp1 + TBmsTemp2 + TBmsTemp3 + TBmsTemp4) / 4,
                  circle: TBmsTemp0,
                  valueMax: 200
                }}
              /> 
              <TestSetupPanelDataContainer
                compTitle="INV" nameLeft="" nameRight="" unitLeft="V" unitRight="℃" cNameLeft="OUT VOLT" cNameRight="TEMP" barTitle="INV #" CompColor="#3581c9"
                dataLeft={{
                  data1: InvVolt1, data2: InvVolt2, data3: InvVolt3, data4: InvVolt4,
                  // circle: (InvVolt1 + InvVolt2 + InvVolt3 + InvVolt4) / 4,
                  circle: InvVolt0,
                  valueMax: 900
                }} 
                dataRight={{
                  data1: InvTemp1, data2: InvTemp2, data3: InvTemp3, data4: InvTemp4,
                  // circle: (InvTemp1 + InvTemp2 + InvTemp3 + InvTemp4) / 4,
                  circle: InvTemp0,
                  valueMax: 200
                }}
              />
              {/*<TestSetupPanelDataContainer dataLeft={bcuMBogieData.data} dataRight={bcuMTogieData.data} compTitle="BCU" nameLeft="" nameRight="" unitLeft="Kpa" unitRight="Kpa" cNameLeft="M Bogie" cNameRight="T Bogie" barTitle="Caliper #" CompColor="#6f9450"/>*/}
              <TestSetupPanelDataContainer1
                compTitle1="C-BMS" 
                cNameLeft1="SOC" unitLeft1="%" 
                cNameLeft2="OUT VOLT" unitLeft2="V"
                dataLeft={{
                  data1: CBmsSoc1,
                  data2: CBmsVolt1,
                  circle1: CBmsSoc1, valueMax1: 110,
                  circle2: CBmsVolt1, valueMax2: 30, 
                }}
                
                compTitle2="S-BMS"
                cNameRight1="SOC" unitRight1="%"
                cNameRight2="OUT VOLT" unitRight2="V"
                dataRight={{
                  data1: SBmsSoc1,
                  data2: SBmsSoc2,
                  // circle1: (SBmsSoc1 + SBmsSoc2) / 2, 
                  circle1: SBmsSoc0,
                  valueMax1: 110,
                  data3: SBmsVolt1,
                  data4: SBmsVolt2,
                  // circle2: (SBmsVolt1 + SBmsVolt2) /2,
                  circle2: SBmsVolt0,
                  valueMax2: 30,
                }}

                nameLeft="" nameRight="" 
                barTitle="PACK #" 
                CompColor="#6f9450"
              />
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
                      data={Notch} 
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
                      data={VehicleSpeedArray} 
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
                      data={BatterySoc} 
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
                        <TestSetupGaugeBar data={Tract} name="tract" unit="" fillColor="#949a3f"/>
                      </div>
                    </div>

                    <div className="boxBrake pull-right">
                      <div className="testPanelBox boxTractInner">
                        <span className="testPanelBoxTitleFull">
                          BRAKE
                        </span>
                        <TestSetupGaugeBar data={Brake} name="brake" unit="" fillColor="#949a3f"/>
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
                      onChange={this.onDriveModeChange}
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
                      value={runDirectionValue}
                      width='50%'
                      onChange={this.onRunDirectionChange}
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
                          onChange={this.onRunSwitchChange}
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
                    <DynamicLineChart2 data={VehicleSpeedArray} unit="km/h" name="Vehicle Speed"/>
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
                    {/*<span>{VehiclePosition} {positionStart} {positionStop}</span>*/}
                    <RailroadTrailStartStop
                      ref={instance => { this.railroad = instance; }}
                      value={VehiclePosition} name="VEHICLE POSITION" unit="m" 
                      start={positionStart} 
                      stop={positionStop} 
                    />
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
                          className="input-vehicle-position"
                          type="text"
                          defaultKeyboard="us"
                          value={`${this.state.vehiclePositionStart} m`}
                          onChange={this.onVehiclePositionStartChange}
                        /> 
                        <input
                          type="button"
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
                          className="input-vehicle-position"
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
                        <KeyboardedInput
                          enabled
                          className="input-vehicle-position input-wide"
                          type="text"
                          defaultKeyboard="us"
                          value={`${this.state.vehicleLimitSpeedA} km/h`}
                          onChange={this.onVehicleLimitSpeedAChange}
                          onHide={this.onVehicleLimitSpeedAKeyboardHide}
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
                        <KeyboardedInput
                          enabled
                          className="input-vehicle-position input-wide"
                          type="text"
                          defaultKeyboard="us"
                          value={`${this.state.vehicleRunCount}`}
                          onChange={this.onVehicleRunCountChange}
                          onHide={this.onVehicleRunCountkeyboardHide}
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
                        <KeyboardedInput
                          enabled
                          className="input-vehicle-position input-wide"
                          type="text"
                          defaultKeyboard="us"
                          value={`${this.state.vehicleLimitSpeedM} km/h`}
                          onChange={this.onVehicleLimitSpeedMChange}
                          onHide={this.onVehicleLimitSpeedMKeyboardHide}
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
                        <KeyboardedInput
                          enabled
                          className="input-vehicle-position input-wide"
                          type="text"
                          defaultKeyboard="us"
                          value={`${this.state.vehicleShuntSpeed} km/h`}
                          onChange={this.onVehicleShuntSpeedChange}
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
                          value="RES"
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
                          onClick={this.setCurrentManualSpeed}
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
    // console.log('state', state);
    return {
      
      // testSetup: state.setM2SetupData.testSetup,
      // Bug? 전체 배열값으로 할당하면 re-rendering이 발행하지 않음(변수 데이터 변경을 rendering에서 감지 못하는 버그?)
      VehicleSpeedArray: state.setM2SetupData.testSetup.VehicleSpeedArray,
      
      // T-BMS -----------------------------
      TBmsSoc0: state.setM2SetupData.testSetup.TBmsSoc0,
      TBmsSoc1: state.setM2SetupData.testSetup.TBmsSoc1,
      TBmsSoc2: state.setM2SetupData.testSetup.TBmsSoc2,
      TBmsSoc3: state.setM2SetupData.testSetup.TBmsSoc3,
      TBmsSoc4: state.setM2SetupData.testSetup.TBmsSoc4,

      TBmsTemp0: state.setM2SetupData.testSetup.TBmsTemp0,
      TBmsTemp1: state.setM2SetupData.testSetup.TBmsTemp1,
      TBmsTemp2: state.setM2SetupData.testSetup.TBmsTemp2,
      TBmsTemp3: state.setM2SetupData.testSetup.TBmsTemp3,
      TBmsTemp4: state.setM2SetupData.testSetup.TBmsTemp4,
      // -----------------------------------

      // INV -------------------------------
      InvVolt0: state.setM2SetupData.testSetup.InvVolt0,
      InvVolt1: state.setM2SetupData.testSetup.InvVolt1,
      InvVolt2: state.setM2SetupData.testSetup.InvVolt2,
      InvVolt3: state.setM2SetupData.testSetup.InvVolt3,
      InvVolt4: state.setM2SetupData.testSetup.InvVolt4,
      InvTemp0: state.setM2SetupData.testSetup.InvTemp0,
      InvTemp1: state.setM2SetupData.testSetup.InvTemp1,
      InvTemp2: state.setM2SetupData.testSetup.InvTemp2,
      InvTemp3: state.setM2SetupData.testSetup.InvTemp3,
      InvTemp4: state.setM2SetupData.testSetup.InvTemp4,
      // -----------------------------------

      // C-BMS -----------------------------
      CBmsSoc1: state.setM2SetupData.testSetup.CBmsSoc1,
      CBmsVolt1: state.setM2SetupData.testSetup.CBmsVolt1,
      // -----------------------------------

      // S-BMS -----------------------------
      SBmsSoc0: state.setM2SetupData.testSetup.SBmsSoc0,
      SBmsSoc1: state.setM2SetupData.testSetup.SBmsSoc1,
      SBmsSoc2: state.setM2SetupData.testSetup.SBmsSoc2,
      SBmsVolt0: state.setM2SetupData.testSetup.SBmsVolt0,
      SBmsVolt1: state.setM2SetupData.testSetup.SBmsVolt1,
      SBmsVolt2: state.setM2SetupData.testSetup.SBmsVolt2,
      // -----------------------------------

      // Vehicle Info ------------------------
      
      VehicleSpeed: state.setM2SetupData.testSetup.VehicleSpeed,
      VehiclePosition: state.setM2SetupData.testSetup.VehiclePosition,
      BatterySoc: state.setM2SetupData.testSetup.BatterySoc,

      Notch: state.setM2SetupData.testSetup.Notch,
      Tract: state.setM2SetupData.testSetup.Tract,
      Brake: state.setM2SetupData.testSetup.Brake,
      
      // -----------------------------------

      // DIO Command =================================
      emergencyStop: state.setM2SetupButtons.emergencyStop,
      driveLever: state.setM2SetupButtons.driveLever,
      
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

      power: state.setM2SetupButtons.power, 
      light: state.setM2SetupButtons.light,
      runDirection: state.setM2SetupButtons.runDirection,      
      runSwitch: state.setM2SetupButtons.runSwitch,
      driveMode: state.setM2SetupButtons.driveMode,
      hydroBk: state.setM2SetupButtons.hydroBk,
      regenBk: state.setM2SetupButtons.regenBk,

      positionStart: state.setM2SetupButtons.positionStart,
      positionStop: state.setM2SetupButtons.positionStop,
      limitSpeedA: state.setM2SetupButtons.limitSpeedA,
      runCount: state.setM2SetupButtons.runCount,
      limitSpeedM: state.setM2SetupButtons.limitSpeedM,
      shuntSpeed: state.setM2SetupButtons.shuntSpeed,
      // =============================================
    }
}

export default connect(mapStateToProps)(ViewM2Setup);
