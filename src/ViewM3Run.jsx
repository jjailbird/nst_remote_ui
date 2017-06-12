import React, { Component } from 'react';
import SliderWeightFactor from './components/SliderWeightFactor';
import ControlSwitchGroup from './components/ControlSwitchGroup';
import ControlSwitchButton from './components/ControlSwitchButton';
import ControlSwitchCheckBox from './components/ControlSwitchCheckBox';
import GraphTabHscContainer from './components/GraphTabHscContainer';
import MotorControlTabContainer from './components/MotorControlTabContainer';
import RailroadTrail from './components/RailroadTrail';
import DonutDivideLeftChart from './components/DonutDivideLeftChart';
import DonutCircleChart from './components/DonutCircleChart';
import PanelControlButtonsLeft from './components/PanelControlButtonsLeft';
import PanelControlButtonsRight from './components/PanelControlButtonsRight';

import { connect } from 'react-redux';

class ViewM3Run extends Component {
  render() {
    const { 
      motorControlHscData,
      frontLeftHscData,
      frontRightHscData,
      rearLeftHscData,
      rearRightHscData,
      frontWheelsetHscData,
      rearWheelsetHscData
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
                  2017.9.9 MON<br />20:20 30
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
                  src="/video/T_Left_org.mp4"
                  style={{
                    transform: 'rotate(180deg)'
                  }}
                  // autoPlay="false"
                />                
              </div>
              <div className="panelTitle">
                Live Cam Mode
              </div>
            </div>
            <GraphTabHscContainer data={frontLeftHscData.data} title="Front Left"/>
            <GraphTabHscContainer data={rearLeftHscData.data} title="Rear Left"/>
            <PanelControlButtonsLeft />
          </div>
          <div className="motor-control-modeBox pull-left">
            <div className="motor-control-modeTitle">
              MOTOR CONTROL MODE
            </div>
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
                  value="on" 
                  buttons={[
                    { idx: 1, title: 'on', value: 'on' }, 
                    { idx: 2, title: 'off', value: 'off' }
                  ]} 
                />
                <ControlSwitchButton 
                  title="ZERO POSITIONING" 
                  activeBgColor="rgba(255,255,255,0.3)" 
                  textColor="#fff" 
                  padding="3px 20px" 
                  buttons={[
                    { idx: 1, title: 'Auto', value: 'Auto' }, 
                    { idx: 2, title: 'Zero', value: 'Zero' }
                  ]}
                />
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
                  />
              </div>
              <div className="modeConfig1-listBox2">
                <div className="listBox2-childBox pull-left">
                  <div className="listBox2-controlBox">
                    <div className="listBox2-controlBoxTitle">
                      STEERING RATIO - ACTIVE A MODE
                    </div>
                    <div className="listBox2-controlBoxControl">
                      <SliderWeightFactor value="-15.5" />
                    </div>
                    <div className="listBox2-controlBoxTitle">
                      STEERING RATIO - ACTIVE A2 MODE
                    </div>
                    <div className="listBox2-controlBoxControl">
                      <SliderWeightFactor value="-10" />
                    </div>
                  </div>
                </div>
                <div className="listBox2-childBox pull-right">
                  <div className="listBox2-controlBox">
                    <div className="listBox2-controlBoxTitle">
                      STEERING RATIO - ACTIVE B MODE
                    </div>
                    <div className="listBox2-controlBoxControl">
                      <SliderWeightFactor value="-5" />
                    </div>
                    <div className="listBox2-controlBoxTitle">
                      STEERING RATIO - ACTIVE B2 MODE
                    </div>
                    <div className="listBox2-controlBoxControl">
                      <SliderWeightFactor value="0" />
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
                  2017.9.9 MON<br />20:20 30
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
                  src="/video/T_Right_org.mp4"
                  style={{
                    // transform: 'rotate(180deg)'
                  }}
                  // autoPlay="false"
                />
              </div>
              <div className="panelTitle">
                Live Cam Mode
              </div>
            </div>
            <GraphTabHscContainer data={frontRightHscData.data} title="Front Right"/>
            <GraphTabHscContainer data={rearRightHscData.data} title="Rear Right"/>
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
      rearWheelsetHscData: state.rearWheelsetHscData
    }
}

export default connect(mapStateToProps)(ViewM3Run);