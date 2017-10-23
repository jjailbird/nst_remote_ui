import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class DynamicBarChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, max, shift, unit, name, barColor } = this.props;
    const barFull = 315;   
    let barValue = 0;
    
    let barValueShift = shift ? parseInt(shift) : 0;
    let barMax = max ? parseInt(max) : 0; 
    
    let barPercent = 0; 
    let barPx = 0; 
    let value = 0;
    
    if(data !== undefined) {
      // value = data[data.length-1];
      value = Array.isArray(data) ? data[data.length-1] : data;
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
