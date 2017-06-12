import React, { Component } from 'react';
import PanelControlButtonsLeft from './components/PanelControlButtonsLeft';
import PanelControlButtonsRight from './components/PanelControlButtonsRight';
import ControlSwitchButtonOnOff from './components/ControlSwitchButtonOnOff';
import ControlSwitchButtonOnOffPatch from './components/ControlSwitchButtonOnOffPatch';
import TestSetupPanelDataContainer from './components/TestSetupPanelDataContainer';
import TestSetupPanelDataContainerDonutChart from './components/TestSetupPanelDataContainerDonutChart';
import TestSetupGaugeBar from './components/TestSetupGaugeBar';
import DynamicLineChart2 from './components/DynamicLineChart2';
import RailroadTrailStartStop from './components/RailroadTrailStartStop';

import { setRunSwitch, setDirectionSwitch, setDriveMode } from './actions';

import { connect } from 'react-redux';

class ViewM2Setup extends Component {
  constructor(props) {
    super(props);
    this.hostname = window.location.hostname;
    this.onRunSwitchClick = this.onRunSwitchClick.bind(this);
    this.onDirectionSwitchClick = this.onDirectionSwitchClick.bind(this);
    this.onDriveModeChanged = this.onDriveModeChanged.bind(this);
    // this.sendMessageToDevice = this.sendMessageToDevice.bind(this);
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
  onRunSwitchClick(value) {
    const { dispatch } = this.props;
    const command = value === "on" ? "S1" : "S0";
    dispatch( setRunSwitch(command.charAt(1)) );
    this.sendCommandToDevice(command);
  }
  onDirectionSwitchClick(value) {
    const { dispatch } = this.props;
    const command = value === "on" ? "D1" : "D0";
    dispatch( setDirectionSwitch(command.charAt(1)) );
    this.sendCommandToDevice(command);
  }
  onDriveModeChanged(value) {
    const { dispatch } = this.props;
    dispatch( setDriveMode(value) );
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
      emergencyStop
    } = this.props;
    const runSwitchValue = runSwitch === "0" ? "off" : "on";
    const directionSwitchValue = directionSwitch === "0" ? "off" : "on";
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
    console.log('emergencyStop:', emergencyStop);

    if(emergencyStop == 0) {
      sDriveModeStatus = 'EMERGENCY STOP!';
      sDriveModeStatusColor = 'red';
    }


    return (

        <div className="contBox">
          <div className="headArea">
            <div className="headLeft pull-left">
              <img src="/img/titlev2-setup.png" alt="titlev2-setup"/>
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
              <TestSetupPanelDataContainer dataLeft={bmsSocData.data} dataRight={bmsTempData.data} compTitle="BMS" nameLeft="BMS SOC" nameRight="BMS Temp" unitLeft="%" unitRight="℃" cNameLeft="SOC" cNameRight="TEMP" barTitle="PACK #" CompColor="#3581c9"/>
              <TestSetupPanelDataContainer dataLeft={invVoltData.data} dataRight={invTempData.data} compTitle="INV" nameLeft="" nameRight="" unitLeft="V" unitRight="℃" cNameLeft="OUT VOLT" cNameRight="TEMP" barTitle="INV #" CompColor="#3581c9"/>
              <TestSetupPanelDataContainer dataLeft={bcuMBogieData.data} dataRight={bcuMTogieData.data} compTitle="BCU" nameLeft="" nameRight="" unitLeft="Kpa" unitRight="Kpa" cNameLeft="M Bogie" cNameRight="T Bogie" barTitle="Caliper #" CompColor="#6f9450"/>
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
                        title="signal"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="on"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                      <ControlSwitchButtonOnOff
                        title="con m"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="on"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                      <ControlSwitchButtonOnOff
                        title="bcu m"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="on"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                      <ControlSwitchButtonOnOff
                        title="bms 1"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="on"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                      <ControlSwitchButtonOnOff
                        title="bms 2"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="on"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                      <ControlSwitchButtonOnOff
                        title="inv 1"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="on"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                      <ControlSwitchButtonOnOff
                        title="inv 2"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="off"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                      <ControlSwitchButtonOnOff
                        title="con t"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="off"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                      <ControlSwitchButtonOnOff
                        title="bcu t"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="on"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                      <ControlSwitchButtonOnOff
                        title="camera"
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 20px" 
                        value="on"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
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
                        padding: '57px 18px 15px',
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
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 0px" 
                        value="on"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                    </div>
                    <div
                      className="pull-right"
                      style={{
                        height: '100px',
                        width: '146px',
                        padding: '57px 22px 15px',
                        background: 'rgba(0,0,0,0.3)',
                        position: 'relative',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    >
                      <span className="testPanelBoxTitleFull">
                        LIGHT
                      </span>
                      <ControlSwitchButtonOnOff
                        title=""
                        onBgColor="#919138" 
                        offBgColor="#848695" 
                        onTextColor="#000"  
                        offTextColor="#000" 
                        padding="7px 0px" 
                        value="off"
                        width='50%'
                        buttons={[
                          { idx: 1, title: 'on', value: 'on' }, 
                          { idx: 2, title: 'off', value: 'off' }
                        ]}
                      />
                    </div>
                  </div>{/*우측 버튼영역 Power light 부모요소 END*/}
                  <div
                    style={{
                        padding: '55px 22px 5px',
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
                        padding: '55px 22px 5px',
                        border: '1px solid rgba(255,255,255,0.3)',
                        marginBottom: '16px',
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
                  </div>
                  <div
                    style={{
                        border: '1px solid rgba(255,255,255,0.3)',
                        width: '100%',
                        height: '196px',
                        background: 'rgba(0,0,0,0.3)'
                    }}
                  >
                  <DynamicLineChart2 data={driveInfoData.data.speed} unit="km/h" name="Vehicle Speed"/>
                  </div>
                </div>
                <div
                  className="tspcRightButtonBoxChild"
                  style={{
                    background: 'rgba(0,0,0,0)',
                    width: '292px',
                    height: '534px',
                    float: 'right',
                    marginBottom: '16px'
                  }}
                > 
                  <div 
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
                      BMS SWITCH
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
                      APC RUN
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
                        />
                      </div>
                    </div>
                    {/*----------button Area END-----------*/}
                  </div>
                  <div
                    style={{
                      border: '1px solid rgba(255,255,255,0.3)',
                      padding: '8px',
                      width: '100%',
                      background: 'rgba(0,0,0,0.3)',
                      overflow: 'hidden',
                      height: '193px',
                      marginBottom: '16px'
                    }}
                  >
                    <RailroadTrailStartStop value={driveData.data.position} name="VEHICLE POSITION" unit="m" start={0} stop={250} />
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
                        <input
                          value="10.5 m"
                          style={{
                            float: 'left',
                            width: '70px',
                            background: 'none',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: '#fff',
                            padding: '7px 5px',
                            textAlign: 'center',
                            fontSize: '15px',
                            marginRight: '5px'
                          }}
                        />
                        <input
                          value="SET"
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
                        <input
                          value="120 m"
                          style={{
                            float: 'left',
                            width: '70px',
                            background: 'none',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: '#fff',
                            padding: '7px 5px',
                            textAlign: 'center',
                            fontSize: '15px',
                            marginRight: '5px'
                          }}
                        />
                        <input
                          value="SET"
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
    //console.log('emergencyStop:', state.setEmergencyStop.data);
    return {
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
      driveMode: state.setDriveMode.data
      // =============================================
    }
}

export default connect(mapStateToProps)(ViewM2Setup);
