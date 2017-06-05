import React, { Component } from 'react';

export default class ViewTrain extends Component {
  render() {
  return (

    <div>
      <div className="trainNavi">
        <a href="">Forward CAM</a>
        <a href="" className="active">Backward CAM</a>
      </div>
      <div className="trainControlBox tcBoxLeft">
        <div className="tcTitle">
          hyundai rotem company
        </div>
        <div className="tcCompass">
          <img src="img/sample/tc_location.png"/>
        </div>
        <div className="tcBatteryPieBox">
          <div className="tcbTitle">traction battery</div>
          <img src="img/sample/tc_battery_pie1.png"/>
        </div>
        <div className="tcBatteryPieBox">
          <div className="tcbTitle">control battery</div>
          <img src="img/sample/tc_battery_pie2.png"/>
        </div>
        <div className="tcBatteryPieBox">
          <div className="tcbTitle">max inverer temp</div>
          <img src="img/sample/tc_battery_pie3.png"/>
        </div>
        <div className="tcBatteryPieBox">
          <div className="tcbTitle">max motor temp</div>
          <img src="img/sample/tc_battery_pie4.png"/>
        </div>
        <div className="tControlBtnBox">
          <div className="tcBtn">
            <div className="tcbTitle y">power</div>
            <img src="img/sample/tc_toggle.png"/>
          </div>
          <div className="tcBtn">
            <div className="tcbTitle y">light</div>
            <img src="img/sample/tc_toggle.png"/>
          </div>
          <div className="tcBtn">
            <div className="tcbTitle r">itc</div>
            <img src="img/sample/tc_toggle.png"/>
          </div>
          <div className="tcBtn">
            <div className="tcbTitle b">hsc</div>
            <img src="img/sample/tc_toggle.png"/>
          </div>
        </div>
      </div>
      <div className="trainControlBox tcBoxRight">
        <div className="tcDayCountBox">
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
          <div className="tcPosition">
            <div className="tcpTitle">Vehicle position</div>
            <img src="img/sample/tc_position.png"/>
          </div>
        </div>
      </div>
      <div className="trainPie tpLeft">
        <img src="img/sample/train_pie2.png"/>
      </div>
      <div className="trainPie tpRight">
        <img src="img/sample/train_pie1.png"/>
      </div>
      <div className="contBox">
        <div className="trainViewVideo">
          <video autoplay loop>
            <source src="video/train_view_back.mp4"></source>
          </video>
        </div>
      </div>
    </div>


  );
  }
}
