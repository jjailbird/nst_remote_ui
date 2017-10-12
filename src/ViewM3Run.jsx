import React, { Component } from 'react';
import SliderWeightFactor from './components/SliderWeightFactor';
import ControlSwitchGroup from './components/ControlSwitchGroup';
import ControlSwitchButton from './components/ControlSwitchButton';
import ControlSwitchButtonBlock from './components/ControlSwitchButtonBlock';
import ControlSwitchCheckBox from './components/ControlSwitchCheckBox';
import GraphTabHscContainer from './components/GraphTabHscContainer';
import MotorControlTabContainer from './components/MotorControlTabContainer';
import RailroadTrail from './components/RailroadTrail';
import DonutDivideLeftChart from './components/DonutDivideLeftChart';
import DonutCircleChart from './components/DonutCircleChart';
import PanelControlButtonsLeft from './components/PanelControlButtonsLeft';
import PanelControlButtonsRight from './components/PanelControlButtonsRight';
import Clock from 'react-live-clock';

import { H5SPlayVideo } from './utils/H5SPlayVideo';
import { connect } from 'react-redux';
import { getSocketCommand } from './utils/functions';

import {
  setCrtl1Active, setCrtl1Power, setCrtl1Zero, setCrtl1SensorType, setCrtl1ControlType, setCrtl1SRActiveA, setCrtl1SRActiveB, setCrtl1SRActiveA2, setCrtl1SRActiveB2,
  setChartTypeFrontLeft, setChartTypeFrontRight, setChartTypeRearLeft, setChartTypeRearRight, 
} from './actions'

class ViewM3Run extends Component {
  constructor(props) {
    super(props);
    //this.hostname = '192.168.1.2'; //window.location.hostname;
    this.hostname = window.location.hostname;

    this.onCrtl1ActiveChange = this.onCrtl1ActiveChange.bind(this);
    this.onCrtl1PowerChange = this.onCrtl1PowerChange.bind(this);
    this.onCrtl1ZeroChange = this.onCrtl1ZeroChange.bind(this);
    this.onCrtl1SensorTypeChange = this.onCrtl1SensorTypeChange.bind(this);
    this.onCrtl1ControlTypeChange = this.onCrtl1ControlTypeChange.bind(this);
    this.onCrtl1SRActiveAChange = this.onCrtl1SRActiveAChange.bind(this);
    this.onCrtl1SRActiveBChange = this.onCrtl1SRActiveBChange.bind(this); 
    this.onCrtl1SRActiveA2Change = this.onCrtl1SRActiveA2Change.bind(this);
    this.onCrtl1SRActiveB2Change = this.onCrtl1SRActiveB2Change.bind(this);
   
    this.onChartTypeFrontLeftChange = this.onChartTypeFrontLeftChange.bind(this);
    this.onChartTypeFrontRightChange = this.onChartTypeFrontRightChange.bind(this);
    this.onChartTypeRearLeftChange = this.onChartTypeRearLeftChange.bind(this);
    this.onChartTypeRearRightChange = this.onChartTypeRearRightChange.bind(this);
  }

