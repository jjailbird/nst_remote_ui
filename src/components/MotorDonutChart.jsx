import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class MotorDonutChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const donutRing = document.getElementById('donutRing');
    // const length = donutRing.getTotalLength();
  }
  render() {
    const { data, unit, name, strokeColor, strokeColorLine, donutWidth, donutStrokeWidth, valueFontSize, valueFontColor } = this.props;
    //console.log(valueFontSize, valueFontColor);
    const width = donutWidth;
    const height = width;
    const strokeWidth = donutStrokeWidth;

    const r = (width - strokeWidth) / 2;
    const centerPos = width / 2;
    const circleLen = 2 * r * Math.PI;
    const divideCount = 2;
    
    const dashWidth = circleLen / divideCount;
    const dashLen = (circleLen * 70) / 100;
    const dashSpace = circleLen - dashLen;
    const strokeDasharray = `${dashLen} ${dashSpace}`;
    
    // console.log('cirlce:', circleLen, dashLen, dashSpace);
    
    const lineFull = dashLen;   
    let lineValue = 0;
    let lineValueShift =0;
    let valueMax = 0; 
    let valuePercent = 0; 
    let linePx = 0; 
    
    switch(name) {
      case 'A-cur':
        lineValueShift = 0;
        valueMax = 500;
        break;
      case 'B-cur':
        lineValueShift = 0;
        valueMax = 500;
        break;
      case 'C-cur':
        lineValueShift = 0;
        valueMax = 500;
        break;
    }
    
    let value = 0;

    if(data) {
      value = data;
      lineValue = value + lineValueShift;
      valuePercent = (lineValue / valueMax) * 100; 
      linePx = (lineFull * valuePercent) / 100;
    }
    
    const valueDisplay = isFloat(value) ? value.toFixed(1) : value;
    const strokeDasharrayValue = `${linePx} ${circleLen - linePx}`;
    

    return (
      <div
        style={{
          width: `${width}px`,
          color: '#fff',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <div
          style={{
            fontSize: '10px',
            marginBottom: '5px',
            marginTop: '-4px'
          }}
        >{name}</div>
        <div
          style={{
            position: 'absolute',
            width: '28px',
            height: '36px',
            fontSize: '11px',
            color: '#fff',
            left: '27px',
            top: '34px'
          }}
        >
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: '12px'
            }}
          >{valueDisplay}</div>
          <div
            style={{
              width: '100%',
              height: '1px',
              background: '#fff',
              margin: '2px 0 1px'
            }}
          ></div>
          <div
            style={{
              width: '100%',
              textAlign: 'center'
            }}
          >{unit}</div>
        </div>
        <svg  style={{ width: `${width}px`, height: `${height}px` }}>
          <circle
            cx={centerPos} cy={centerPos}
            transform={`rotate(80 ${centerPos} ${centerPos})`}
            r={r}
            fill="transparent"
            stroke={strokeColorLine} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray}   strokeDashoffset="0" strokeOpacity="1" />    
          <circle
            id="donutRing"
            cx={centerPos} cy={centerPos}
            transform={`rotate(80 ${centerPos} ${centerPos})`}
            r={r}
            fill="transparent"            
            stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray={strokeDasharrayValue} strokeDashoffset="0" strokeOpacity="1" />
          
        </svg>     
      </div>   
    )
  }
}