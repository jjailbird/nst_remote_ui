import React, { Component } from 'react';

export default class LaserBarChartS extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { fillHeight, dataName, barColor } = this.props;
    let value = 0;
    const barFull = 87;
    let barValue = 0;
    let barMax = 0; 
    let barPercent = 0; 
    let barPx = 0; 
    let lineValueShift = 0; 

    //console.log("fillHeight ==== ", fillHeight);
    
    switch(dataName) {
      case 'lx':
        lineValueShift = 10;
        barMax = 20;
        break;
      case 'ly':
        lineValueShift = 10;
        barMax = 20;
        break;
      case 'rx':
        lineValueShift = 10;
        barMax = 20;
        break;
      case 'ry':
        lineValueShift = 10;
        barMax = 20;
        break;
      case 'g':
        lineValueShift = 5;
        barMax = 10;
        break;
    }
    
    if(fillHeight) {
      value = fillHeight;
      barValue = value + lineValueShift;
      barPercent = (barValue / barMax) * 100; 
      barPx = Math.round((barFull * barPercent) / 100); 
    }
    return (
      <div className="axleGraphBoxBarGraph">
        <div className="BarGraphTitle">S</div>
        <div className="BarGraphOutLine">
          <div 
            className="BarGraphFill" 
            style={{
              height: `${barPx}`,
              background: `${barColor}`
            }}
          ></div>
        </div>
      </div>
    );
  }
} 
