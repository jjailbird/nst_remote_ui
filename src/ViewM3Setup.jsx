import React, { Component } from 'react';
import SliderWeightFactor from './components/SliderWeightFactor';
import ControlSwitchButton from './components/ControlSwitchButton';
import FluidTemp from './components/FluidTemp';
import MotorGaugeBar from './components/MotorGaugeBar';
import PanelControlButtonsLeft from './components/PanelControlButtonsLeft';
import PanelControlButtonsRight from './components/PanelControlButtonsRight';
import MotorDonutChart from './components/MotorDonutChart';
import LaserDonutCircleChart from './components/LaserDonutCircleChart';
// import DonutCircleChart from './components/DonutCircleChart';
import LaserDonutDigitalChart from './components/LaserDonutDigitalChart';
import LaserBarChart from './components/LaserBarChart';
import LaserBarChartMiddle from './components/LaserBarChartMiddle';
import LaserTabContainer from './components/LaserTabContainer';
import TrailerBogieDescTab from './components/TrailerBogieDescTab'

import { connect } from 'react-redux';
import { getSocketCommand } from './utils/functions';

import {
  setTuningFront1Pgain, setTuningFront1Igain, setTuningRear1Pgain, setTuningRear1Igain,
  setTuningFront2Pgain, setTuningFront2Igain, setTuningRear2Pgain, setTuningRear2Igain,
  setCarMass, setCurrentAValue,
} from './actions'

