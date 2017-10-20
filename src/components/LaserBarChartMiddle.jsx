import React, { Component } from 'react';

export default class LaserBarChartMiddle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, max, min, name, dataName, barColor } = this.props;
    const barHeightPxFull = 82;
    
    let value = data !== undefined ? parseFloat(data) : 0;
    let valueMax = max ? parseFloat(max) : 0; 
    let valueMin = min ? parseFloat(min) : 0;
    
    let valueHeightFull = Math.abs(valueMax) + Math.abs(valueMin);
    let valuePercent = (Math.abs(value) / valueHeightFull) * 100;

    let barHeightPx = Math.round((barHeightPxFull * valuePercent) / 100);  0;
    let marginBottomPx = value < 0 ? (barHeightPxFull / 2) - barHeightPx : (barHeightPxFull / 2);

    let barColorReplace = '';
    if(barColor == 'red'){
      barColorReplace = value > 0 ? 'rgba(201,53,53,0.7)' : 'rgba(201,53,53,0.3)';
    }else if(barColor == 'blue'){
      barColorReplace = value > 0 ? 'rgba(44,106,170,0.7)' : 'rgba(44,106,170,0.3)';
    }else if(barColor == 'green'){
      barColorReplace = value > 0 ? 'rgba(137,182,89,1)' : 'rgba(137,182,89,0.5)';
    }else{
      barColorReplace = barColor;
    }

    return (
      <div className="axleGraphBoxBarGraph">
        <div className="BarGraphTitle">{name}</div>
        <div className="BarGraphOutLine">
          <div 
            className="BarGraphFill" 
            style={{
              height: `${valuePercent}%`,
              background: `${barColorReplace}`,
              marginBottom: `${marginBottomPx}px`,
            }}
          ></div>
        </div>
      </div>
    );
  }
} 