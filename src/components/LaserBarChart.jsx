import React, { Component } from 'react';

export default class LaserBarChartA extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, name, dataName, barColor, max, shift } = this.props;
    let value = 0;
    const barFull = 87;
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
