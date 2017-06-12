import React, { Component } from 'react';

export default class MotorGaugeBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, name, unit } = this.props;
    let value = data;
    const barFull = 204;
    let barValue = 0;
    let barMax = 0; 
    let barPercent = 0; 
    let barPx = 0; 
    let barValueShift =0;
    
    switch(name) {
      case 'rpm':
        barMax = 3000;
        break;
      case 'torque':
        barMax = 3000;
        break;

    }
    
    if(data) {
      //value = data;
      barValue = value + barValueShift;
      barPercent = (barValue / barMax) * 100; 
      barPx = Math.round((barFull * barPercent) / 100); 
    }
    return (
      <div
        style={{
          marginLeft: '8px',
          marginBottom: '5px'
        }}
      >
        <div className="bar-graph-title">{name} {value.toFixed(1)} <small>{unit}</small></div>
        <div
          style={{
            width: '210px',
            height: '12px'
          }}
          className="barBox">
          <div className="barFill"
            style={{
              height: '6px',
              width: barPx
            }}
          >
          </div>
        </div>
      </div>
    );
  }
} 