  onCrtl1ActiveChange(value){
    const command = getSocketCommand('HRO_001', value == 'On' ? 1:0);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1Active(value));
  } 
  onCrtl1PowerChange(value){
    const command = getSocketCommand('HRO_002', value == 'On' ? 1:0);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1Power(value));
  }
  onCrtl1ZeroChange(value){
    const command = getSocketCommand('HRO_003', value == 'Zero' ? 1:0);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1Zero(value));
  }
  onCrtl1SensorTypeChange(values){
    const cValue = '{0}{1}'.format(values.includes('LVDT')?1:0,values.includes('Gyro')?1:0);
    const command = getSocketCommand('HRO_004', cValue);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1SensorType(values));
  }
  onCrtl1ControlTypeChange(value){
    let cValue = 0;
    switch(value) {
      case 'Passive':
        cValue = 0;
        break;
      case 'Active A':
        cValue = 1;
        break;
      case 'Active A2':
        cValue = 2;
        break;
      case 'Active B':
        cValue = 3;
        break;
      case 'Active B2':
        cValue = 4;
        break;                               
    }
    const command = getSocketCommand('HRO_005',cValue);
    this.sendCommandToDevice(command);
    
    const { dispatch } = this.props;
    dispatch(setCrtl1ControlType(value));
  }
  onCrtl1SRActiveAChange(value){
    const command = getSocketCommand('HRO_006',value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1SRActiveA(value));
  }
  onCrtl1SRActiveBChange(value){
    const command = getSocketCommand('HRO_008',value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1SRActiveB(value));
  } 
  onCrtl1SRActiveA2Change(value){
    const command = getSocketCommand('HRO_007',value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1SRActiveA2(value));
  } 
  onCrtl1SRActiveB2Change(value){
    const command = getSocketCommand('HRO_009',value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setCrtl1SRActiveB2(value));
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
  componentDidMount(){
    // console.log('HSSPlyaer start!');
    
    const rtspFrontPlayer = new H5SPlayVideo('videoLeft');
    rtspFrontPlayer.Start();
    const rtspRearPlayer = new H5SPlayVideo('videoRight');
    rtspRearPlayer.Start();
    
  }
  render() {
    const { 
      motorControlHscData,
      frontLeftHscData,
      frontRightHscData,
      rearLeftHscData,
      rearRightHscData,
      frontWheelsetHscData,
      rearWheelsetHscData,
      crtl1Active, crtl1Power, crtl1Zero, crtl1SensorType, crtl1ControlType, crtl1SRActiveA, crtl1SRActiveB, crtl1SRActiveA2, crtl1SRActiveB2,
      chartTypeFrontLeft, chartTypeFrontRight, chartTypeRearLeft, chartTypeRearRight,
    } = this.props;
    return (
      <div className="contBox">
        <div className="headArea">
          <div className="headLeft pull-left">
            <img src="/img/titlev3-itc_run.png"  alt="img/titlev3-itc_run.png"/>
          </div>
          <div className="headRight pull-right">        
            hyundai rotem company
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
                      data={motorControlHscData.data.speed} 
                      unit="Km/m" 
                      name="Speed" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="voiData">
                    <DonutCircleChart 
                      data={motorControlHscData.data.position} 
                      unit="m" 
                      name="Position" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="voiData">
                    <DonutCircleChart 
                      data={motorControlHscData.data.curv} 
                      unit="m" 
                      name="Radius" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                </div>
                <video
                  id="videoLeft"
                  // src="/video/T_Left_org.mp4"
                  data-token="token1"
                  data-h5spath="/h5swsapi"
                  style={{
                    transform: 'rotate(180deg)'
                  }}
                  //autoPlay="true"
                />                
              </div>
              <div className="panelTitle">
                Live Cam Mode
              </div>
            </div>
            <GraphTabHscContainer data={frontLeftHscData.data} type={chartTypeFrontLeft} onChange={this.onChartTypeFrontLeftChange} title="Front Left"/>
            <GraphTabHscContainer data={rearLeftHscData.data} type={chartTypeRearLeft} onChange={this.onChartTypeRearLeftChange} title="Rear Left"/>
            <PanelControlButtonsLeft />
          </div>
          <div className="motor-control-modeBox pull-left">
            <div className="motor-control-modeTitle">
              STEERING CONTROL MODE
            </div>
            <div className="configBox modeConfig1" style={{ marginTop: '9px' }}>
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
                    { idx: 1, title: 'On', value: 'On' }, 
                    { idx: 2, title: 'Off', value: 'Off' }
                  ]}
                  value={crtl1Active}
                  onChange={this.onCrtl1ActiveChange} 
                />
                <div style={{ display: 'inline-block' }}>
                  <ControlSwitchButtonBlock 
                    title="POWER PACK"
                    titleMargin="0 47px 0 0px" 
                    activeBgColor="rgba(201,195,53,0.7)" 
                    textColor="#fff" 
                    padding="3px 20px" 
                    buttons={[
                      { idx: 1, title: 'On', value: 'On' }, 
                      { idx: 2, title: 'Off', value: 'Off' }
                    ]}
                    buttonWidth="72px"
                    value={crtl1Power}
                    onChange={this.onCrtl1PowerChange}
                  />
                  <ControlSwitchButtonBlock 
                    title="ZERO POSITIONING" 
                    activeBgColor="rgba(255,255,255,0.3)" 
                    textColor="#fff" 
                    padding="3px 20px" 
                    buttons={[
                      { idx: 1, title: 'Auto', value: 'Auto' }, 
                      { idx: 2, title: 'Zero', value: 'Zero' }
                    ]}
                    buttonWidth="72px"
                    value={crtl1Zero}
                    onChange={this.onCrtl1ZeroChange}
                  />
                </div>
              </div>
              <div style={{padding: '3px 0'}}>
                <ControlSwitchCheckBox
                  title="SENSOR TYPE"
                  activeBgColor="rgba(201,195,53,0.7)" 
                  textColor="#fff" 
                  padding="3px 17px 3px 27px" 
                  buttons={[
                    { idx: 1, title: 'LVDT', value: 'LVDT' }, 
                    { idx: 2, title: 'Gyro', value: 'Gyro' }
                  ]}
                  values={crtl1SensorType}
                  onChange={this.onCrtl1SensorTypeChange}
                />
                <span style={{padding: '10px'}} ></span>
                <ControlSwitchButton
                  title="CONTROL TYPE"
                  activeBgColor="rgba(255,255,255,0.3)" 
                  textColor="#fff" 
                  padding="3px 19px" 
                  buttons={[
                    { idx: 1, title: 'Passive', value: 'Passive' }, 
                    { idx: 2, title: 'Active A', value: 'Active A' }, 
                    { idx: 3, title: 'Active A2', value: 'Active A2' }, 
                    { idx: 4, title: 'Active B', value: 'Active B' }, 
                    { idx: 5, title: 'Active B2', value: 'Active B2' }
                  ]}
                  value={crtl1ControlType}
                  onChange={this.onCrtl1ControlTypeChange}
                />
              </div>
              <div className="modeConfig1-listBox2">
                <div className="listBox2-childBox pull-left">
                  <div className="listBox2-controlBox">
                    <div className="listBox2-controlBoxTitle">
                      STEERING RATIO - ACTIVE A MODE
                    </div>
                    <div className="listBox2-controlBoxControl">
                      <SliderWeightFactor
                        // value="-15.5"
                        value={crtl1SRActiveA}
                        onChange={this.onCrtl1SRActiveAChange}
                      />
                    </div>
                    <div className="listBox2-controlBoxTitle">
                      STEERING RATIO - ACTIVE A2 MODE
                    </div>
                    <div className="listBox2-controlBoxControl">
                      <SliderWeightFactor
                        // value="-10"
                        value={crtl1SRActiveA2}
                        onChange={this.onCrtl1SRActiveA2Change}
                      />
                    </div>
                  </div>
                </div>
                <div className="listBox2-childBox pull-right">
                  <div className="listBox2-controlBox">
                    <div className="listBox2-controlBoxTitle">
                      STEERING RATIO - ACTIVE B MODE
                    </div>
                    <div className="listBox2-controlBoxControl">
                      <SliderWeightFactor
                        // value="-5"
                        value={crtl1SRActiveB}
                        onChange={this.onCrtl1SRActiveBChange}
                      />
                    </div>
                    <div className="listBox2-controlBoxTitle">
                      STEERING RATIO - ACTIVE B2 MODE
                    </div>
                    <div className="listBox2-controlBoxControl">
                      <SliderWeightFactor
                        // value="0"
                        value={crtl1SRActiveB2}
                        onChange={this.onCrtl1SRActiveB2Change}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="configBox modeConfig2">
              <div className="pull-left motorConTab">
                <MotorControlTabContainer />
              </div>
              <div className="pull-left motorConRail">
                <RailroadTrail value={motorControlHscData.data.position} valueMax="250" />
              </div>
              <div className="pull-left motorConPie">
                <div className="motorConPieBox1">
                  <div className="motorConPieBox1Child">
                    <DonutDivideLeftChart 
                      data={motorControlHscData.data.position} 
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
                      data={motorControlHscData.data.curv} 
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
                    data={motorControlHscData.data.speed} 
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
                      {frontWheelsetHscData.data.position ? frontWheelsetHscData.data.position.toFixed(1) : 0} m
                    </span>
                  </li>
                  <li>
                    <span>Track Curve</span>
                    <span>:</span>
                    <span>
                      {frontWheelsetHscData.data.trackCurve ? frontWheelsetHscData.data.trackCurve.toFixed(1) : 0} m
                    </span>
                  </li>
                  <li>
                    <span>Attack Angle</span>
                    <span>:</span>
                    <span>
                      {frontWheelsetHscData.data.attackAngle ? frontWheelsetHscData.data.attackAngle.toFixed(1) : 0} deg
                    </span>
                  </li>
                  <li>
                    <span>Steering Ratio</span>
                    <span>:</span>
                    <span>
                      {frontWheelsetHscData.data.steeringRatio ? frontWheelsetHscData.data.steeringRatio.toFixed(1) : 0}
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
                      {rearWheelsetHscData.data.position ? rearWheelsetHscData.data.position.toFixed(1) : 0} m
                    </span>
                  </li>
                  <li>
                    <span>Track Curve</span>
                    <span>:</span>
                    <span>
                      {rearWheelsetHscData.data.trackCurve ? rearWheelsetHscData.data.trackCurve.toFixed(1) : 0} m
                    </span>
                  </li>
                  <li>
                    <span>Attack Angle</span>
                    <span>:</span>
                    <span>
                      {rearWheelsetHscData.data.attackAngle ? rearWheelsetHscData.data.attackAngle.toFixed(1) : 0} deg
                    </span>
                  </li>
                  <li>
                    <span>Steering Ratio</span>
                    <span>:</span>
                    <span>
                      {rearWheelsetHscData.data.steeringRatio ? rearWheelsetHscData.data.steeringRatio.toFixed(1) : 0}
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
                      data={motorControlHscData.data.speed} 
                      unit="Km/m" 
                      name="Speed" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="voiData">
                    <DonutCircleChart 
                      data={motorControlHscData.data.position} 
                      unit="m" 
                      name="Position" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                  <div className="voiData">
                    <DonutCircleChart 
                      data={motorControlHscData.data.curv} 
                      unit="m" 
                      name="Radius" 
                      strokeColor="#fff" 
                      strokeColorLine="rgba(255,255,255,0.3)" 
                      donutWidth="40" 
                      donutStrokeWidth="5"
                      valueFontSize="20px"
                      valueFontColor="#fff"
                    />
                  </div>
                </div>
                <video
                  id="videoRight"
                  // src="/video/T_Right_org.mp4"
                  data-token="token2"
                  data-h5spath="/h5swsapi"
                  style={{
                    // transform: 'rotate(180deg)'
                  }}
                  // autoPlay="true"
                />
              </div>
              <div className="panelTitle">
                Live Cam Mode
              </div>
            </div>
            <GraphTabHscContainer data={frontRightHscData.data} type={chartTypeFrontRight} onChange={this.onChartTypeFrontRightChange} title="Front Right"/>
            <GraphTabHscContainer data={rearRightHscData.data} type={chartTypeRearRight} onChange={this.onChartTypeRearRightChange} title="Rear Right"/>
            <PanelControlButtonsRight />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
      frontLeftHscData: state.frontLeftHscData,
      frontRightHscData: state.frontRightHscData,
      rearLeftHscData: state.rearLeftHscData,
      rearRightHscData: state.rearRightHscData,
      
      motorControlHscData: state.motorControlHscData,
      
      frontWheelsetHscData: state.frontWheelsetHscData,
      rearWheelsetHscData: state.rearWheelsetHscData,

      crtl1Active: state.setSetupButtons.crtl1Active,
      crtl1Power: state.setSetupButtons.crtl1Power,
      crtl1Zero: state.setSetupButtons.crtl1Zero, 
      crtl1SensorType: state.setSetupButtons.crtl1SensorType, 
      crtl1ControlType: state.setSetupButtons.crtl1ControlType, 
      crtl1SRActiveA: state.setSetupButtons.crtl1SRActiveA, 
      crtl1SRActiveB: state.setSetupButtons.crtl1SRActiveB, 
      crtl1SRActiveA2: state.setSetupButtons.crtl1SRActiveA2, 
      crtl1SRActiveB2: state.setSetupButtons.crtl1SRActiveB2,
     
      chartTypeFrontLeft: state.setSetupButtons.chartTypeFrontLeft,
      chartTypeFrontRight: state.setSetupButtons.chartTypeFrontRight,
      chartTypeRearLeft: state.setSetupButtons.chartTypeRearLeft,
      chartTypeRearRight: state.setSetupButtons.chartTypeRearRight,
    }
}

export default connect(mapStateToProps)(ViewM3Run);