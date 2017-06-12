import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class RailDonutPanelLeft extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    let value = 0;
    let valueBattTemp = 0;
    let valueSoc = 0;

    switch(name) {
      case 'rpm':
        break;
      case 'torque':
        break;
    }
    
    if(data) {
      value = data
      valueBattTemp = value.battTemp;
      valueSoc = value.soc;
    }
    const battTempDisplay = isFloat(valueBattTemp) ? valueBattTemp.toFixed(1) : valueBattTemp;
    const socDisplay = isFloat(valueSoc) ? valueSoc.toFixed(1) : valueSoc;
    return (
      <div
        style={{
          width: '353px',
          height: '353px',
          position: 'relative'
        }}
      >
          <div 
            style={{
              position: 'absolute',
              width: '353px',
              textAlign: 'center',
              left: '0',
              top: '78px',
              zIndex: '999'
            }}
            className="frontText"
          >
            <div
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '25px',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}
            >BAT.Temp</div>
            <div
              style={{
                
              }}
            >
              <span
                style={{
                  color: 'rgba(201,195,53,0.5)',
                  fontSize: '50px',
                  fontWeight: 'bold',
                  paddingBottom: '4px',
                  lineHeight: '45px',
                  borderBottom: '4px solid rgba(201,195,53,0.5)'
                }}
              >{battTempDisplay} ℃</span>
            </div>
            <div
              style={{
                marginTop: '40px',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '30px',
                fontWeight: 'bold'
              }}
            >SOC %</div>
            <div
              style={{
                color: 'rgba(201,195,53,0.5)',
                fontSize: '80px',
                fontWeight: 'bold',
                lineHeight: '62px'
              }}
            >{socDisplay}</div>
          </div>
          <div
            className="svgArea"
            style={{
              width: '353px',
              height: '353px',
              position: 'absolute',
              zIndex: '990',
              background: 'rgba(0,0,0,0.5)'
            }}
          >
          
          </div>
          <div
            style={{
              width: '353px',
              height: '353px',
              background: 'url(/img/train_pie1.png)'
            }}
            className="backGraph"
          >
          </div>
      </div>
    );
  }
} 
