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
import LaserTabContainer from './components/LaserTabContainer';
import MotorBogieDescTab from './components/MotorBogieDescTab';

import { connect } from 'react-redux';

import { setTuningFrontPgain, setTuningFrontIgain, setTuningRearPgain, setTuningRearIgain } from './actions';

class ViewM1Setup extends Component {
  constructor(props){
    super(props);
    this.onTuningFrontPgainChange = this.onTuningFrontPgainChange.bind(this);
    this.onTuningFrontIgainChange = this.onTuningFrontIgainChange.bind(this);
    this.onTuningRearPgainChange = this.onTuningRearPgainChange.bind(this);
    this.onTuningRearIgainChange = this.onTuningRearIgainChange.bind(this);

    // this.hostname = '192.168.1.2'; // window.location.hostname;
    this.hostname = window.location.hostname;

  }
  onTuningFrontPgainChange(value){
    const command = '#ISO_002,{0};$'.format(value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningFrontPgain(value));
  }
  onTuningFrontIgainChange(value){
    const command = '#ISO_003,{0};$'.format(value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningFrontIgain(value));
  }
  onTuningRearPgainChange(value){
    const command = '#ISO_004,{0};$'.format(value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningRearPgain(value));
  }
  onTuningRearIgainChange(value){
    const command = '#ISO_005,{0};$'.format(value);
    this.sendCommandToDevice(command);

    const { dispatch } = this.props;
    dispatch(setTuningRearIgain(value));
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
    } = this.props;
    return (
        <div className="contBox">
          <div className="headArea">
            <div className="headLeft pull-left">
              <img src="/img/titlev1-setup.png" />
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
                          data={frontLeftData.data.laserX} 
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
                          data={frontLeftData.data.laserY} 
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
                          data={rearLeftData.data.laserX} 
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
                          data={rearLeftData.data.laserY} 
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
                          data={frontRightData.data.gyroZ} 
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
                          data={frontRightData.data.laserX} 
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
                          data={frontRightData.data.laserY} 
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
                          data={rearRightData.data.laserX} 
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
                          data={rearRightData.data.laserY} 
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
                          data={rearRightData.data.gyroZ} 
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
                <MotorBogieDescTab />
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
                          <MotorGaugeBar data={frontLeftMotorData.data.rpm} name="rpm" unit=""/>
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontLeftMotorData.data.torque} name="torque" unit="Nm"/>
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
                          <MotorGaugeBar data={frontRightMotorData.data.rpm} name="rpm" unit=""/>
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={frontRightMotorData.data.torque} name="torque" unit="Nm"/>
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
                          <MotorGaugeBar data={rearLeftMotorData.data.rpm} name="rpm" unit=""/>
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearLeftMotorData.data.torque} name="torque" unit="Nm"/>
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
                          <MotorGaugeBar data={rearRightMotorData.data.rpm} name="rpm" unit=""/>
                        </div>
                        <div className="bar-graph">
                          <MotorGaugeBar data={rearRightMotorData.data.torque} name="torque" unit="Nm"/>
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
                          <LaserBarChart data={frontSensorData.data.ly1A} name="A" dataName="ly1A" barColor="red" />
                          <LaserBarChart data={frontSensorData.data.ly1S} name="S" dataName="ly1S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.ly2A} name="A" dataName="ly2A" barColor="red" />
                          <LaserBarChart data={frontSensorData.data.ly2S} name="S" dataName="ly2S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.lxA} name="A" dataName="rxA" barColor="blue" />
                          <LaserBarChart data={frontSensorData.data.lxS} name="S" dataName="rxS" barColor="blue" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <div className="axleTitle">right laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.ry1A} name="A" dataName="ry1A" barColor="red" />
                          <LaserBarChart data={frontSensorData.data.ry1S} name="S" dataName="ry1S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.ry2A} name="A" dataName="ry2A" barColor="red" />
                          <LaserBarChart data={frontSensorData.data.ry2S} name="S" dataName="ry2S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.rxA} name="A" dataName="rxA" barColor="blue" />
                          <LaserBarChart data={frontSensorData.data.rxS} name="S" dataName="rxS" barColor="blue" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={frontSensorData.data.gA} name="A" dataName="gA" barColor="green" />
                          <LaserBarChart data={frontSensorData.data.gS} name="S" dataName="gS" barColor="green" />
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
                          <LaserBarChart data={rearSensorData.data.ly1A} name="A" dataName="ly1A" barColor="red" />
                          <LaserBarChart data={rearSensorData.data.ly1S} name="S" dataName="ly1S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.ly2A} name="A" dataName="ly2A" barColor="red" />
                          <LaserBarChart data={rearSensorData.data.ly2S} name="S" dataName="ly2S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.lxA} name="A" dataName="rxA" barColor="blue" />
                          <LaserBarChart data={rearSensorData.data.lxS} name="S" dataName="rxS" barColor="blue" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <div className="axleTitle">right laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.ry1A} name="A" dataName="ry1A" barColor="red" />
                          <LaserBarChart data={rearSensorData.data.ry1S} name="S" dataName="ry1S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.ry2A} name="A" dataName="ry2A" barColor="red" />
                          <LaserBarChart data={rearSensorData.data.ry2S} name="S" dataName="ry2S" barColor="red" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.rxA} name="A" dataName="rxA" barColor="blue" />
                          <LaserBarChart data={rearSensorData.data.rxS} name="S" dataName="rxS" barColor="blue" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChart data={rearSensorData.data.gA} name="A" dataName="gA" barColor="green" />
                          <LaserBarChart data={rearSensorData.data.gS} name="S" dataName="gS" barColor="green" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="setupBox setupBoxAxleBtn">
                  <div className="setupBoxAxleBtnBox">
                    <a href="">SET</a>
                    <a href="">ORG</a>
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
    // console.log('itcsetup',state.setItcSetupFrontRightData);
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
      
    }
}

export default connect(mapStateToProps)(ViewM1Setup);
