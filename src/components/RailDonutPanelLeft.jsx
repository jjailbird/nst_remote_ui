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
              left: '0'
            }}
            classNmae="frontText"
          >
            <div
              style={{

              }}
            >BAT.Temp</div>
            <div
              style={{
                
              }}
            >{battTempDisplay}</div>
            <div
              style={{
                
              }}
            >SOC %</div>
            <div
              style={{
                
              }}
            >{socDisplay}</div>
          </div>
          <div
            style={{
              width: '353px',
              height: '353px',
              background: 'url(/img/train_pie1.png)'
            }}
            classNmae="backGraph"
          >

          </div>
      </div>
    );
  }
} 
