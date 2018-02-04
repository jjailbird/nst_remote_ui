import React, { Component } from 'react';
import SliderWeightFactor from './components/SliderWeightFactor';
import ControlSwitchGroup from './components/ControlSwitchGroup';
import ControlSwitchButton from './components/ControlSwitchButton';
import ControlSwitchCheckBox2 from './components/ControlSwitchCheckBox2';
import GraphTabContainer from './components/GraphTabContainer';
import MotorControlTabContainer from './components/MotorControlTabContainer';
import RailroadTrail from './components/RailroadTrail';
import DonutDivideLeftChart from './components/DonutDivideLeftChart';
import DonutCircleChart from './components/DonutCircleChart';
import PanelControlButtonsLeft from './components/PanelControlButtonsLeft';
import PanelControlButtonsRight from './components/PanelControlButtonsRight';
import Clock from 'react-live-clock';

import TabPanel, { TabStrip } from 'react-tab-panel';
import 'react-tab-panel/index.css';
import './ViewM1Run.css';

import { H5SPlayVideo } from './utils/H5SPlayVideo';
import { connect } from 'react-redux';
import { getSocketCommand, getHostName, sendCommandToDevice } from './utils/functions';

import {
  setCrtl1Active, setCrtl1Mode, setCrtl1SensorType, setCrtl1ControlType, setCrtl1WFLateralSensor, setCrtl1WFControlMode, setCrtl1WFYawSensor, setCrtl1WFControlType,
  setCrtl2Active, setCrtl2Mode, setCrtl2SensorType, setCrtl2ControlType, setCrtl2WFLateralSensor, setCrtl2WFControlMode, setCrtl2WFYawSensor, setCrtl2WFControlType,
  setChartTypeFrontLeft, setChartTypeFrontRight, setChartTypeRearLeft, setChartTypeRearRight, 
} from './actions'

