import React, { Component } from 'react';
import DriveDonutDivideLeftChart from './components/DriveDonutDivideLeftChart';
import DriveRailroadTrail from './components/DriveRailroadTrail';
import RailDonutPanelLeft from './components/RailDonutPanelLeft'
import RailDonutPanelRight from './components/RailDonutPanelRight'

import { connect } from 'react-redux';

class ViewM2Run extends Component {
  render() {
    const { 
      driveData
    } = this.props;
  return (

    <div>
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
            <div className="tccCount">
              nst 01
            </div>
          </div>
          <div className="tccDayBox">
            Weather 15℃ Cloudy<br />
            2017.9.9 Mon 20:20 32
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
        <RailDonutPanelRight data={driveData.data} dType="auto"/>
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
          class="trainBackViewBox">
            <video
              autoPlay
              loop
              style={{
                width: '500px',
                borderRadius: '50px'
              }}
            >
              <source src="/video/train_view_back.mp4"></source>
            </video>
        </div>
        <div className="trainViewVideo">
          <video
            autoPlay
            loop
          >
            <source src="/video/train_view_front.mp4"></source>
          </video>
        </div>
      </div>
    </div>


  );
  }
}

function mapStateToProps(state){
    return {
      driveData: state.driveData
    }
}

export default connect(mapStateToProps)(ViewM2Run);
