import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class DynamicBarChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, unit, name, barColor } = this.props;
    const barFull = 315;   
    let barValue = 0;
    let barValueShift =0;
    let barMax = 0; 
    let barPercent = 0; 
    let barPx = 0; 
    let value = 0;
    
    switch(name) {
      case 'lat. distance':
        barValueShift = 10;
        barMax = 20;
        break;
      case 'yaw angle':
        barValueShift = 5;
        barMax = 10;
        break;
      case 'motor torque':
        barValueShift = 0;
        barMax = 3000;
        break;
      case 'motor speed':
        barValueShift = 0;
        barMax = 3000;
        break;
    }

    if(data && data.length > 0) {
      value = data[data.length-1];
      barValue = value + barValueShift;
      barPercent = (barValue / barMax) * 100; 
      barPx = Math.round((barFull * barPercent) / 100); 
    }
    const valueDisplay = isFloat(value) ? value.toFixed(2) : value;
    return (
      <div className="dbcBox">
        <div className="barGraphBox">
          <h5>{name}</h5>
          <div
            className="barGraphBar"
            style={{
              backgroundColor: barColor,
              width: barPx
            }}
          >
          </div>
        </div>
        <div className="barGraphDataBox">
          {valueDisplay} <small>{unit}</small>
        </div>
      </div>
    );
  }
} 