class ViewM3Setup extends Component {
  constructor(props) {
    super(props);
    
    this.hostname = '192.168.1.2'; 
    // this.hostname = window.location.hostname;

    this.onTuningFront1PgainChange = this.onTuningFront1PgainChange.bind(this);
    this.onTuningFront1IgainChange = this.onTuningFront1IgainChange.bind(this); 
    this.onTuningRear1PgainChange = this.onTuningRear1PgainChange.bind(this);
    this.onTuningRear1IgainChange = this.onTuningRear1IgainChange.bind(this);
    this.onTuningFront2PgainChange = this.onTuningFront2PgainChange.bind(this);
    this.onTuningFront2IgainChange = this.onTuningFront2IgainChange.bind(this);
    this.onTuningRear2PgainChange = this.onTuningRear2PgainChange.bind(this); 
    this.onTuningRear2IgainChange = this.onTuningRear2IgainChange.bind(this);

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
  onTuningFront1PgainChange(value){
    const command = getSocketCommand('HSO_002', value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningFront1Pgain(value));
  }
  onTuningFront1IgainChange(value){
    const command = getSocketCommand('HSO_003', value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningFront1Igain(value));
  } 
  onTuningRear1PgainChange(value){
    const command = getSocketCommand('HSO_006', value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningRear1Pgain(value));
  }
  onTuningRear1IgainChange(value){
    const command = getSocketCommand('HSO_007', value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningRear1Igain(value));
  }
  onTuningFront2PgainChange(value){
    const command = getSocketCommand('HSO_004', value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningFront2Pgain(value));
  }
  onTuningFront2IgainChange(value){
    const command = getSocketCommand('HSO_005', value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningFront2Igain(value));
  }
  onTuningRear2PgainChange(value){
    const command = getSocketCommand('HSO_008', value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningRear2Pgain(value));
  }
  onTuningRear2IgainChange(value){
    const command = getSocketCommand('HSO_009', value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningRear2Igain(value));
  }
  onCarMassChange(value) {
    const command = getSocketCommand('HSO_001', value == 'RUN' ? 0:1);
    this.sendCommandToDevice(command);
    
    const { dispatch } = this.props;
    dispatch(setCarMass(value));
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
    const { 
      frontLeftMotorData,
      frontRightMotorData,
      rearLeftMotorData,
      rearRightMotorData,
      frontLaserData,
      rearLaserData,
      frontSensorData,
      rearSensorData,
      motorControlData,

      tuningFront1Pgain, tuningFront1Igain, tuningRear1Pgain, tuningRear1Igain,
      tuningFront2Pgain, tuningFront2Igain, tuningRear2Pgain, tuningRear2Igain,
      carMass, currentAValue,
    } = this.props;
    // console.log('frontLeftMotorData.data', frontLeftMotorData.data);
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
                <span style={{ color: '#00CCDE', fontSize: '34px', fontWeight: 'bold' }}>
                  HSC <span style={{ color: '#FFF' }}>TEST SETUP MONITOR</span>
                </span>
                <span style={{ paddingLeft: '14px',  color: '#BECED8', fontSize: '17px', fontWeight: 'bold' }}>Hydraulic Steering Cylinder Control</span>
              </div>              
            </div>
            <div className="headRight pull-right">                
              hyundai rotem company
            </div>
          </div>
          <div className="conBoxArea">
            <div className="setupSection pull-left">
              <div className="setupBoxArea hsc">
                <div className="setupBox pull-left">
                  <div className="setupBoxTitle">
                    pi gain tuning-front
                  </div>
                  <div className="setupBoxCon">
                    <div className="setTitle">
                        <div className="setupTitle">
                          p gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            // value="-15"
                            value={tuningFront1Pgain}
                            onChange={this.onTuningFront1PgainChange}
                          />
                        </div>
                        <div className="setupTitle">
                          i gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            // value="-5"
                            value={tuningFront1Igain}
                            onChange={this.onTuningFront1IgainChange}
                          />
                        </div>
                    </div>
                  </div>
                </div>
                <div className="setupBox pull-right">
                  <div className="setupBoxTitle">
                    pi gain tuning-rear
                  </div>
                  <div className="setupBoxCon">
                        <div className="setupTitle">
                          p gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            // value="-10"
                            value={tuningRear1Pgain}
                            onChange={this.onTuningRear1PgainChange}
                          />
                        </div>
                        <div className="setupTitle">
                          i gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            // value="-0"
                            value={tuningRear1Igain}
                            onChange={this.onTuningRear1IgainChange}
                          />
                        </div>
                  </div>
                </div>
              </div>
              <div className="setupBoxArea hsc">
                <div className="setupBox pull-left">
                  <div className="setupBoxTitle">
                    pi gain tuning-front
                  </div>
                  <div className="setupBoxCon">
                    <div className="setTitle">
                        <div className="setupTitle">
                          p gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            // value="-15"
                            value={tuningFront2Pgain}
                            onChange={this.onTuningFront2PgainChange}
                          />
                        </div>
                        <div className="setupTitle">
                          i gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            // value="-5"
                            value={tuningFront2Igain}
                            onChange={this.onTuningFront2IgainChange}
                          />
                        </div>
                    </div>
                  </div>
                </div>
                <div className="setupBox pull-right">
                  <div className="setupBoxTitle">
                    pi gain tuning-rear
                  </div>
                  <div className="setupBoxCon">
                        <div className="setupTitle">
                          p gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            // value="-10"
                            value={tuningRear2Pgain}
                            onChange={this.onTuningRear2PgainChange}
                          />
                        </div>
                        <div className="setupTitle">
                          i gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor
                            value="-0"
                            value={tuningRear2Igain}
                            onChange={this.onTuningRear2IgainChange}
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
                          data={frontLeftMotorData.data.rpm} 
                          max="5000"
                          unit="kgf" 
                          name="STEER FORCE" 
                          dataName = 'force'
                          strokeColor="rgba(201,53,53,0.7)" 
                          strokeColorLine="rgba(255,255,255,0.2)" 
                          donutWidth="47px" 
                          donutStrokeWidth="6"
                          valueFontSize="22px"
                          valueFontColor="#fff"
                        />
                      </div>
                      <div className="setPiedata-pieGrape pie2">
                        <LaserDonutCircleChart 
                          data={frontSensorData.data.leftLvdtS} 
                          shift="25"
                          max="50"
                          unit="mm" 
                          name="LVDT" 
                          dataName = 'lvdt'
                          strokeColor="rgba(44,106,170,0.7)" 
                          strokeColorLine="rgba(255,255,255,0.2)" 
                          donutWidth="47px" 
                          donutStrokeWidth="6"
                          valueFontSize="22px"
                          valueFontColor="#fff"
                        />
                      </div>
                      <div className="setPiedata-pieGrape pie3">
                        <LaserDonutCircleChart 
                          data={frontRightMotorData.data.rpm} 
                          max="5000"
                          unit="kgf" 
                          name="STEER FORCE" 
                          dataName = 'force'
                          strokeColor="rgba(201,53,53,0.7)" 
                          strokeColorLine="rgba(255,255,255,0.2)" 
                          donutWidth="47px" 
                          donutStrokeWidth="6"
                          valueFontSize="22px"
                          valueFontColor="#fff"
                        />
                      </div>
                      <div className="setPiedata-pieGrape pie4">
                        <LaserDonutCircleChart 
                          data={frontSensorData.data.rightLvdtS} 
                          shift="25"
                          max="50"
                          unit="mm" 
                          name="LVDT" 
                          dataName = 'lvdt'
                          strokeColor="rgba(44,106,170,0.7)" 
                          strokeColorLine="rgba(255,255,255,0.2)" 
                          donutWidth="47px" 
                          donutStrokeWidth="6"
                          valueFontSize="22px"
                          valueFontColor="#fff"
                        />
                      </div>
                      <div className="setPiedata-pieGrape pieCenter">         
                        <LaserDonutDigitalChart 
                          data={frontSensorData.data.gyroZ}
                          shift="3.5"
                          max="7"
                          unit="°" 
                          name="GYRO - Z" 
                          dataName="frontG"
                          strokeColor="rgba(137,182,89,1)" 
                          strokeColorLine="rgba(137,182,89,0.3)" 
                          donutWidth="112px" 
                          donutStrokeWidth="10"
                          valueFontSize="35px"
                          valueFontColor="#fff"
                        />
                      </div>
                    </div>
                    <div className="setPiedata-pieGroups pull-right">
                      <div className="setPiedata-pieGrape pie1">
                        <LaserDonutCircleChart 
                          data={rearLeftMotorData.data.rpm} 
                          max="5000"
                          unit="kgf" 
                          name="STEER FORCE" 
                          dataName = 'force'
                          strokeColor="rgba(201,53,53,0.7)" 
                          strokeColorLine="rgba(255,255,255,0.2)" 
                          donutWidth="47px" 
                          donutStrokeWidth="6"
                          valueFontSize="22px"
                          valueFontColor="#fff"
                        />
                      </div>
                      <div className="setPiedata-pieGrape pie2">
                        <LaserDonutCircleChart 
                          data={rearSensorData.data.leftLvdtS} 
                          shift="25"
                          max="50"
                          unit="mm" 
                          name="LVDT" 
                          dataName = 'lvdt'
                          strokeColor="rgba(44,106,170,0.7)" 
                          strokeColorLine="rgba(255,255,255,0.2)" 
                          donutWidth="47px" 
                          donutStrokeWidth="6"
                          valueFontSize="22px"
                          valueFontColor="#fff"
                        />
                      </div>
                      <div className="setPiedata-pieGrape pie3">
                        <LaserDonutCircleChart 
                          data={rearRightMotorData.data.rpm} 
                          max="5000"
                          unit="kgf" 
                          name="STEER FORCE" 
                          dataName = 'force'
                          strokeColor="rgba(201,53,53,0.7)" 
                          strokeColorLine="rgba(255,255,255,0.2)" 
                          donutWidth="47px" 
                          donutStrokeWidth="6"
                          valueFontSize="22px"
                          valueFontColor="#fff"
                        />
                      </div>
                      <div className="setPiedata-pieGrape pie4">
                        <LaserDonutCircleChart 
                          data={rearSensorData.data.rightLvdtS} 
                          shift="25"
                          max="50"
                          unit="mm" 
                          name="LVDT" 
                          dataName = 'lvdt'
                          strokeColor="rgba(44,106,170,0.7)" 
                          strokeColorLine="rgba(255,255,255,0.2)" 
                          donutWidth="47px" 
                          donutStrokeWidth="6"
                          valueFontSize="22px"
                          valueFontColor="#fff"
                        />
                      </div>
                      <div className="setPiedata-pieGrape pieCenter">
                        <LaserDonutDigitalChart 
                          data={rearSensorData.data.gyroZ} 
                          shift="3.5"
                          max="7"
                          unit="°" 
                          name="GYRO - Z" 
                          dataName="rearG"
                          strokeColor="rgba(137,182,89,1)" 
                          strokeColorLine="rgba(137,182,89,0.3)" 
                          donutWidth="112px" 
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
                 trailer bogie description
                </div>
                  <TrailerBogieDescTab onChange={this.onCarMassChange} />
              </div>
              <PanelControlButtonsLeft />
            </div>
            <div className="setupSection pull-right">
              <div className="setupBoxArea">
                <div className="setupBox2 pull-left">
                  <div className="setupBoxTitle">
                    front left cylinder
                  </div>
                  <div className="setupBoxCon">
                    <div className="setupMotorGraph pull-left">
                      <div className="setupMotorGraphList">
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontLeftMotorData.data.a} 
                            unit="Bar" 
                            name="A-press" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48px" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontLeftMotorData.data.b} 
                            unit="Bar" 
                            name="B-press" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48px" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                      </div>{/*setupMotorGraphList END*/}
                      <div className="setupMotorGraphList">
                        <FluidTemp data={frontLeftMotorData.data.temp}/>
                      </div>
                      <div className="setupMotorGraphList">
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontLeftMotorData.data.rpm} name="force" unit="kgf" max="10000" shift="5000" />
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontLeftMotorData.data.torque} name="stroke" unit="mm" max="50" shift="25" />
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="/img/setup-hsc-motor.png"/>
                    </div>
                  </div>
                </div>
                <div className="setupBox2 pull-right">
                  <div className="setupBoxTitle">
                    front right cylinder
                  </div>
                  <div className="setupBoxCon">
                    <div className="setupMotorGraph pull-left">
                      <div className="setupMotorGraphList">
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontRightMotorData.data.a} 
                            unit="Bar" 
                            name="A-press" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48px" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={frontRightMotorData.data.b} 
                            unit="Bar" 
                            name="B-press" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48px" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                      </div>{/*setupMotorGraphList END*/}
                      <div className="setupMotorGraphList">
                        <FluidTemp data={frontRightMotorData.data.temp}/>
                      </div>
                      <div className="setupMotorGraphList">
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontRightMotorData.data.rpm} name="force" unit="kgf" max="10000" shift="5000" />
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontRightMotorData.data.torque} name="stroke" unit="mm" max="50" shift="25" />
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="/img/setup-hsc-motor.png"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setupBoxArea marginTop10">
                <div className="setupBox2 pull-left">
                  <div className="setupBoxTitle">
                    rear left cylinder
                  </div>
                  <div className="setupBoxCon">
                    <div className="setupMotorGraph pull-left">
                      <div className="setupMotorGraphList">
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearLeftMotorData.data.a} 
                            unit="Bar" 
                            name="A-press" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48px" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearLeftMotorData.data.b} 
                            unit="Bar" 
                            name="B-press" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48px" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                      </div>{/*setupMotorGraphList END*/}
                      <div className="setupMotorGraphList">
                        <FluidTemp data={rearLeftMotorData.data.temp}/>
                      </div>
                      <div className="setupMotorGraphList">
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearLeftMotorData.data.rpm} name="force" unit="kgf" max="10000" shift="5000"/>
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearLeftMotorData.data.torque} name="stroke" unit="mm" max="50" shift="25"/>
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="/img/setup-hsc-motor.png"/>
                    </div>
                  </div>
                </div>
                <div className="setupBox2 pull-right">
                  <div className="setupBoxTitle">
                    rear right cylinder
                  </div>
                  <div className="setupBoxCon">
                    <div className="setupMotorGraph pull-left">
                      <div className="setupMotorGraphList">
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearRightMotorData.data.a} 
                            unit="Bar" 
                            name="A-press" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48px" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                        <div className="pie-graph pull-left">
                          <MotorDonutChart 
                            data={rearRightMotorData.data.b} 
                            unit="Bar" 
                            name="B-press" 
                            strokeColor="#fff" 
                            strokeColorLine="rgba(255,255,255,0.3)" 
                            donutWidth="48px" 
                            donutStrokeWidth="6"
                            valueFontSize="35px"
                            valueFontColor="#fff"
                          />
                        </div>
                      </div>{/*setupMotorGraphList END*/}
                      <div className="setupMotorGraphList">
                        <FluidTemp data={rearRightMotorData.data.temp}/>
                      </div>
                      <div className="setupMotorGraphList">
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearRightMotorData.data.rpm} name="force" unit="kgf" max="10000" shift="5000" />
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearRightMotorData.data.torque} name="stroke" unit="mm" max="50" shift="25" />
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="/img/setup-hsc-motor.png"/>
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
                      <img
                        style ={{
                          marginBottom: '8px' 
                        }} 
                        src="/img/sensor-left.png"
                      />
                      <div className="axleTitle">
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block',
                            float: 'left'
                          }}
                        >A-p</span>
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block'
                          }}
                        >B-p</span>
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block',
                            float: 'right'
                          }}
                        >LVDT</span>
                      </div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.leftApA} name="A" dataName="leftApA" barColor="red" max="500" />
                          <LaserBarChartMiddle data={frontSensorData.data.leftApS} name="S" dataName="leftApS" barColor="red" min="-500" max="500" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.leftBpA} name="A" dataName="leftBpA" barColor="red" max="500" />
                          <LaserBarChartMiddle data={frontSensorData.data.leftBpS} name="S" dataName="leftBpS" barColor="red" min="-500" max="500" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartMiddle data={frontSensorData.data.leftLvdtA} name="A" dataName="leftLvdtA" barColor="blue" min="-25" max="25" />
                          <LaserBarChartMiddle data={frontSensorData.data.leftLvdtS} name="S" dataName="leftLvdtS" barColor="blue" min="-25" max="25" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <img
                        style ={{
                          marginBottom: '8px' 
                        }} 
                        src="/img/sensor-right.png"
                      />
                      <div className="axleTitle">
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block',
                            float: 'left'
                          }}
                        >A-p</span>
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block'
                          }}
                        >B-p</span>
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block',
                            float: 'right'
                          }}
                        >LVDT</span>
                      </div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.rightApA} name="A" dataName="rightApA" barColor="red" max="500" />
                          <LaserBarChartMiddle data={frontSensorData.data.rightApS} name="S" dataName="rightApS" barColor="red" min="-500" max="500" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.rightBpA} name="A" dataName="rightBpA" barColor="red" max="500" />
                          <LaserBarChartMiddle data={frontSensorData.data.rightBpS} name="S" dataName="rightBpS" barColor="red" min="-500" max="500"/>
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartMiddle data={frontSensorData.data.rightLvdtA} name="A" dataName="rightLvdtA" barColor="blue" min="-25" max="25" />
                          <LaserBarChartMiddle data={frontSensorData.data.rightLvdtS} name="S" dataName="rightLvdtS" barColor="blue" min="-25" max="25" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div
                        style={{
                          height: '22px'
                        }}
                      ></div>
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartMiddle data={frontSensorData.data.gyroA} name="A" dataName="gA" barColor="green" min="-3.5" max="3.5" />
                          <LaserBarChartMiddle data={frontSensorData.data.gyroS} name="S" dataName="gS" barColor="green" min="-3.5" max="3.5" />
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
                      <img
                        style ={{
                          marginBottom: '8px' 
                        }} 
                        src="/img/sensor-left.png"
                      />
                      <div className="axleTitle">
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block',
                            float: 'left'
                          }}
                        >A-p</span>
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block'
                          }}
                        >B-p</span>
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block',
                            float: 'right'
                          }}
                        >LVDT</span>
                      </div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.leftApA} name="A" dataName="leftApA" barColor="red" max="500" />
                          <LaserBarChartMiddle data={rearSensorData.data.leftApS} name="S" dataName="leftApS" barColor="red" min="-500" max="500" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.leftBpA} name="A" dataName="leftBpA" barColor="red" max="500" />
                          <LaserBarChartMiddle data={rearSensorData.data.leftBpS} name="S" dataName="leftBpS" barColor="red" min="-500" max="500" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartMiddle data={rearSensorData.data.leftLvdtA} name="A" dataName="leftLvdtA" barColor="blue" min="-25" max="25" />
                          <LaserBarChartMiddle data={rearSensorData.data.leftLvdtS} name="S" dataName="leftLvdtS" barColor="blue" min="-25" max="25" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <img
                        style ={{
                          marginBottom: '8px' 
                        }} 
                        src="/img/sensor-right.png"
                      />
                      <div className="axleTitle">
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block',
                            float: 'left'
                          }}
                        >A-p</span>
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block'
                          }}
                        >B-p</span>
                        <span
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            display:'inline-block',
                            float: 'right'
                          }}
                        >LVDT</span>
                      </div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.rightApA} name="A" dataName="rightApA" barColor="red" max="500" />
                          <LaserBarChartMiddle data={rearSensorData.data.rightApS} name="S" dataName="rightApS" barColor="red" max="500" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.rightBpA} name="A" dataName="rightBpA" barColor="red" max="500" />
                          <LaserBarChartMiddle data={rearSensorData.data.rightBpS} name="S" dataName="rightBpS" barColor="red" min="-500" max="500" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartMiddle data={rearSensorData.data.rightLvdtA} name="A" dataName="rightLvdtA" barColor="blue" min="-25" max="25" />
                          <LaserBarChartMiddle data={rearSensorData.data.rightLvdtS} name="S" dataName="rightLvdtS" barColor="blue" min="-25" max="25" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div
                        style={{
                          height: '22px'
                        }}
                      ></div>
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartMiddle data={rearSensorData.data.gyroA} name="A" dataName="gA" barColor="green" min="-3.5" max="3.5" />
                          <LaserBarChartMiddle data={rearSensorData.data.gyroS} name="S" dataName="gS" barColor="green" min="-3.5" max="3.5" />
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
  // console.log('state.frontLeftMotorData', state.frontLeftMotorData);  
  return {
      frontLeftMotorData: state.frontLeftMotorData,
      frontRightMotorData: state.frontRightMotorData,
      rearLeftMotorData: state.rearLeftMotorData,
      rearRightMotorData: state.rearRightMotorData,
      frontLaserData: state.frontLaserData,
      rearLaserData: state.rearLaserData,
      frontSensorData: state.frontSensorData,
      rearSensorData: state.rearSensorData,
      motorControlData: state.motorControlData,
      
      tuningFront1Pgain: state.setSetupButtons.tuningFront1Pgain,
      tuningFront1Igain: state.setSetupButtons.tuningFront1Igain, 
      tuningRear1Pgain: state.setSetupButtons.tuningRear1Pgain, 
      tuningRear1Igain: state.setSetupButtons.tuningRear1Igain,
      tuningFront2Pgain: state.setSetupButtons.tuningFront2Pgain,
      tuningFront2Igain: state.setSetupButtons.tuningFront2Igain,
      tuningRear2Pgain: state.setSetupButtons.tuningRear2Pgain,
      tuningRear2Igain: state.setSetupButtons.tuningRear2Igain,
      currentAValue: state.setSetupButtons.currentAValue,
    }
}

export default connect(mapStateToProps)(ViewM3Setup);
