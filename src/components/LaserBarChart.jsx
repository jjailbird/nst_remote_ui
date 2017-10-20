import React, { Component } from 'react';

export default class LaserBarChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, name, dataName, barColor, max, shift} = this.props;
    let value = 0;
    const barFull = 82;
    let barValue = 0;
    let barMax = 0; 
    let barPercent = 0; 
    let barPx = 0; 
    let lineValueShift = 0; 
    let barColorReplace = 0

    //console.log("data ==== ", data);
    if(barColor == 'red'){
      barColorReplace = 'rgba(201,53,53,0.7)';
    }else if(barColor == 'blue'){
      barColorReplace = 'rgba(44,106,170,0.7)';
    }else if(barColor == 'green'){
      barColorReplace = 'rgba(137,182,89,1)';
    }else{
      barColorReplace = barColor;
    }
    
    barMax = max ? parseInt(max) : 0;
    lineValueShift = shift ? parseInt(shift) : 0;
    /*
    switch(dataName) {
      case 'lxA':
        // HSI_001 
        lineValueShift = 0;
        barMax = 500;
        break;
      case 'lxS':
        lineValueShift = 0;
        barMax = 500;
        break;
      case 'ly1A':
        // HSI_002
        lineValueShift = 0;
        barMax = 500;
        break;
      case 'ly1S':
        lineValueShift = 0;
        barMax = 500;
        break;
      case 'ly2A': 
        // HSI_003, HSI_023
        lineValueShift = 20;
        barMax = 40;
        break;
      case 'ly2S':
        lineValueShift = 10;
        barMax = 20;
        break;
      case 'rxA':
        lineValueShift = 0;
        barMax = 500;
        break;
      case 'rxS':
        lineValueShift = 0;
        barMax = 500;
        break;
      case 'ry1A':
        lineValueShift = 0;
        barMax = 500;
        break;
      case 'ry1S':
        lineValueShift = 0;
        barMax = 500;
        break;
      case 'ry2A':
        lineValueShift = 10;
        barMax = 20;
        break;
      case 'ry2S':
        lineValueShift = 10;
        barMax = 20;
        break;
      case 'gA':
        lineValueShift = 5;
        barMax = 10;
        break;
      case 'gS':
        lineValueShift = 5;
        barMax = 10;
        break;
    }
    */
    if(data != undefined) {
      value = data;
      barValue = value + lineValueShift;
      barPercent = (barValue / barMax) * 100; 
      barPx = Math.round((barFull * barPercent) / 100); 
    }
    return (
      <div className="axleGraphBoxBarGraph">
        <div className="BarGraphTitle">{name}</div>
        <div className="BarGraphOutLine">
          <div 
            className="BarGraphFill" 
            style={{
              height: `${barPx}`,
              background: `${barColorReplace}`
            }}
          ></div>
        </div>
      </div>
    );
  }
} 
