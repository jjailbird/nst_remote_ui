import React, { Component } from 'react';
import ReactSWF from 'react-swf';

export default class ViewMain extends Component {
  render() {
    return (
        <div className="contBox specContBox">
          <div
            style={{
              width: '545px',
              height: '233px',
              position: 'absolute',
              zIndex: '9999',
              right: '77px',
              bottom: '173px'
            }}
          ><img src="/img/specmv2_1.png" /></div>
          <div
            style={{
              width: '950px',
              height: '960px',
              position: 'absolute',
              zIndex: '9999',
              right: '0px',
              top: '0px',
              padding: '45px'
            }}
          >
            <div
              style={{
                color: '#c9c335',
                fontSize: '30px',
                marginBottom: '5px',
                fontWeight: 'bold',
                textAlign: 'right'
              }}
            >Sharp Curve Running System Trailer Bogie Specifications</div>
            <div
              style={{
                fontSize: '34px',
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'right'
              }}
            >급곡선 주행시스템 견인 대차 사양</div>
          </div>
          <div
            style={{
              width: '950px',
              height: '960px',
              position: 'absolute',
              zIndex: '9999',
              left: '0px',
              top: '0px',
              padding: '45px'
            }}
          >
            <div
              style={{
                textTransform: 'uppercase',
                fontSize: '20px',
                marginBottom: '10px',
                color: '#fff'
              }}
            >hyundai rotem company</div>
            <div
              style={{
                marginTop: '10px'
              }}
            >
              <img src="/img/specmv2.png" />
            </div>
          </div>
          <div
              className="conBoxArea specBoxImgArea"
              style={{
                  marginLeft: '00px'
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