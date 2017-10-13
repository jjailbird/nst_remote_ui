import React, { Component } from 'react';
import DriveDonutDivideLeftChart from './components/DriveDonutDivideLeftChart';
import DriveRailroadTrail from './components/DriveRailroadTrail';
import RailDonutPanelLeft from './components/RailDonutPanelLeft'
import RailDonutPanelRight from './components/RailDonutPanelRight'
import RailDonutGraphLeft from './components/RailDonutGraphLeft'
import RailDonuGraphRight from './components/RailDonutGraphRight'

import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/src/Keyboard.css';
import Clock from 'react-live-clock';
import { connect } from 'react-redux';
import { H5SPlayVideo } from './utils/H5SPlayVideo';
// import Script from 'react-load-script'
import Websocket from 'react-websocket';

class ViewM2Run extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testLabel: localStorage.getItem("NST_test_label") ? localStorage.getItem("NST_test_label") :'NST 01',
    };

    this.hostname = window.location.hostname;
    this.host = window.location.host;
    this.onTestLabelChange = this.onTestLabelChange.bind(this);
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
  onTestLabelChange(value) {
    if (typeof(Storage) !== "undefined") {
      // Store
      console.log('localstroage!');
      localStorage.setItem("NST_test_label", value);
      // Retrieve
      // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    } 
    this.setState({ testLabel: value });
  }

  
  componentDidMount(){
    // this.H5SPlayVideo("frontVideo");
    console.log('HSSPlyaer start!');
    const rtspFrontPlayer = new H5SPlayVideo('frontVideo');
    rtspFrontPlayer.Start();
    const rtspRearPlayer = new H5SPlayVideo('rearVideo');
    rtspRearPlayer.Start();

    // this.H5SPlayVideo("rearVideo");
  }
  render() {
    const { 
      driveData, driveLever, runDirection, runSwitch
    } = this.props;

    // console.log('driveData', driveData);
    let driveLeverValue = 0;
    
    switch(driveLever) {
      case "1":
        driveLeverValue = -3;
        break;
      case "2":
        driveLeverValue = -2;
        break;
      case "3":
        driveLeverValue = -1;
        break;
      case "4":
        driveLeverValue = 0;
        break;
      case "5":
      case "6":
        driveLeverValue = 1;
        break;
      case "7":
        driveLeverValue = 2;
        break;
      case "8":
        driveLeverValue = 3;        
        break;
    }
    

    const videoFrontSrc = runDirection == 1 ? "/video/train_view_front.mp4" : "/video/train_view_back.mp4";
    const videoRearSrc = runDirection == 0 ? "/video/train_view_front.mp4" : "/video/train_view_back.mp4";
    const moviePlay = runSwitch == 0 ? false : true;
    // console.log('runDirection', runDirection, videoFrontSrc);
    return (
      <div ref={el => (this.instance = el)}>
        {/*
        <Websocket
          url={`ws://${this.host}/h5sws`}
          onMessage={this.onWebSocketData} debug={false}
        />
        */}
        <div className="trainNavi">
          {/*
          <a href="">Forward CAM</a>
          <a href="" className="active">Backward CAM</a>*/}
        </div>
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
                name="max inverer temp" 
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
              <img src="/img/tc_toggle_on.png"/>
              {/*<img src="/img/tc_toggle_off.png"/>*/}
            </div>
            <div className="tcBtn">
              <div className="tcbTitle y">light</div>
              {/*<img src="/img/tc_toggle_on.png"/>*/}
              <img src="/img/tc_toggle_off.png"/>
            </div>
            <div className="tcBtn">
              <div className="tcbTitle r">itc</div>
              <img src="/img/tc_toggle_on.png"/>
              {/*<img src="/img/tc_toggle_off.png"/>*/}
            </div>
            <div className="tcBtn">
              <div className="tcbTitle b">hsc</div>
              <img src="/img/tc_toggle_on.png"/>
              {/*<img src="/img/tc_toggle_off.png"/>*/}
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
              <DriveRailroadTrail value={driveData.data.position} valueMax="250" />
            </div>
          </div>
        </div>
        <div className="trainPie tpLeft">
          <RailDonutPanelLeft data={driveData.data} />
        </div>
        <div className="trainPie tpRight">
          <RailDonutPanelRight data={driveData.data} dType="auto" lever={driveLeverValue} />
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
              data-h5spath="/h5swsapi"
              id={runDirection == 0 ? 'frontVideo':'rearVideo'}
              data-token={runDirection == 0 ? 'token1':'token2'}
              // autoPlay={moviePlay}
              // loop
              style={{
                width: '500px',
                borderRadius: '50px'
              }}
            >
              <source src={videoRearSrc}></source>
            </video>
          </div>
          <div className="trainViewVideo">
            <video
              // id="frontVideo"
              // data-token="token1"
              data-h5spath="/h5swsapi"
              
              id={runDirection == 1 ? 'frontVideo':'rearVideo'}
              data-token={runDirection == 1 ? 'token1':'token2'}
              
              // autoPlay={moviePlay}
              // loop
            >
              
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
      
      runDirection: state.setM2SetupButtons.runDirection,      
      runSwitch: state.setM2SetupButtons.runSwitch,
      emergencyStop: state.setM2SetupButtons.emergencyStop,
      driveLever: state.setM2SetupButtons.driveLever,

      
    }
}

export default connect(mapStateToProps)(ViewM2Run);
