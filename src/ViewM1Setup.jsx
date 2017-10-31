import React, { Component } from 'react';
import SliderWeightFactor from './components/SliderWeightFactor';
import ControlSwitchButton from './components/ControlSwitchButton';
import MotorTemp from './components/MotorTemp';
import MotorGaugeBar from './components/MotorGaugeBar';
import PanelControlButtonsLeft from './components/PanelControlButtonsLeft';
import PanelControlButtonsRight from './components/PanelControlButtonsRight';
import MotorDonutChart from './components/MotorDonutChart';
import LaserDonutCircleChart from './components/LaserDonutCircleChart';
import DonutCircleChart from './components/DonutCircleChart';
import LaserDonutDigitalChart from './components/LaserDonutDigitalChart';
import LaserBarChart from './components/LaserBarChart';
import LaserBarChartMiddle from './components/LaserBarChartMiddle';
import LaserTabContainer from './components/LaserTabContainer';
import MotorBogieDescTab from './components/MotorBogieDescTab';

import { connect } from 'react-redux';
import { getSocketCommand, getHostName, sendCommandToDevice } from './utils/functions';
import { setTuningFrontPgain, setTuningFrontIgain, setTuningRearPgain, setTuningRearIgain, setCarMass, setCurrentAValue } from './actions';

