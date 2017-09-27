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
    
    this.sourceBuffer = null;
    this.buffer = [];	
    this.mediaSource = null;
    this.video = null;
    this.wsSocket = null;
    
    this.mediaSource = null;
    this.video = null;

    this.readFromBuffer = this.readFromBuffer.bind(this);
    this.keepaliveTimer = this.keepaliveTimer.bind(this);
    this.onWebSocketData = this.onWebSocketData.bind(this);
    this.onFileReaderOnload = this.onFileReaderOnload.bind(this);
    this.onMediaSourceOpen = this.onMediaSourceOpen.bind(this);
    this.onVideoPlay = this.onVideoPlay.bind(this);
    this.H5SWebSocketClient = this.H5SWebSocketClient.bind(this);
    this.onTestLabelChange = this.onTestLabelChange.bind(this);
  }
  // h5ss ==========================================================================
  H5SWebSocketClient(){
    var socket;
    try {
      // console.log('window.location.protocol', window.location.protocol);
      // let wsConnectionString = 'ws://' + window.location.host + '/h5sws';
      let wsConnectionString = 'ws://localhost:8801/h5sws2';
      if (window.location.protocol == "http:") 
      {
      }
      if (window.location.protocol == "https:")
      {	
        wsConnectionString = 'wss://' + window.location.host + '/h5sws';			 
      }
      socket = new WebSocket(wsConnectionString);
     
      // console.log('websocket',wsConnectionString);
    } catch (e) {
      alert('error');
      return;
    }
    return socket;
  }

	readFromBuffer(){
		// console.log('readFromBuffer');
		if (this.buffer.length === 0 || !this.sourceBuffer || this.sourceBuffer.updating) 
		{
		  return;
		}
		try {
		  var data = this.buffer.shift();
		  this.sourceBuffer.appendBuffer(data);
		} catch (e) {
		  console.log(e);
		}
	};
	
	keepaliveTimer(){
		// console.log('keepaliveTimer', 'keepalive');
		this.wsSocket.send("keepalive");
	}

	onWebSocketData(msg){
    var blob = msg.data; 
    // var blob = msg; // when using react-websocket
		// console.log('blob', blob);
		var fileReader = new FileReader();
    fileReader.onload = this.onFileReaderOnload;
    /*
    fileReader.onload = function () {
      console.log('this.result', this.result);
			this.buffer.push(this.result);
			this.readFromBuffer();
    };
    */
    fileReader.readAsArrayBuffer(blob);
  }  
  onFileReaderOnload(e){
    // console.log('onFileReaderOnload! parameter',e);
    this.buffer.push(e.target.result);
    this.readFromBuffer();
  }
  onMediaSourceOpen(){
    // console.log('mediaSource', 'sourceopen!');
    this.video.play();
    //var strCodec = 'video/mp4; codecs="avc1.420028"';
    //var strCodec = 'video/mp4; codecs="avc1.42E01E"';
    const strCodec = 'video/mp4; codecs="avc1.640029"';
    this.sourceBuffer = this.mediaSource.addSourceBuffer(strCodec);
    this.mediaSource.duration = Infinity;
    this.sourceBuffer.addEventListener('updateend', this.readFromBuffer);
  }
  
  onVideoPlay(){
    // console.log('video', 'play!');
    this.wsSocket = this.H5SWebSocketClient();
    this.wsSocket.onmessage = this.onWebSocketData;
    setInterval(this.keepaliveTimer, 1000);	
  }
  // ============================================================================
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
        
    window.MediaSource = window.MediaSource || window.WebKitMediaSource;
    if (!window.MediaSource) {
      console.log('MediaSource API is not available');
    }
  
    this.mediaSource = new window.MediaSource();
    this.video = document.getElementById('frontVideo');
  
    /* var video = document.querySelector('h5sVideo'); */
    //alert(video);
    this.video.src = window.URL.createObjectURL(this.mediaSource);
  
    this.mediaSource.addEventListener('sourceopen', this.onMediaSourceOpen);
  
    this.video.addEventListener('play', this.onVideoPlay, false);
    /*
    const { runSwitch } = this.props;
    const frontVideo = document.getElementById("frontVideo");
    const rearVideo = document.getElementById("rearVideo");
    
    if (runSwitch === 1) {
      frontVideo.play();
      rearVideo.play();
    } 
    
    alert(frontVideo.id);
    */
  }
  render() {
    const { 
      driveData, driveLever, directionSwitch, runSwitch
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
    

    const videoFrontSrc = directionSwitch == 1 ? "/video/train_view_front.mp4" : "/video/train_view_back.mp4";
    const videoRearSrc = directionSwitch == 0 ? "/video/train_view_front.mp4" : "/video/train_view_back.mp4";
    const moviePlay = runSwitch == 0 ? false : true;
    // console.log('directionSwitch', directionSwitch, videoFrontSrc);
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
              id="rearVideo"
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
              id="frontVideo"
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
      runSwitch: state.setRunSwitch.data,
      driveLever: state.setDriveLever.data,
      directionSwitch: state.setDirectionSwitch.data,
      // =============================================      
    }
}

export default connect(mapStateToProps)(ViewM2Run);
