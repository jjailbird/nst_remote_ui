import React, { Component } from 'react';
import ReactSWF from 'react-swf';

export default class ViewMain extends Component {
  render() {
    return (
        <div className="contBox specContBox">
          {/*
          <div className="headArea specHeadArea">
            <div className="specTitle">hyundai rotem company</div>
          </div>
          */}
          
          <div className="specBoxDataArea">
              <div className="specDataBox">
                  <div className="sdbTitle">Bogie</div>
                  <div className="sdbContent">
                    Tupe<br/>
                    Running Speed (Operation / Design)<br/>
                    Axle load<br/>
                    Wheelbase<br/>
                    Track gauge<br/>
                    Wheel diameter (Mew / Worn)<br/>
                    Min. radius of curvature in main / depot<br/>
                    Weight (Motor)<br/>
                    Bogie height (Operation / Design)<br/>
                    Axle load<br/>
                    Wheelbase<br/>
                    Track gauge<br/>
                    Wheel diameter (Mew / Worn)<br/>
                    Min. radius of curvature in main / depot<br/>
                    Weight (Motor)

                  </div>
                  <div className="sdbTitle">SHS-T</div>
                  <div className="sdbContent">
                    Tupe<br/>
                    Running Speed (Operation / Design)<br/>
                    Axle load<br/>
                    Wheelbase<br/>
                    Track gauge<br/>
                    Wheel diameter (Mew / Worn)<br/>
                    Min. radius of curvature in main / depot<br/>
                    Weight (Motor)<br/>
                    Bogie height (Operation / Design)<br/>
                    Axle load<br/>
                    Wheelbase<br/>
                    Track gauge<br/>
                    Wheel diameter (Mew / Worn)<br/>
                    Min. radius of curvature in main / depot<br/>
                    Weight (Motor)
                  </div>
              </div>
          </div>
          <div
            className="conBoxArea specBoxImgArea"
            style={{
                marginLeft: '0px'
            }}
          >
            <ReactSWF
              src="/img/fl_02.swf"
              id="guid_001"
              width="1920"
              height="1080"
              wmode="transparent"
              loop
              play
            />
          </div>
          
        </div>
    );
  }
}
