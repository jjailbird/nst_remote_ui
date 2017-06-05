import React, { Component } from 'react';
import SliderWeightFactor from './components/SliderWeightFactor';
import ControlSwitchButton from './components/ControlSwitchButton';
import MotorTemp from './components/MotorTemp';
import MotorGaugeBar from './components/MotorGaugeBar';
import PanelControlButtonsLeft from './components/PanelControlButtonsLeft';
import PanelControlButtonsRight from './components/PanelControlButtonsRight';

import { connect } from 'react-redux';

class ViewSetup extends Component {
  render() {
    const { 
      frontLeftMotorData,
      frontRightMotorData,
      rearLeftMotorData,
      rearRightMotorData
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
                          <img src="img/sample/setupsample2.png"/>
                      </div>
                      <div className="setPiedata-pieGrape pie2">
                          <img src="img/sample/setupsample2.png"/>
                      </div>
                      <div className="setPiedata-pieGrape pie3">
                          <img src="img/sample/setupsample2.png"/>
                      </div>
                      <div className="setPiedata-pieGrape pie4">
                          <img src="img/sample/setupsample2.png"/>
                      </div>
                      <div className="setPiedata-pieGrape pieCenter">
                          <img src="img/sample/setupsample3.png"/>
                      </div>
                    </div>
                    <div className="setPiedata-pieGroups pull-right">
                      <div className="setPiedata-pieGrape pie1">
                          <img src="img/sample/setupsample2.png"/>
                      </div>
                      <div className="setPiedata-pieGrape pie2">
                          <img src="img/sample/setupsample2.png"/>
                      </div>
                      <div className="setPiedata-pieGrape pie3">
                          <img src="img/sample/setupsample2.png"/>
                      </div>
                      <div className="setPiedata-pieGrape pie4">
                          <img src="img/sample/setupsample2.png"/>
                      </div>
                      <div className="setPiedata-pieGrape pieCenter">
                          <img src="img/sample/setupsample3.png"/>
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
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                        <div className="pie-graph pull-left">
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                        <div className="pie-graph pull-left">
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                      </div>
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
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                        <div className="pie-graph pull-left">
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                        <div className="pie-graph pull-left">
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                      </div>
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
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                        <div className="pie-graph pull-left">
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                        <div className="pie-graph pull-left">
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                      </div>
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
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                        <div className="pie-graph pull-left">
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                        <div className="pie-graph pull-left">
                          <img src="img/sample/setup-piegraph1.png"/>
                        </div>
                      </div>
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
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                        </div>
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                        </div>
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorRed" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorRed" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <div className="axleTitle">right laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorRed" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorRed" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorGreen" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorGreen" style={{height: '70%'}}></div>
                            </div>
                          </div>
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
                      R : Set Value
                    </small></span>
                  </div>
                  <div className="setupBoxCon">
                    <div className="axleBox axleBox1">
                      <div className="axleTitle">left laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorRed" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorRed" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox2">
                      <div className="axleTitle">right laser sensor</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorRed" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorRed" style={{height: '70%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="axleBox axleBox3">
                      <div className="axleTitle">gyro</div>
                      <div className="axleGraphBox">
                        <div className="axleGraphBoxGroup">
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">A</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorGreen" style={{height: '30%'}}></div>
                            </div>
                          </div>
                          <div className="axleGraphBoxBarGraph">
                            <div className="BarGraphTitle">S</div>
                            <div className="BarGraphOutLine">
                              <div className="BarGraphFill bgColorGreen" style={{height: '70%'}}></div>
                            </div>
                          </div>
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
      rearRightMotorData: state.rearRightMotorData
    }
}

export default connect(mapStateToProps)(ViewSetup);
