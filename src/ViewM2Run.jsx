import React, { Component } from 'react';
import DriveDonutDivideLeftChart from './components/DriveDonutDivideLeftChart';
import DriveRailroadTrail2 from './components/DriveRailroadTrail2';
import RailDonutPanelLeft from './components/RailDonutPanelLeft'
import RailDonutPanelRight from './components/RailDonutPanelRight'
// import RailDonutGraphLeft from './components/RailDonutGraphLeft'
// import RailDonuGraphRight from './components/RailDonutGraphRight'

import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/src/Keyboard.css';
import Clock from 'react-live-clock';
import { connect } from 'react-redux';

import { getHostName, sendCommandToDevice } from './utils/functions';
import { H5SPlayVideo } from './utils/H5SPlayVideo';

// import Script from 'react-load-script'
// import Websocket from 'react-websocket';

class ViewM2Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testLabel: localStorage.getItem('NST_test_label') ? localStorage.getItem('NST_test_label') :'NST 01',
    };

    this.hostname = getHostName();
    this.host = window.location.host;
    this.onTestLabelChange = this.onTestLabelChange.bind(this);
  }
  onTestLabelChange(value) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('NST_test_label', value);
      const command = {
        'SET_NST_test_label': `${value}` 
      }
      sendCommandToDevice(JSON.stringify(command));      
    } 
    this.setState({ testLabel: value });
  }
  componentDidMount(){
    const { runDemo } = this.props;

    const rtspFrontPlayer = new H5SPlayVideo('frontVideo');  
    const rtspRearPlayer = new H5SPlayVideo('rearVideo');

    if (runDemo == 0) {
      rtspFrontPlayer.Start();
      rtspRearPlayer.Start();
    } else {
      alert('demo');
    }

   
  }
  render() {
    const { 
      driveData, driveLever, runDirection, driveMode, runDemo
      //,runSwitch
    } = this.props;

    let driveLeverValue = 0;
    switch(driveLever) {
      case 0:
        driveLeverValue = -3;
        break;
      case 1:
        driveLeverValue = -2;
        break;
      case 2:
        driveLeverValue = -1;
        break;
      case 3:
        driveLeverValue = 0;
        break;
      case 4:
        driveLeverValue = 1;
        break;
      case 5:
        driveLeverValue = 2;
        break;
      case 6:
        driveLeverValue = 3;        
        break;
    }
    
    const videoFrontSrc = runDirection == 1 ? '/video/train_view_front.mp4' : '/video/train_view_back.mp4';
    const videoRearSrc = runDirection == 0 ? '/video/train_view_front.mp4' : '/video/train_view_back.mp4';
    // const moviePlay = runSwitch == 0 ? false : true;

    return (
      <div ref={el => (this.instance = el)}>
        <div className="trainControlBox tcBoxLeft">
          <div className="tcTitle">
            hyundai rotem company
          </div>
          <div
            style = {{
              marginTop: '80px'
            }}
          >
          </div>
          <div className="tcBatteryPieBox">
              <DriveDonutDivideLeftChart 
                data={driveData.data.tracBatt} 
                unit="V" 
                name="traction battery" 
                strokeColor="rgba(201,53,53,0.7)" 
                strokeColorLine="rgba(255,255,255,0.7)" 
                donutWidth="50" 
                donutStrokeWidth="8"
                valueFontSize="25px"
                valueFontColor="#fff"
              />
          </div>
          <div className="tcBatteryPieBox">
              <DriveDonutDivideLeftChart 
                data={driveData.data.contBatt} 
                unit="V" 
                name="control battery" 
                strokeColor="rgba(201,53,53,0.7)" 
                strokeColorLine="rgba(255,255,255,0.7)" 
                donutWidth="50" 
                donutStrokeWidth="8"
                valueFontSize="25px"
                valueFontColor="#fff"
              />
          </div>
          <div className="tcBatteryPieBox">
              <DriveDonutDivideLeftChart 
                data={driveData.data.maxInvTemp} 
                unit="℃" 
                name="max INVERTER temp" 
                strokeColor="rgba(201,195,53,0.85)" 
                strokeColorLine="rgba(255,255,255,0.7)" 
                donutWidth="50" 
                donutStrokeWidth="8"
                valueFontSize="25px"
                valueFontColor="#fff"
              />
          </div>
          <div className="tcBatteryPieBox">
              <DriveDonutDivideLeftChart 
                data={driveData.data.maxMotorTemp} 
                unit="℃" 
                name="max motor temp" 
                strokeColor="rgba(201,195,53,0.85)" 
                strokeColorLine="rgba(255,255,255,0.7)" 
                donutWidth="50" 
                donutStrokeWidth="8"
                valueFontSize="25px"
                valueFontColor="#fff"
              />
          </div>
          <div className="tControlBtnBox" style={{marginTop: '30px'}}>
            <div className="tcBtn">
              <div className="tcbTitle y">power</div>
              <img src={driveData.data.power == 0 ? '/img/tc_toggle_off.png' : '/img/tc_toggle_on.png'}/>
            </div>
            <div className="tcBtn">
              <div className="tcbTitle y">light</div>
              <img src={driveData.data.light == 0 ? '/img/tc_toggle_off.png' : '/img/tc_toggle_on.png'}/>
            </div>
            <div className="tcBtn">
              <div className="tcbTitle r">itc</div>
              <img src={driveData.data.itc == 0 ? '/img/tc_toggle_off.png' : '/img/tc_toggle_on.png'}/>
            </div>
            <div className="tcBtn">
              <div className="tcbTitle b">hsc</div>
              <img src={driveData.data.hsc == 0 ? '/img/tc_toggle_off.png' : '/img/tc_toggle_on.png'}/>
            </div>
          </div>
        </div>
        <div className="trainControlBox tcBoxRight">
          <div className="tcDayCountBox" style={{marginBottom: '25px'}}>
            <div className="tcCountBox">
              <div className="tccTitle">
                test day
              </div>
              <KeyboardedInput
                enabled
                className="tccCount"
                type="text"
                defaultKeyboard="us"
                value={this.state.testLabel}
                onChange={this.onTestLabelChange}
              /> 
            </div>
            <div className="tccDayBox">
              <Clock format={'YYYY.MM.DD ddd HH:mm:ss'} ticking={true} timezone={'Asia/Tokyo'} />
            </div>
          </div>
          <div className="tcPositionBox">
            <div className="tcPosition" style={{width: '204px'}}>
              <DriveRailroadTrail2 value={driveData.data.position} valueMax="250" />
            </div>
          </div>
        </div>
        <div className="trainPie tpLeft">
          <RailDonutPanelLeft data={driveData.data} />
        </div>
        <div className="trainPie tpRight">
          <RailDonutPanelRight data={driveData.data} dType={driveMode} lever={driveLeverValue} />
        </div>
        <div className="contBox">
          <div
            style={{
              position: 'absolute',
              width: '500px',
              top: '85px',
              right: '260px',
              zIndex: '50',
              borderRadius: '15px'
            }}
            className="trainBackViewBox"
          >
            <video
              // id="rearVideo"
              // data-token="token2"
              id={runDirection == 0 ? 'frontVideo':'rearVideo'}
              data-token={runDirection == 0 ? 'token1':'token2'}
              data-h5spath={runDemo == 0 ? '/h5swsapi' : ''}
              autoPlay={runDemo == 1 ? true: false}
              // loop
              style={{
                width: '500px',
                borderRadius: '50px'
              }}
            >
              <source src={runDemo == 1 ? videoRearSrc : ''}></source> 
            </video>
          </div>
          <div className="trainViewVideo">
            <video
              // id="frontVideo"
              // data-token="token1"
              id={runDirection == 1 ? 'frontVideo':'rearVideo'}
              data-token={runDirection == 1 ? 'token1':'token2'}
              // data-h5spath="/h5swsapi"
              data-h5spath={runDemo == 0 ? '/h5swsapi' : ''}
              autoPlay={runDemo == 1 ? true: false}
              // loop
            >
              <source src={runDemo == 1 ? videoFrontSrc : ''}></source>
            </video>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    driveData: state.driveData,
    // DIO Command =================================
    driveMode: state.setM2SetupButtons.driveMode,
    runDirection: state.setM2SetupButtons.runDirection,      
    runSwitch: state.setM2SetupButtons.runSwitch,
    emergencyStop: state.setM2SetupButtons.emergencyStop,
    driveLever: state.setM2SetupButtons.driveLever,
    runDemo: state.setM2SetupButtons.runDemo,
  }
}

export default connect(mapStateToProps)(ViewM2Run);
