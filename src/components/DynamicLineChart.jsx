import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class DynamicLineChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, max, shift, unit, name } = this.props;
    const lineFull = 30;   //실제높이 -2  
    let lineValue = 0;

    let lineValueShift = shift ? parseInt(shift) : 0;
    let lineMax = max ? parseInt(max) : 0; 

    let linePercent = 0; 
    let linePx = 0; 

    // console.log('recieved data:', data);
    let points = '';
    let value = 0;
    if(data && data.length > 0) {
      // console.log('recieved array!');

      data.map((item,idx) => {
        value = data[data.length-1];
        lineValue = item + lineValueShift ;
        linePercent = (lineValue / lineMax) * 100; 
        linePx = lineFull - Math.round((lineFull * linePercent) / 100); 
        points += `${idx},${linePx+1} `;
      });
      // console.log(points);
    }
    const valueDisplay = isFloat(value) ? value.toFixed(2) : value;
    return (
      <div className="dlcBox">
        <div className="lineGraphTitle">
          <h5>{name}</h5>
          <p>{valueDisplay} <small>{unit}</small></p>
        </div>
        <div className="lineGraphChart">
          <svg className="dynamic-line-chart" width="292" height="32">
            <polyline
              fill="none"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1"
              points={points}
            />
          </svg>
        </div>
      </div>
    );
  }
} 
