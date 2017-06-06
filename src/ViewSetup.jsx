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
import LaserBarChartA from './components/LaserBarChartA'
import LaserBarChartS from './components/LaserBarChartS'

import { connect } from 'react-redux';

class ViewSetup extends Component {
  render() {
    const { 
      frontLeftMotorData,
      frontRightMotorData,
      rearLeftMotorData,
      rearRightMotorData,
      frontLaserData,
      rearLaserData,
      motorControlData
    } = this.props;
    return (
        <div className="contBox">
          <div className="headArea">
            <div className="headLeft pull-left">
              <img src="img/titlev1-setup.png" />
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
                          <SliderWeightFactor value="-15" />
                        </div>
                        <div className="setupTitle">
                          i gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor value="-5" />
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
                          <SliderWeightFactor value="-10" />
                        </div>
                        <div className="setupTitle">
                          i gain
                        </div>
                        <div className="setupGainTunning">
                          <SliderWeightFactor value="-0" />
                        </div>
                  </div>
                </div>
              </div>
              <div className="setupBox x2 noneTitle marginTop10">
                  <div className="setupBoxCon">
                    <div className="setPiedata-image">
                        <img src="img/sample/setupsample1.png"/>
                    </div>
                    <div className="setPiedata-btns graphBtnBox">
                      <a href="">FRT</a>
                      <a href="" className="active">SIDE</a>
                    </div>
                    <div className="setPiedata-pieGroups pull-left">
                      <div className="setPiedata-pieGrape pie1">
                        <LaserDonutCircleChart 
                          data={frontLaserData.data.lx} 
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
                          data={frontLaserData.data.ly} 
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
                          data={rearLaserData.data.lx} 
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
                          data={rearLaserData.data.ly} 
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
                          data={frontLaserData.data.g} 
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
                          data={frontLaserData.data.rx} 
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
                          data={frontLaserData.data.ry} 
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
                          data={rearLaserData.data.rx} 
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
                          data={rearLaserData.data.ry} 
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
                          data={rearLaserData.data.g} 
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
                  <div className="setupBoxCon setupBoxConDesc">
                    <div className="setupDescBox pull-left">
                      <ul className="modeConfig3-list setupDescList">
                        <li>
                            <span>WEELBASE</span>
                            <span>:</span>
                            <span>1. 8 m</span>
                        </li>
                        <li>
                            <span>WEIGHT</span>
                            <span>:</span>
                            <span>7.0 ton</span>
                        </li>
                        <li>
                            <span>WHEEL DIA</span>
                            <span>:</span>
                            <span>660 mm</span>
                        </li>
                        <li>
                            <span>BOGIE DIST</span>
                            <span>:</span>
                            <span>18 m</span>
                        </li>
                        <li>
                            <span>BRAKE SYSTEM</span>
                            <span>:</span>
                            <span>Hydraulic</span>
                        </li>
                        <li>
                            <span>Traction Link</span>
                            <span>:</span>
                            <span>Mono Link</span>
                        </li>
                      </ul>
                    </div>
                    <div className="setupDescBox pull-right">
                      <ul className="modeConfig3-list setupDescList">
                        <li>
                            <span>Primary Spring</span>
                            <span>:</span>
                            <span>Rubber</span>
                        </li>
                        <li>
                            <span>Max Disp. X</span>
                            <span>:</span>
                            <span>14 mm</span>
                        </li>
                        <li>
                            <span>Max Disp. Y</span>
                            <span>:</span>
                            <span>6 mm</span>
                        </li>
                        <li>
                            <span>Motor Type</span>
                            <span>:</span>
                            <span>PMSM</span>
                        </li>
                        <li>
                            <span>MAX BRAKE PRESSURE</span>
                            <span>:</span>
                            <span>300Pa</span>
                        </li>
                        <li>
                            <span>MAX MOTOR TORQUE</span>
                            <span>:</span>
                            <span>500Nm</span>
                        </li>
                      </ul>
                    </div>
                    <div className="setupDescBoxBtns pull-right">
                      <ControlSwitchButton 
                        title="Car MASS" 
                        activeBgColor="rgba(255,255,255,0.3)" 
                        textColor="#fff" 
                        padding="3px 20px" 
                        buttons={[
                          { idx: 1, title: 'TARE', value: 'TARE' }, 
                          { idx: 2, title: 'FULL', value: 'FULL' }
                        ]}
                      />
                    </div>
                  </div>
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
                        <div className="bar-graph pull-left">
                          <MotorGaugeBar data={frontLeftMotorData.data.rpm} name="rpm" unit=""/>
                        </div>
                        <div className="bar-graph pull-right">
                          <MotorGaugeBar data={frontLeftMotorData.data.torque} name="torque" unit="Nm"/>
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="img/sample/setup-motor.png"/>
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
                        <div className="bar-graph pull-left">
                          <MotorGaugeBar data={frontRightMotorData.data.rpm} name="rpm" unit=""/>
                        </div>
                        <div className="bar-graph pull-right">
                          <MotorGaugeBar data={frontRightMotorData.data.torque} name="torque" unit="Nm"/>
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="img/sample/setup-motor.png"/>
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
                        <div className="bar-graph pull-left">
                          <MotorGaugeBar data={rearLeftMotorData.data.rpm} name="rpm" unit=""/>
                        </div>
                        <div className="bar-graph pull-right">
                          <MotorGaugeBar data={rearLeftMotorData.data.torque} name="torque" unit="Nm"/>
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="img/sample/setup-motor.png"/>
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
                        <div className="bar-graph pull-left">
                          <MotorGaugeBar data={rearRightMotorData.data.rpm} name="rpm" unit=""/>
                        </div>
                        <div className="bar-graph pull-right">
                          <MotorGaugeBar data={rearRightMotorData.data.torque} name="torque" unit="Nm"/>
                        </div>
                      </div>
                    </div>
                    <div className="setupMotorImage pull-right">
                      <img src="img/sample/setup-motor.png"/>
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
                          <LaserBarChartA data={frontLaserData.data.lx} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                          {/*세팅값을 입력하면 고정되는 구조인지?고정값이면 구체적 수치입력방법(=5.5)vs퍼센트입력방법(=55) 현재는 수치입력으로 해놓음*/}
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={frontLaserData.data.lx} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={frontLaserData.data.ly} dataName="ly" barColor="rgba(201,53,53,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="ly" barColor="rgba(201,53,53,0.7)" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <div className="axleTitle">right laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={frontLaserData.data.rx} dataName="rx" barColor="rgba(44,106,170,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="rx" barColor="rgba(44,106,170,0.7)" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={frontLaserData.data.rx} dataName="rx" barColor="rgba(44,106,170,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="rx" barColor="rgba(44,106,170,0.7)" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={frontLaserData.data.ry} dataName="ry" barColor="rgba(201,53,53,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="ry" barColor="rgba(201,53,53,0.7)" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={frontLaserData.data.g} dataName="g" barColor="rgba(137,182,89,1)" />
                          <LaserBarChartS fillHeight={3} dataName="g" barColor="rgba(137,182,89,1)" />
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
                          <LaserBarChartA data={rearLaserData.data.lx} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={rearLaserData.data.lx} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={rearLaserData.data.ly} dataName="ly" barColor="rgba(201,53,53,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="ly" barColor="rgba(201,53,53,0.7)" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <div className="axleTitle">right laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={rearLaserData.data.rx} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="rx" barColor="rgba(44,106,170,0.7)" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={rearLaserData.data.rx} dataName="lx" barColor="rgba(44,106,170,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="rx" barColor="rgba(44,106,170,0.7)" />
                        </div>
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={rearLaserData.data.ry} dataName="ly" barColor="rgba(201,53,53,0.7)" />
                          <LaserBarChartS fillHeight={5} dataName="ry" barColor="rgba(201,53,53,0.7)" />
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <LaserBarChartA data={rearLaserData.data.g} dataName="g" barColor="rgba(137,182,89,1)" />
                          <LaserBarChartS fillHeight={3} dataName="g" barColor="rgba(137,182,89,1)" />
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
    return {
      frontLeftMotorData: state.frontLeftMotorData,
      frontRightMotorData: state.frontRightMotorData,
      rearLeftMotorData: state.rearLeftMotorData,
      rearRightMotorData: state.rearRightMotorData,
      frontLaserData: state.frontLaserData,
      rearLaserData: state.rearLaserData,
      motorControlData: state.motorControlData
    }
}

export default connect(mapStateToProps)(ViewSetup);
