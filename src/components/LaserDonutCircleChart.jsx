import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class LaserDonutCircleChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const donutRing = document.getElementById('donutRing');
    // const length = donutRing.getTotalLength();
  }
  render() {
    const { data, unit, name, dataName, strokeColor, strokeColorLine, donutWidth, donutStrokeWidth, valueFontSize, valueFontColor } = this.props;
    //console.log("data = ",data);
    //console.log(valueFontSize, valueFontColor);
    const width = donutWidth;
    const height = width;
    const strokeWidth = donutStrokeWidth;

    const r = (width - strokeWidth) / 2;
    const centerPos = width / 2;
    const circleLen = 2 * r * Math.PI;
    const divideCount = 2;
    
    const dashWidth = circleLen / divideCount;
    const dashLen = (circleLen * 100) / 100;
    const dashSpace = circleLen - dashLen;
    const strokeDasharray = `${dashLen} ${dashSpace}`;
    
    //console.log('cirlce:', circleLen, dashLen, dashSpace);
    
    const lineFull = dashLen;   
    let lineValue = 0;
    let lineValueShift =0;
    let valueMax = 0; 
    let valuePercent = 0; 
    let linePx = 0; 
    
    switch(dataName) {
      case 'lx':
        lineValueShift = 10;
        valueMax = 20;
        break;
      case 'ly':
        lineValueShift = 10;
        valueMax = 20;
        break;
      case 'rx':
        lineValueShift = 10;
        valueMax = 20;
        break;
      case 'ry':
        lineValueShift = 10;
        valueMax = 20;
        break;
      case 'g':
        lineValueShift = 10;
        valueMax = 20;
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
          width: '100px',
          height: '50px',
          textAlign: 'right',
          float: 'left',
          position: 'relative'
        }}
      >
        <div
          style={{
            textAlign: 'center',
            width: donutWidth,
            position: 'absolute',
            left: '53px',
            top: '16px',
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#fff'
          }}
        >{unit}</div>
        <div 
          className="ddivcDataBox"
          style={{
            position: 'absolute',
            left: '0px',
            top: '2px',
            textAlign: 'left'
          }}
        >
          <h5
            style={{
              color: '#fff',
              marginBottom: '0px',
              fontSize: '11px',
              fontWeight: 'normal'
            }}
          >{name}</h5>
          <div
            className="ddivcValue"
            style={{
              fontSize: valueFontSize,
              color: valueFontColor,
              lineHeight: valueFontSize,
              marginTop: '3px'
            }}
          >
            {valueDisplay}
          </div>
        </div>
        <svg
          style={{
            width: `${width}px`,
            height: `${height}px` ,
            textAlign: 'center'
          }}
        >
          <circle
            cx={centerPos} cy={centerPos}
            transform={`rotate(90 ${centerPos} ${centerPos})`}
            r={r}
            fill="transparent"
            stroke={strokeColorLine} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray}   strokeDashoffset="0" strokeOpacity="1" />    
          <circle
            id="donutRing"
            cx={centerPos} cy={centerPos}
            transform={`rotate(90 ${centerPos} ${centerPos})`}
            r={r}
            fill="transparent"            
            stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray={strokeDasharrayValue} strokeDashoffset="0" strokeOpacity="1" />

        </svg>     
      </div>   
    )
  }
}