class ViewM1Run extends Component {
  constructor(props) {
    super(props);
    this.hostname = getHostName();
    
    this.onDataModeChange = this.onDataModeChange.bind(this);

    this.onCrtl1ActiveChange = this.onCrtl1ActiveChange.bind(this);
    this.onCrtl1ModeChange = this.onCrtl1ModeChange.bind(this);
    this.onCrtl1SensorTypeChange = this.onCrtl1SensorTypeChange.bind(this);
    this.onCrtl1ControlTypeChange = this.onCrtl1ControlTypeChange.bind(this);
    this.onCrtl1WfLateralSensorChange = this.onCrtl1WfLateralSensorChange.bind(this);
    this.onCrtl1WfControlModeChange = this.onCrtl1WfControlModeChange.bind(this); 
    this.onCrtl1WfYawSensorChange = this.onCrtl1WfYawSensorChange.bind(this);
    this.onCrtl1WfControlTypeChange = this.onCrtl1WfControlTypeChange.bind(this);
    this.onCrtl2ActiveChange = this.onCrtl2ActiveChange.bind(this); 
    this.onCrtl2ModeChange = this.onCrtl2ModeChange.bind(this); 
    this.onCrtl2SensorTypeChange = this.onCrtl2SensorTypeChange.bind(this); 
    this.onCrtl2ControlTypeChange = this.onCrtl2ControlTypeChange.bind(this); 
    this.onCrtl2WfLateralSensorChange = this.onCrtl2WfLateralSensorChange.bind(this); 
    this.onCrtl2WfControlModeChange = this.onCrtl2WfControlModeChange.bind(this); 
    this.onCrtl2WfYawSensorChange = this.onCrtl2WfYawSensorChange.bind(this); 
    this.onCrtl2WfControlTypeChange = this.onCrtl2WfControlTypeChange.bind(this);

    this.onChartTypeFrontLeftChange = this.onChartTypeFrontLeftChange.bind(this);
    this.onChartTypeFrontRightChange = this.onChartTypeFrontRightChange.bind(this);
    this.onChartTypeRearLeftChange = this.onChartTypeRearLeftChange.bind(this);
    this.onChartTypeRearRightChange = this.onChartTypeRearRightChange.bind(this);

    this.onTabActivate = this.onTabActivate.bind(this);

  }
  onDataModeChange(value) {
    const command = getSocketCommand('RUN_DEMO', value);
    sendCommandToDevice(command);
  }
  onCrtl1ActiveChange(value){
    const command = getSocketCommand('IRO_001',value == 'on' ? 1:0);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1Active(value));
  } 
  onCrtl1ModeChange(value){
    const command = getSocketCommand('IRO_002',value == 'Speed' ? 1:0);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1Mode(value));
  }
  onCrtl1SensorTypeChange(value){
    // const cValue = '{0}{1}{2}'.format(values.includes('Laser-X')?1:0,values.includes('Laser-Y')?1:0,values.includes('Gyro')?1:0);
    // const command = getSocketCommand('IRO_003',cValue);

    const command = getSocketCommand('IRO_003',value == 'LVDT' ? 0:1);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1SensorType(value));
  }
  onCrtl1ControlTypeChange(value){
    const command = getSocketCommand('IRO_004',value == 'Yaw Angle' ? 1:0);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1ControlType(value));
  }
  onCrtl1WfLateralSensorChange(value){
    const command = getSocketCommand('IRO_005',value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1WFLateralSensor(value));
  }
  onCrtl1WfControlModeChange(value){
    const command = getSocketCommand('IRO_007',value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1WFControlMode(value));
  } 
  onCrtl1WfYawSensorChange(value){
    const command = getSocketCommand('IRO_006',value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1WFYawSensor(value));
  } 
  onCrtl1WfControlTypeChange(value){
    const command = getSocketCommand('IRO_008',value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1WFControlType(value));
  }
  onCrtl2ActiveChange(value){
    const command = getSocketCommand('IRO_051',value == 'on' ? 1:0);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl2Active(value));
  } 
  onCrtl2ModeChange(value){
    const command = getSocketCommand('IRO_052',value == 'Speed' ? 1:0);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl2Mode(value));
  } 
  onCrtl2SensorTypeChange(value){
    // const cValue = '{0}{1}{2}'.format(values.includes('Laser-X')?1:0,values.includes('Laser-Y')?1:0,values.includes('Gyro')?1:0);
    // const command = getSocketCommand('IRO_053',cValue);
    
    const command = getSocketCommand('IRO_053',value == 'LVDT' ? 0:1);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl2SensorType(value));
  } 
  onCrtl2ControlTypeChange(value){
    const command = getSocketCommand('IRO_054',value == 'Yaw Angle' ? 1:0);
    sendCommandToDevice(command);
    
    const { dispatch } = this.props;
    dispatch(setCrtl2ControlType(value));
  } 
  onCrtl2WfLateralSensorChange(value){
    const command = getSocketCommand('IRO_055',value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl2WFLateralSensor(value));
  } 
  onCrtl2WfControlModeChange(value){
    const command = getSocketCommand('IRO_057',value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl2WFControlMode(value));
  } 
  onCrtl2WfYawSensorChange(value){
    const command = getSocketCommand('IRO_056',value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl2WFYawSensor(value));
  } 
  onCrtl2WfControlTypeChange(value){
    const command = getSocketCommand('IRO_058',value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl2WFControlType(value));
  }

  onChartTypeFrontLeftChange(value){
    const { dispatch } = this.props;
    dispatch(setChartTypeFrontLeft(value));
  }
  onChartTypeFrontRightChange(value){
    const { dispatch } = this.props;
    dispatch(setChartTypeFrontRight(value));
  }
  onChartTypeRearLeftChange(value){
    const { dispatch } = this.props;
    dispatch(setChartTypeRearLeft(value));
  }
  onChartTypeRearRightChange(value){
    const { dispatch } = this.props;
    dispatch(setChartTypeRearRight(value));
  }
  /*
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
  */
  onTabActivate(index){
    // alert(index);
    let tabBody = document.getElementsByClassName('react-tab-panel__body');
    // console.log('tabBody', tabBody);
    let bgColor = (index == 0) ? '#606679' : '#5a7581';
    tabBody[0].style.backgroundColor = bgColor;
  }
  componentDidMount(){
    
    // console.log('HSSPlyaer start!');
    const rtspFrontPlayer = new H5SPlayVideo('videoLeft');
    rtspFrontPlayer.Start();
    const rtspRearPlayer = new H5SPlayVideo('videoRight');
    rtspRearPlayer.Start();
    
  }
  render() {
    const { 
      motorControlData,
      frontLeftData,
      frontRightData,
      rearLeftData,
      rearRightData,
      frontWheelsetData,
      rearWheelsetData,
      crtl1Active, crtl1Mode, crtl1SensorType, crtl1ControlType, crtl1WfLateralSensor, crtl1WfControlMode, crtl1WfYawSensor, crtl1WfControlType,
      crtl2Active, crtl2Mode, crtl2SensorType, crtl2ControlType, crtl2WfLateralSensor, crtl2WfControlMode, crtl2WfYawSensor, crtl2WfControlType,
      chartTypeFrontLeft, chartTypeFrontRight, chartTypeRearLeft, chartTypeRearRight,
    } = this.props;
    return (
      <div className="contBox">
        <div className="headArea">
          <div className="headLeft pull-left">
            <div
                style={{
                  // width: '690px',
                  height: '30px',
                  marginBottom: '10px' 
                }}
              >
              <span style={{ color: '#EB4B4B', fontSize: '34px', fontWeight: 'bold' }}>
                ITC <span style={{ color: '#FFF' }}>TEST MONITOR</span>
              </span>
              <span style={{ paddingLeft: '14px',  color: '#BECED8', fontSize: '17px', fontWeight: 'bold' }}>Individual Torque Control</span>
            </div>            
          </div>
          <div className="headRight pull-right">        
            hyundai rotem company
            [<a href="#" onClick={() => this.onDataModeChange('1')}>demo</a> / <a href="#" onClick={() => this.onDataModeChange('0')}>live</a>]
          </div>
        </div>
        <div className="conBoxArea">
          <div className="left-w-camBox pull-left">
            <div className="panelBox liveCam">
              <div className="videoBox">
                <div className="videoOverInfo voiCount">
                  Test Day : 001
                </div>
                <div
                  className="videoOverInfo voiTitle"
                  style={{
                    left: '15px',
                    bottom: '17px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                  }}
                >
                  front wheel cam
                </div>
                <div className="videoOverInfo voiDate">
                  <Clock format={'YYYY.MM.DD ddd'} ticking={true} timezone={'Asia/Tokyo'} />
                  <br />
                  <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tokyo'} />
                  <div className="voiData">
                    <DonutCircleChart 
                      data={motorControlData.data.speed} 
                      max="30" 
                      unit="Km/m" 
                      name="Speed" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40px" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="voiData">
                    <DonutCircleChart 
                      // data={motorControlData.data.position} 
                      // IRI_004
                      data={frontWheelsetData.data.position}
                      max="250"
                      unit="m" 
                      name="Position" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40px" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="voiData">
                    <DonutCircleChart 
                      // data={motorControlData.data.curv} 
                      // IRI_005
                      data={frontWheelsetData.data.trackCurve}
                      max={2000000}
                      shift={1000000}
                      unit="m" 
                      name="Radius" 
                      strokeColor="#fff"
                      strokeColorLine="rgba(255,255,255,0.3)"
                      donutWidth="40px" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                </div>
                <video
                  id="videoLeft"
                  // src="/video/M_Left_org.mp4"
                  data-token="token1"
                  data-h5spath="/h5swsapi"
                  autoPlay="true"
                  /*
                  style={{
                    transform: 'rotate(180deg)'
                  }}
                  */
                />
              </div>
              <div className="panelTitle">
                Live Cam Mode
              </div>
            </div>
            <GraphTabContainer data={frontLeftData.data} type={chartTypeFrontLeft} onChange={this.onChartTypeFrontLeftChange} title="Front Left"/>
            <GraphTabContainer data={rearLeftData.data} type={chartTypeRearLeft} onChange={this.onChartTypeRearLeftChange} title="Rear Left"/>
            <PanelControlButtonsLeft />
          </div>
          <div className="motor-control-modeBox pull-left">
            <div className="motor-control-modeTitle">
              MOTOR CONTROL MODE
            </div>
       
            <TabPanel className="tab-motor-control-set" onActivate={this.onTabActivate}>
              <div tabTitle="FRONT" tabProps={{ className:'tab-front' }}>
                {/* MOTOR CONTROL1 START ==========================================================*/}
                <div className="configBox modeConfig1">
                  <div className="modeConfig1-listBox1">
                    <span className="confBigTitle">
                      <img
                        src="/img/bullet1.png"
                        alt="img/bullet1.png"
                        style={{
                          marginRight: '5px'
                        }}
                      />
                      MODE SELECT
                    </span>
                    <ControlSwitchGroup 
                      title="CONTROL ACTIVE" 
                      type="yellowButton" 
                      value={crtl1Active}
                      buttons={[
                        { idx: 1, title: 'on', value: 'on' }, 
                        { idx: 2, title: 'off', value: 'off' }
                      ]}
                      onChange={this.onCrtl1ActiveChange}
                    />
                    <ControlSwitchButton 
                      title="CONTROL MODE" 
                      activeBgColor="rgba(255,255,255,0.3)" 
                      textColor="#fff" 
                      padding="3px 20px" 
                      value={crtl1Mode}
                      buttons={[
                        { idx: 1, title: 'Torque', value: 'Torque' }, 
                        { idx: 2, title: 'Speed', value: 'Speed' }
                      ]}
                      onChange={this.onCrtl1ModeChange}
                    />
                  </div>
                  
                  <div className="modeConfig1-listBox2">
                    <div className="listBox2-childBox pull-left">
                      {/*
                      <ControlSwitchCheckBox2
                        title="SENSOR TYPE"
                        activeBgColor="rgba(201,195,53,0.7)" 
                        textColor="#fff" 
                        padding="3px 17px 3px 27px" 
                        buttons={[
                          { idx: 1, title: 'Laser-X', value: 'Laser-X' }, 
                          { idx: 2, title: 'Laser-Y', value: 'Laser-Y' }, 
                          { idx: 3, title: 'Gyro', value: 'Gyro' }
                        ]}
                        values={crtl1SensorType}
                        onChange={this.onCrtl1SensorTypeChange}
                      />
                      */}
                      <ControlSwitchButton 
                        title="INV. STATE"
                        activeBgColor="rgba(255,255,255,0.3)" 
                        textColor="#fff" 
                        padding="3px 20px" 
                        buttons={[
                          { idx: 1, title: 'RUN', value: 'LVDT' },
                          { idx: 2, title: 'RESET', value: 'Gyro' }
                        ]}
                        value={crtl1SensorType}
                        onChange={this.onCrtl1SensorTypeChange}
                      />
                      <div className="listBox2-controlBox">
                        <div className="listBox2-controlBoxTitle">
                          WEIGHT FACTOR – Lateral Sensor
                        </div>
                        <div className="listBox2-controlBoxControl">
                          <SliderWeightFactor
                            value={crtl1WfLateralSensor} // value="-15.5"
                            onChange={this.onCrtl1WfLateralSensorChange}
                          />
                        </div>
                        <div className="listBox2-controlBoxTitle">
                          WEIGHT FACTOR – Yaw Sensor
                        </div>
                        <div className="listBox2-controlBoxControl">
                          <SliderWeightFactor
                            value={crtl1WfYawSensor} // value="-10"
                            onChange={this.onCrtl1WfYawSensorChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="listBox2-childBox pull-right">
                      <ControlSwitchButton
                        title="CONTROL TYPE"
                        activeBgColor="rgba(255,255,255,0.3)" 
                        textColor="#fff" 
                        padding="3px 20px" 
                        buttons={[
                          { idx: 1, title: 'Lateral Position', value: 'Lateral Position' }, 
                          { idx: 2, title: 'Yaw Angle', value: 'Yaw Angle' }
                        ]}
                        value={crtl1ControlType}
                        onChange={this.onCrtl1ControlTypeChange}
                      />
                      <div className="listBox2-controlBox">
                        <div className="listBox2-controlBoxTitle">
                          WEIGHT FACTOR – Control Mode
                        </div>
                        <div className="listBox2-controlBoxControl">
                          <SliderWeightFactor
                            value={crtl1WfControlMode} // value="-5"
                            onChange={this.onCrtl1WfControlModeChange}
                          />
                        </div>
                        <div className="listBox2-controlBoxTitle">
                          WEIGHT FACTOR – Control Type
                        </div>
                        <div className="listBox2-controlBoxControl">
                          <SliderWeightFactor
                            value={crtl1WfControlType} // value="0"
                            onChange={this.onCrtl1WfControlTypeChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* MOTOR CONTROL1 END ==========================================================*/}
              </div>  
              <div tabTitle="REAR" tabProps={{ className:'tab-rear' }}>
                {/* MOTOR CONTROL2 START ==========================================================*/}
                <div className="configBox modeConfig1">
                  <div className="modeConfig1-listBox1">
                    <span className="confBigTitle">
                      <img
                        src="/img/bullet1.png"
                        alt="img/bullet1.png"
                        style={{
                          marginRight: '5px'
                        }}
                      />
                      MODE SELECT
                    </span>
                    <ControlSwitchGroup 
                      title="CONTROL ACTIVE" 
                      type="yellowButton" 
                      buttons={[
                        { idx: 1, title: 'on', value: 'on' }, 
                        { idx: 2, title: 'off', value: 'off' }
                      ]}
                      value={crtl2Active}
                      onChange={this.onCrtl2ActiveChange} 
                    />
                    <ControlSwitchButton 
                      title="CONTROL MODE" 
                      activeBgColor="rgba(255,255,255,0.3)" 
                      textColor="#fff" 
                      padding="3px 20px" 
                      buttons={[
                        { idx: 1, title: 'Torque', value: 'Torque' }, 
                        { idx: 2, title: 'Speed', value: 'Speed' }
                      ]}
                      value={crtl2Mode}
                      onChange={this.onCrtl2ModeChange}
                    />
                  </div>
                  
                  <div className="modeConfig1-listBox2">
                    <div className="listBox2-childBox pull-left">
                      {/*
                      <ControlSwitchCheckBox2
                        title="SENSOR TYPE"
                        activeBgColor="rgba(201,195,53,0.7)" 
                        textColor="#fff" 
                        padding="3px 17px 3px 27px" 
                        buttons={[
                          { idx: 1, title: 'Laser-X', value: 'Laser-X' }, 
                          { idx: 2, title: 'Laser-Y', value: 'Laser-Y' }, 
                          { idx: 3, title: 'Gyro', value: 'Gyro' }
                        ]}
                        values={crtl2SensorType}
                        onChange={this.onCrtl2SensorTypeChange}
                      />
                      */}
                      <ControlSwitchButton 
                        title="INV. STATE"
                        activeBgColor="rgba(255,255,255,0.3)" 
                        textColor="#fff" 
                        padding="3px 20px" 
                        buttons={[
                          { idx: 1, title: 'RUN', value: 'LVDT' },
                          { idx: 2, title: 'RESET', value: 'Gyro' }
                        ]}
                        value={crtl2SensorType}
                        onChange={this.onCrtl2SensorTypeChange}
                      />

                      <div className="listBox2-controlBox">
                        <div className="listBox2-controlBoxTitle">
                          WEIGHT FACTOR – Lateral Sensor
                        </div>
                        <div className="listBox2-controlBoxControl">
                          <SliderWeightFactor
                            // value="-15.5"
                            value={crtl2WfLateralSensor}
                            onChange={this.onCrtl2WfLateralSensorChange}
                          />
                        </div>
                        <div className="listBox2-controlBoxTitle">
                          WEIGHT FACTOR – Yaw Sensor
                        </div>
                        <div className="listBox2-controlBoxControl">
                          <SliderWeightFactor
                            // value="-10"
                            value={crtl2WfYawSensor}
                            onChange={this.onCrtl2WfYawSensorChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="listBox2-childBox pull-right">
                      <ControlSwitchButton
                        title="CONTROL TYPE"
                        activeBgColor="rgba(255,255,255,0.3)" 
                        textColor="#fff" 
                        padding="3px 20px" 
                        buttons={[
                          { idx: 1, title: 'Lateral Position', value: 'Lateral Position' }, 
                          { idx: 2, title: 'Yaw Angle', value: 'Yaw Angle' }
                        ]}
                        value={crtl2ControlType}
                        onChange={this.onCrtl2ControlTypeChange}
                      />
                      <div className="listBox2-controlBox">
                        <div className="listBox2-controlBoxTitle">
                          WEIGHT FACTOR – Control Mode
                        </div>
                        <div className="listBox2-controlBoxControl">
                          <SliderWeightFactor
                            // value="-5"
                            value={crtl2WfControlMode}
                            onChange={this.onCrtl2WfControlModeChange}
                          />
                        </div>
                        <div className="listBox2-controlBoxTitle">
                          WEIGHT FACTOR – Control Type
                        </div>
                        <div className="listBox2-controlBoxControl">
                          <SliderWeightFactor
                            // value="0"
                            value={crtl2WfControlType}
                            onChange={this.onCrtl2WfControlTypeChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* MOTOR CONTROL2 END ==========================================================*/}                
              </div>  
            </TabPanel>                  

            <div className="configBox modeConfig2">
              <div className="pull-left motorConTab">
                <MotorControlTabContainer />
              </div>
              <div className="pull-left motorConRail">
                <RailroadTrail value={motorControlData.data.position} valueMax="250" />
              </div>
              <div className="pull-left motorConPie">
                <div className="motorConPieBox1">
                  <div className="motorConPieBox1Child">
                    <DonutDivideLeftChart 
                      data={motorControlData.data.position} 
                      max="250"
                      unit="m" 
                      name="Vehicle Position" 
                      strokeColor="#3581c9" 
                      strokeColorLine="#16315b" 
                      donutWidth="72" 
                      donutStrokeWidth="10"
                      valueFontSize="25px"
                      valueFontColor="#3581c9"
                    />
                  </div>
                  <div className="motorConPieBox1Child">
                    <DonutDivideLeftChart 
                      // data={motorControlData.data.curv} 
                      data={motorControlData.data.curv} 
                      shift="1000000"
                      max="2000000"
                      unit="m" 
                      name="Track Curvature" 
                      strokeColor="#3581c9" 
                      strokeColorLine="#16315b" 
                      donutWidth="72" 
                      donutStrokeWidth="10"
                      valueFontSize="25px"
                      valueFontColor="#3581c9"
                    />
                  </div>
                </div>
                <div className="motorConPieBox2">
                    <DonutDivideLeftChart 
                      data={motorControlData.data.speed} 
                      max="30"
                      unit="km/h" 
                      name="Vehicle Speed" 
                      strokeColor="#c93535" 
                      strokeColorLine="#16315b" 
                      donutWidth="91" 
                      donutStrokeWidth="10"
                      valueFontSize="35px"
                      valueFontColor="#a19d35"
                    />
                </div>
              </div>
              <div className="modeConfig2-graphBox">
              </div>
            </div>
            <div className="configBox modeConfig3">
              <div className="modeConfig3-childBox pull-left">
                <div className="modeConfig3-childBoxTitle">
                  Front Wheelset
                </div>
                <ul className="modeConfig3-list">
                  <li>
                    <span>Position</span>
                    <span>:</span>
                    <span>
                      {frontWheelsetData.data.position ? frontWheelsetData.data.position.toFixed(1) : 0} m
                    </span>
                  </li>
                  <li>
                    <span>Track Curve</span>
                    <span>:</span>
                    <span>
                      {frontWheelsetData.data.trackCurve ? frontWheelsetData.data.trackCurve.toLocaleString() : 0} m
                    </span>
                  </li>
                  <li>
                    <span>Attack Angle</span>
                    <span>:</span>
                    <span>
                      {frontWheelsetData.data.attackAngle ? frontWheelsetData.data.attackAngle.toFixed(1) : 0} deg
                    </span>
                  </li>
                  <li>
                    <span>Steering Ratio</span>
                    <span>:</span>
                    <span>
                      {frontWheelsetData.data.steeringRatio ? frontWheelsetData.data.steeringRatio.toFixed(1) : 0}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="modeConfig3-childBox pull-right">
                <div className="modeConfig3-childBoxTitle">
                  Rear Wheelset
                </div>
                <ul className="modeConfig3-list">
                  <li>
                    <span>Position</span>
                    <span>:</span>
                    <span>
                      {rearWheelsetData.data.position ? rearWheelsetData.data.position.toFixed(1) : 0} m
                    </span>
                  </li>
                  <li>
                    <span>Track Curve</span>
                    <span>:</span>
                    <span>
                      {rearWheelsetData.data.trackCurve ? rearWheelsetData.data.trackCurve.toLocaleString() : 0} m
                    </span>
                  </li>
                  <li>
                    <span>Attack Angle</span>
                    <span>:</span>
                    <span>
                      {rearWheelsetData.data.attackAngle ? rearWheelsetData.data.attackAngle.toFixed(1) : 0} deg
                    </span>
                  </li>
                  <li>
                    <span>Steering Ratio</span>
                    <span>:</span>
                    <span>
                      {rearWheelsetData.data.steeringRatio ? rearWheelsetData.data.steeringRatio.toFixed(1) : 0}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-w-camBox pull-right">
            <div className="panelBox recording-">
              <div className="videoBox">
                <div className="videoOverInfo voiCount">
                  Test Day : 001
                </div>
                <div
                  className="videoOverInfo voiTitle"
                  style={{
                    left: '15px',
                    bottom: '17px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                  }}
                >
                  rear wheel cam
                </div>
                <div className="videoOverInfo voiDate">
                  <Clock format={'YYYY.MM.DD ddd'} ticking={true} timezone={'Asia/Tokyo'} />
                  <br />
                  <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Tokyo'} />

                  <div className="voiData">
                    <DonutCircleChart 
                      data={motorControlData.data.speed} 
                      max="30"
                      unit="Km/m" 
                      name="Speed" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40px" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="voiData">
                    <DonutCircleChart 
                      data={rearWheelsetData.data.position} 
                      max="250"
                      unit="m" 
                      name="Position" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40px" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="voiData">
                    <DonutCircleChart 
                      data={rearWheelsetData.data.trackCurve} 
                      max="2000000"
                      shift="1000000"
                      unit="m" 
                      name="Radius" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40px" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                </div>
                <video
                  id="videoRight"
                  // src="/video/M_Right_org.mp4"
                  data-token="token2"
                  data-h5spath="/h5swsapi"
                  style={{
                    // transform: 'rotate(180deg)'
                  }}
                  autoPlay="true"
                />
              </div>
              <div className="panelTitle">
                LIVE CAM MODE
              </div>
            </div>
            <GraphTabContainer data={frontRightData.data} type={chartTypeFrontRight} onChange={this.onChartTypeFrontRightChange} title="Front Right"/>
            <GraphTabContainer data={rearRightData.data} type={chartTypeRearRight} onChange={this.onChartTypeRearRightChange} title="Rear Right"/>
            <PanelControlButtonsRight target="IRO" />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log('redux data', state);  
  return {
      frontLeftData: state.frontLeftData,
      frontRightData: state.frontRightData,
      rearLeftData: state.rearLeftData,
      rearRightData: state.rearRightData,
      motorControlData: state.motorControlData,
      frontWheelsetData: state.frontWheelsetData,
      rearWheelsetData: state.rearWheelsetData,
      crtl1Active: state.setM2SetupButtons.crtl1Active,
      crtl1Mode: state.setM2SetupButtons.crtl1Mode, 
      crtl1SensorType: state.setM2SetupButtons.crtl1SensorType, 
      crtl1ControlType: state.setM2SetupButtons.crtl1ControlType, 
      crtl1WfLateralSensor: state.setM2SetupButtons.crtl1WfLateralSensor, 
      crtl1WfControlMode: state.setM2SetupButtons.crtl1WfControlMode, 
      crtl1WfYawSensor: state.setM2SetupButtons.crtl1WfYawSensor, 
      crtl1WfControlType: state.setM2SetupButtons.crtl1WfControlType,
      crtl2Active: state.setM2SetupButtons.crtl2Active, 
      crtl2Mode: state.setM2SetupButtons.crtl2Mode, 
      crtl2SensorType: state.setM2SetupButtons.crtl2SensorType, 
      crtl2ControlType: state.setM2SetupButtons.crtl2ControlType, 
      crtl2WfLateralSensor: state.setM2SetupButtons.crtl2WfLateralSensor, 
      crtl2WfControlMode: state.setM2SetupButtons.crtl2WfControlMode, 
      crtl2WfYawSensor: state.setM2SetupButtons.crtl2WfYawSensor, 
      crtl2WfControlType: state.setM2SetupButtons.crtl2WfControlType,

      chartTypeFrontLeft: state.setM2SetupButtons.chartTypeFrontLeft,
      chartTypeFrontRight: state.setM2SetupButtons.chartTypeFrontRight,
      chartTypeRearLeft: state.setM2SetupButtons.chartTypeRearLeft,
      chartTypeRearRight: state.setM2SetupButtons.chartTypeRearRight,
    }
}

export default connect(mapStateToProps)(ViewM1Run);