class ViewM1Setup extends Component {
  constructor(props){
    super(props);

    this.hostname = getHostName(); 

    this.onTuningFrontPgainChange = this.onTuningFrontPgainChange.bind(this);
    this.onTuningFrontIgainChange = this.onTuningFrontIgainChange.bind(this);
    this.onTuningRearPgainChange = this.onTuningRearPgainChange.bind(this);
    this.onTuningRearIgainChange = this.onTuningRearIgainChange.bind(this);

    this.onCarMassChange = this.onCarMassChange.bind(this);
    this.onSensorSetClick = this.onSensorSetClick.bind(this);
    this.onSensorResetClick = this.onSensorResetClick.bind(this);   
  }
  onSensorSetClick() {
    const { frontSensorData, rearSensorData, dispatch } = this.props;
    let { currentAValue } = this.props;
    
    currentAValue.set = 1; 
    currentAValue.frontLeftA1 = frontSensorData.data.leftApA ? frontSensorData.data.leftApA : 0;
    currentAValue.frontLeftA2 = frontSensorData.data.leftBpA ? frontSensorData.data.leftBpA : 0;
    currentAValue.frontLeftA3 = frontSensorData.data.leftLvdtA ? frontSensorData.data.leftLvdtA : 0; 
    currentAValue.frontRightA1 = frontSensorData.data.rightApA ? frontSensorData.data.rightApA : 0; 
    currentAValue.frontRightA2 = frontSensorData.data.rightBpA ? frontSensorData.data.rightBpA : 0; 
    currentAValue.frontRightA3 = frontSensorData.data.rightLvdtA ? frontSensorData.data.rightLvdtA : 0; 
    currentAValue.frontGyroA = frontSensorData.data.gyroA ? frontSensorData.data.gyroA : 0;
    
    currentAValue.rearLeftA1 = rearSensorData.data.leftApA ? rearSensorData.data.leftApA : 0; 
    currentAValue.rearLeftA2 = rearSensorData.data.leftBpA ? rearSensorData.data.leftBpA : 0;
    currentAValue.rearLeftA3 = rearSensorData.data.leftLvdtA ? rearSensorData.data.leftLvdtA : 0; 
    currentAValue.rearRightA1 = rearSensorData.data.rightApA ? rearSensorData.data.rightApA : 0; 
    currentAValue.rearRightA2 = rearSensorData.data.rightBpA ? rearSensorData.data.rightBpA : 0; 
    currentAValue.rearRightA3 = rearSensorData.data.rightLvdtA ? rearSensorData.data.rightLvdtA : 0; 
    currentAValue.rearGyroA = rearSensorData.data.gyroA ? rearSensorData.data.gyroA :  0;
    
    dispatch(setCurrentAValue(currentAValue));
  }
  onSensorResetClick() {
    
    let { currentAValue } = this.props;
    const { dispatch } = this.props;
    
    currentAValue.set = 0;
    currentAValue.frontLeftA1 = 0;
    currentAValue.frontLeftA2 = 0;
    currentAValue.frontLeftA3 = 0; 
    currentAValue.frontRightA1 = 0; 
    currentAValue.frontRightA2 = 0; 
    currentAValue.frontRightA3 = 0; 
    currentAValue.frontGyroA = 0;
    
    currentAValue.rearLeftA1 = 0; 
    currentAValue.rearLeftA2 = 0;
    currentAValue.rearLeftA3 = 0; 
    currentAValue.rearRightA1 = 0; 
    currentAValue.rearRightA2 = 0; 
    currentAValue.rearRightA3 = 0; 
    currentAValue.rearGyroA = 0;
    
    dispatch(setCurrentAValue(currentAValue));
  }
  onTuningFrontPgainChange(value){
    // const command = '#ISO_002,{0};$'.format(value);
    const command = getSocketCommand('ISO_002', value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningFrontPgain(value));
  }
  onTuningFrontIgainChange(value){
    // const command = '#ISO_003,{0};$'.format(value);
    const command = getSocketCommand('ISO_003', value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningFrontIgain(value));
  }
  onTuningRearPgainChange(value){
    // const command = '#ISO_004,{0};$'.format(value);
    const command = getSocketCommand('ISO_004', value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningRearPgain(value));
  }
  onTuningRearIgainChange(value){
    // const command = '#ISO_005,{0};$'.format(value);
    const command = getSocketCommand('ISO_005', value);
    sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningRearIgain(value));
  }
  onCarMassChange(value) {
    const command = getSocketCommand('ISO_001', value == 'RUN' ? 0:1);
    sendCommandToDevice(command);
    
    const { dispatch } = this.props;
    dispatch(setCarMass(value));
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
  render() {
    const { 
      frontLeftMotorData,
      frontRightMotorData,
      rearLeftMotorData,
      rearRightMotorData,
      
      frontLeftData,
      frontRightData,
      rearLeftData,
      rearRightData,

      // frontLaserData,
      // rearLaserData,
      frontSensorData,
      rearSensorData,
      // motorControlData
      tuningFrontPgain, tuningFrontIgain, tuningRearPgain, tuningRearIgain,
      carMass, currentAValue,
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
                  ITC <span style={{ color: '#FFF' }}>TEST SETUP MONITOR</span>
                </span>
                <span style={{ paddingLeft: '14px',  color: '#BECED8', fontSize: '17px', fontWeight: 'bold' }}>Individual Torque Control</span>
              </div>            
            </div>
            <div className="headRight pull-right">                
              hyundai rotem company
            </div>
          </div>
          <div className="conBoxArea">
            <div className="setupSection pull-left">
              <div className="setupBoxArea">
                <div className="setupBox pull-left">
                  <div className="setupBoxTitle">
                    pid gain tuning-front
                  </div>
                  <div className="setupBoxCon">
                    <div className="setTitle">
                        <div className="setupTitle">
                          p gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            // value="-15"
                            value={tuningFrontPgain}
                            onChange={this.onTuningFrontPgainChange}
                          />
                        </div>
                        <div className="setupTitle">
                          i gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            // value="-5"
                            value={tuningFrontIgain}
                            onChange={this.onTuningFrontIgainChange}
                          />
                        </div>
                    </div>
                  </div>
                </div>
                <div className="setupBox pull-right">
                  <div className="setupBoxTitle">
                    pid gain tuning-rear
                  </div>
                  <div className="setupBoxCon">
                    <div className="setupTitle">
                      p gain
                    </div>
                    <div className="setupGainTunning">
                      <SliderWeightFactor
                        // value="-10"
                        value={tuningRearPgain}
                        onChange={this.onTuningRearPgainChange}
                      />
                    </div>
                    <div className="setupTitle">
                      i gain
                    </div>
                    <div className="setupGainTunning">
                      <SliderWeightFactor
                        // value="-0"
                        value={tuningRearIgain}
                        onChange={this.onTuningRearIgainChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="setupBox x2 noneTitle marginTop10">
                <div className="setupBoxCon">
                  <div className="setPiedata-image">
                    <LaserTabContainer />
                  </div>
                  <div className="setPiedata-pieGroups pull-left">
                    <div className="setPiedata-pieGrape pie1">
                      <LaserDonutCircleChart 
                        // data={frontLeftData.data.laserX} 
                        data={frontSensorData.data.leftLvdtS} 
                        shift="15"
                        max="30"
                        unit="mm" 
                        name="Laser - X" 
                        dataName = 'lx'
                        strokeColor="rgba(44,106,170,0.7)" 
                        strokeColorLine="rgba(255,255,255,0.2)" 
                        donutWidth="47" 
                        donutStrokeWidth="6"
                        valueFontSize="22px"
                        valueFontColor="#fff"
                      />
                    </div>
                    <div className="setPiedata-pieGrape pie2">
                      <LaserDonutCircleChart 
                        // data={frontLeftData.data.laserY} 
                        data={frontSensorData.data.laserY1} 
                        shift="15"
                        max="30"
                        unit="mm" 
                        name="Laser - Y" 
                        dataName = 'ly'
                        strokeColor="rgba(201,53,53,0.7)" 
                        strokeColorLine="rgba(255,255,255,0.2)" 
                        donutWidth="47" 
                        donutStrokeWidth="6"
                        valueFontSize="22px"
                        valueFontColor="#fff"
                      />
                    </div>
                    <div className="setPiedata-pieGrape pie3">
                      <LaserDonutCircleChart 
                        //data={rearLeftData.data.laserX} 
                        data={frontSensorData.data.rightLvdtS} 
                        shift="15"
                        max="30"
                        unit="mm" 
                        name="Laser - X" 
                        dataName = 'lx'
                        strokeColor="rgba(44,106,170,0.7)" 
                        strokeColorLine="rgba(255,255,255,0.2)" 
                        donutWidth="47" 
                        donutStrokeWidth="6"
                        valueFontSize="22px"
                        valueFontColor="#fff"
                      />
                    </div>
                    <div className="setPiedata-pieGrape pie4">
                      <LaserDonutCircleChart 
                        // data={rearLeftData.data.laserY} 
                        data={frontSensorData.data.laserY2} 
                        shift="15"
                        max="30"
                        unit="mm" 
                        name="Laser - Y" 
                        dataName = 'ly'
                        strokeColor="rgba(201,53,53,0.7)" 
                        strokeColorLine="rgba(255,255,255,0.2)" 
                        donutWidth="47" 
                        donutStrokeWidth="6"
                        valueFontSize="22px"
                        valueFontColor="#fff"
                      />
                    </div>
                    <div className="setPiedata-pieGrape pieCenter">         
                      <LaserDonutDigitalChart 
                        // data={frontRightData.data.gyroZ} 
                        data={frontSensorData.data.gyroS}
                        shift="3.5"
                        max="7"
                        unit="°" 
                        name="GYRO - Z" 
                        dataName="frontG"
                        strokeColor="rgba(137,182,89,1)" 
                        strokeColorLine="rgba(137,182,89,0.3)" 
                        donutWidth="112" 
                        donutStrokeWidth="10"
                        valueFontSize="35px"
                        valueFontColor="#fff"
                      />
                    </div>
                  </div>
                  <div className="setPiedata-pieGroups pull-right">
                    <div className="setPiedata-pieGrape pie1">
                      <LaserDonutCircleChart 
                        // data={frontRightData.data.laserX} 
                        data={rearSensorData.data.laserX1} 
                        shift="15"
                        max="30"
                        unit="mm" 
                        name="Laser - X" 
                        dataName = 'rx'
                        strokeColor="rgba(44,106,170,0.7)" 
                        strokeColorLine="rgba(255,255,255,0.2)" 
                        donutWidth="47" 
                        donutStrokeWidth="6"
                        valueFontSize="22px"
                        valueFontColor="#fff"
                      />
                    </div>
                    <div className="setPiedata-pieGrape pie2">
                      <LaserDonutCircleChart 
                        // data={frontRightData.data.laserY} 
                        data={rearSensorData.data.leftLvdtS} 
                        shift="15"
                        max="30"
                        unit="mm" 
                        name="Laser - Y" 
                        dataName = 'ry'
                        strokeColor="rgba(201,53,53,0.7)" 
                        strokeColorLine="rgba(255,255,255,0.2)" 
                        donutWidth="47" 
                        donutStrokeWidth="6"
                        valueFontSize="22px"
                        valueFontColor="#fff"
                      />
                    </div>
                    <div className="setPiedata-pieGrape pie3">
                      <LaserDonutCircleChart 
                        // data={rearRightData.data.laserX} 
                        data={rearSensorData.data.rightLvdtS} 
                        shift="15"
                        max="30"
                        unit="mm" 
                        name="Laser - X" 
                        dataName = 'rx'
                        strokeColor="rgba(44,106,170,0.7)" 
                        strokeColorLine="rgba(255,255,255,0.2)" 
                        donutWidth="47" 
                        donutStrokeWidth="6"
                        valueFontSize="22px"
                        valueFontColor="#fff"
                      />
                    </div>
                    <div className="setPiedata-pieGrape pie4">
                      <LaserDonutCircleChart 
                        // data={rearRightData.data.laserY} 
                        data={rearSensorData.data.laserY2} 
                        shift="15"
                        max="30"
                        unit="mm" 
                        name="Laser - Y" 
                        dataName = 'ry'
                        strokeColor="rgba(201,53,53,0.7)" 
                        strokeColorLine="rgba(255,255,255,0.2)" 
                        donutWidth="47" 
                        donutStrokeWidth="6"
                        valueFontSize="22px"
                        valueFontColor="#fff"
                      />
                    </div>
                    <div className="setPiedata-pieGrape pieCenter">
                      <LaserDonutDigitalChart 
                        // data={rearRightData.data.gyroZ} 
                        data={rearSensorData.data.gyroS} 
                        shift="3.5"
                        max="7"
                        unit="°" 
                        name="GYRO - Z" 
                        dataName="rearG"
                        strokeColor="rgba(137,182,89,1)" 
                        strokeColorLine="rgba(137,182,89,0.3)" 
                        donutWidth="112" 
                        donutStrokeWidth="10"
                        valueFontSize="35px"
                        valueFontColor="#fff"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="setupBox x2 marginTop10">
                <div className="setupBoxTitle">
                  motor bogie description
                </div>
                <MotorBogieDescTab onChange={this.onCarMassChange} />
              </div>
              <PanelControlButtonsLeft />
            </div>
            <div className="setupSection pull-right">
              <div className="setupBoxArea">
                <div className="setupBox2 pull-left">
                  <div className="setupBoxTitle">
                    front left motor
                  </div>
                  <div className="setupBoxCon">
                    <div className="setupMotorGraph pull-left">
                      <div className="setupMotorGraphList">
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontLeftMotorData.data.a} 
                            unit="A" 
                            name="A-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontLeftMotorData.data.b} 
                            unit="A" 
                            name="B-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontLeftMotorData.data.c} 
                            unit="A" 
                            name="C-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                      </div>{/*setupMotorGraphList END*/}
                      <div className="setupMotorGraphList">
                        <MotorTemp data={frontLeftMotorData.data.temp}/>
                      </div>
                      <div className="setupMotorGraphList">
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontLeftMotorData.data.rpm} name="rpm" max="2000" unit=""/>
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontLeftMotorData.data.torque} name="torque" shift="600" max="1200" unit="Nm"/>
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="/img/sample/setup-motor.png"/>
                    </div>
                  </div>
                </div>
                <div className="setupBox2 pull-right">
                  <div className="setupBoxTitle">
                    front right motor
                  </div>
                  <div className="setupBoxCon">
                    <div className="setupMotorGraph pull-left">
                      <div className="setupMotorGraphList">
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontRightMotorData.data.a} 
                            unit="A" 
                            name="A-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontRightMotorData.data.b} 
                            unit="A" 
                            name="B-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontRightMotorData.data.c} 
                            unit="A" 
                            name="C-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                      </div>{/*setupMotorGraphList END*/}
                      <div className="setupMotorGraphList">
                        <MotorTemp data={frontRightMotorData.data.temp}/>
                      </div>
                      <div className="setupMotorGraphList">
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontRightMotorData.data.rpm} name="rpm" max="2000" unit=""/>
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontRightMotorData.data.torque} name="torque" shift="600" max="1200" unit="Nm"/>
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="/img/sample/setup-motor.png"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setupBoxArea marginTop10">
                <div className="setupBox2 pull-left">
                  <div className="setupBoxTitle">
                    rear left motor
                  </div>
                  <div className="setupBoxCon">
                    <div className="setupMotorGraph pull-left">
                      <div className="setupMotorGraphList">
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearLeftMotorData.data.a} 
                            unit="A" 
                            name="A-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearLeftMotorData.data.b} 
                            unit="A" 
                            name="B-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearLeftMotorData.data.c} 
                            unit="A" 
                            name="C-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                      </div>{/*setupMotorGraphList END*/}
                      <div className="setupMotorGraphList">
                        <MotorTemp data={rearLeftMotorData.data.temp}/>
                      </div>
                      <div className="setupMotorGraphList">
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearLeftMotorData.data.rpm} name="rpm" max="2000" unit=""/>
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearLeftMotorData.data.torque} name="torque" shift="600" max="1200" unit="Nm"/>
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="/img/sample/setup-motor.png"/>
                    </div>
                  </div>
                </div>
                <div className="setupBox2 pull-right">
                  <div className="setupBoxTitle">
                    rear right motor
                  </div>
                  <div className="setupBoxCon">
                    <div className="setupMotorGraph pull-left">
                      <div className="setupMotorGraphList">
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearRightMotorData.data.a} 
                            unit="A" 
                            name="A-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearRightMotorData.data.b} 
                            unit="A" 
                            name="B-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearRightMotorData.data.c} 
                            unit="A" 
                            name="C-cur" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                      </div>{/*setupMotorGraphList END*/}
                      <div className="setupMotorGraphList">
                        <MotorTemp data={rearRightMotorData.data.temp}/>
                      </div>
                      <div className="setupMotorGraphList">
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearRightMotorData.data.rpm} name="rpm" max="2000" unit=""/>
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearRightMotorData.data.torque} name="torque" shift="600" max="1200" unit="Nm"/>
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="/img/sample/setup-motor.png"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setupBoxArea setupBoxAreaAxle marginTop10">
                <div className="setupBox pull-left">
                  <div className="setupBoxTitle">
                    sensor set up front axle
                  </div>
                  <div className="setupBoxCon">
                    <div className="axleBox axleBox1">
                      <div className="axleTitle">left laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.leftApA} shift="175" max="400" name="A" dataName="leftBpA" barColor="red" />
                          <LaserBarChartMiddle data={frontSensorData.data.leftApS} min="-15" max="15" name="S" dataName="leftBpS" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.leftBpA} shift="175" max="400" name="A" dataName="leftLvdtA" barColor="red" />
                          <LaserBarChartMiddle data={frontSensorData.data.leftBpS} min="-15" max="15" name="S" dataName="leftLvdtS" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.leftLvdtA} shift="100" max="250" name="A" dataName="leftApA" barColor="blue" />
                          <LaserBarChartMiddle data={frontSensorData.data.leftLvdtS} min="-15" max="15" name="S" dataName="leftApS" barColor="blue" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <div className="axleTitle">right laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.rightApA} shift="175" max="400" name="A" dataName="rightBpA" barColor="red" />
                          <LaserBarChartMiddle data={frontSensorData.data.rightApS} min="-15" max="15" name="S" dataName="rightBpS" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.rightBpA} shift="175" max="400" name="A" dataName="rightLvdtA" barColor="red" />
                          <LaserBarChartMiddle data={frontSensorData.data.rightBpS} min="-15" max="15" name="S" dataName="rightLvdtS" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.rightLvdtA} shift="100" max="250" name="A" dataName="rightApA" barColor="blue" />
                          <LaserBarChartMiddle data={frontSensorData.data.rightLvdtS} min="-15" max="15" name="S" dataName="rightApS" barColor="blue" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartMiddle data={frontSensorData.data.gyroA} name="A" min="-3.5" max="3.5" dataName="gA" barColor="green" />
                          <LaserBarChartMiddle data={frontSensorData.data.gyroS} name="S" min="-3.5" max="3.5" dataName="gS" barColor="green" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="setupBox pull-right">
                  <div className="setupBoxTitle sensorSetUp">
                    sensor set up rear axle
                    <span><small>
                      A : Absolute Value<br />
                      S : Set Value
                    </small></span>
                  </div>
                  <div className="setupBoxCon">
                    <div className="axleBox axleBox1">
                      <div className="axleTitle">left laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.leftApA} shift="175" max="400" name="A" dataName="leftBpA" barColor="red" />
                          <LaserBarChartMiddle data={rearSensorData.data.leftApS} min="-15" max="15" name="S" dataName="leftBpS" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.leftBpA} shift="175" max="400" name="A" dataName="leftLvdtA" barColor="red" />
                          <LaserBarChartMiddle data={rearSensorData.data.leftBpS} min="-15" max="15" name="S" dataName="leftLvdtS" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.leftLvdtA} shift="100" max="250" name="A" dataName="rightApA" barColor="blue" />
                          <LaserBarChartMiddle data={rearSensorData.data.leftLvdtS} min="-15" max="15" name="S" dataName="rxS" barColor="blue" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <div className="axleTitle">right laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.rightApA} shift="175" max="400" name="A" dataName="ry1A" barColor="red" />
                          <LaserBarChartMiddle data={rearSensorData.data.rightApS} min="-15" max="15" name="S" dataName="ry1S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.rightBpA} shift="175" max="400" name="A" dataName="ry2A" barColor="red" />
                          <LaserBarChartMiddle data={rearSensorData.data.rightBpS} min="-15" max="15" name="S" dataName="ry2S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.rightLvdtA} shift="100" max="250" name="A" dataName="rightApA" barColor="blue" />
                          <LaserBarChartMiddle data={rearSensorData.data.rightLvdtS} min="-15" max="15" name="S" dataName="rxS" barColor="blue" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartMiddle data={rearSensorData.data.gyroA} min="-3.5" max="3.5" name="A" dataName="gA" barColor="green" />
                          <LaserBarChartMiddle data={rearSensorData.data.gyroS} min="-3.5" max="3.5" name="S" dataName="gS" barColor="green" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="setupBox setupBoxAxleBtn">
                  <div className="setupBoxAxleBtnBox">
                    <a href="#" onClick={this.onSensorSetClick} style={{ backgroundColor: currentAValue.set == 1 ? 'rgba(255, 255, 255, 0.3)' : '' }}>SET</a>
                    <a href="#" onClick={this.onSensorResetClick} style={{ backgroundColor: currentAValue.set == 0 ? 'rgba(255, 255, 255, 0.3)' : '' }}>ORG</a>
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
    // console.log('state.frontLeftMotorData',state.frontLeftMotorData);
    return {

      frontLeftMotorData: state.frontLeftMotorData,
      frontRightMotorData: state.frontRightMotorData,
      rearLeftMotorData: state.rearLeftMotorData,
      rearRightMotorData: state.rearRightMotorData,
      
      frontLeftData: state.setItcSetupFrontLeftData,
      frontRightData: state.setItcSetupFrontRightData,
      rearLeftData: state.setItcSetupRearLeftData,
      rearRightData: state.setItcSetupRearRightData,
     
      // frontLaserData: state.frontLaserData,
      // rearLaserData: state.rearLaserData,
      frontSensorData: state.frontSensorData,
      rearSensorData: state.rearSensorData,
      // motorControlData: state.motorControlData

      tuningFrontPgain: state.setM2SetupButtons.tuningFrontPgain, 
      tuningFrontIgain: state.setM2SetupButtons.tuningFrontIgain,
      tuningRearPgain: state.setM2SetupButtons.tuningRearPgain,
      tuningRearIgain: state.setM2SetupButtons.tuningRearIgain,
      currentAValue: state.setM2SetupButtons.currentAValue,
      
    }
}

export default connect(mapStateToProps)(ViewM1Setup);
