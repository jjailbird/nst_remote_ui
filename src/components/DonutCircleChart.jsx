import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class DonutCircleChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const donutRing = document.getElementById('donutRing');
    // const length = donutRing.getTotalLength();
  }
  render() {
    const { data, max, shift, unit, name, strokeColor, strokeColorLine, donutWidth, donutStrokeWidth, valueFontSize, valueFontColor } = this.props;
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
    
    // console.log('cirlce:', circleLen, dashLen, dashSpace);
    
    const lineFull = dashLen;   
    let lineValue = 0;
    let lineValueShift = shift ? parseInt(shift) : 0;
    let valueMax = max ? parseInt(max) : 0; 
    let valuePercent = 0; 
    let linePx = 0; 
    
    /*
    switch(name) {
      case 'Speed':
        lineValueShift = 0;
        valueMax = 60;
        break;
      case 'Position':
        lineValueShift = 0;
        valueMax = 250;
        break;
      case 'Radius':
        lineValueShift = 0;
        valueMax = 10000;
        break;
    }
    */
    let value = 0;

    if(data !== undefined) {
      value = data;
      lineValue = value + lineValueShift;
      valuePercent = (lineValue / valueMax) * 100; 
      linePx = (lineFull * valuePercent) / 100;
    }
    let valueDisplayFontSize = valueFontSize;
    let valueDisplay = isFloat(value) ? value.toFixed(1) : value;
    if(valueDisplay > 1000) {
      valueDisplay = valueDisplay.toExponential(1);
      valueDisplayFontSize = "12px"; 
    }
    const strokeDasharrayValue = `${linePx} ${circleLen - linePx}`;
    

    return (
      <div
        style={{
          width: '94px',
          height: '42px',
          textAlign: 'right',
          float: 'left',
          marginTop: '15px',
          position: 'relative'
        }}
      >
        <div
          style={{
            textAlign: 'center',
            width: `${donutWidth}px`,
            position: 'absolute',
            left: '54px',
            top: '12px',
            fontSize: '10px',
            fontWeight: 'bold',
          }}
        >{unit}</div>
        <div 
          className="ddivcDataBox"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            textAlign: 'left'
          }}
        >
          <h5
            style={{
              color: '#fff',
              marginBottom: '0px',
              textTransform: 'uppercase',
              fontSize: '11px',
              fontWeight: 'normal'
            }}
          >{name}</h5>
          <div
            className="ddivcValue"
            style={{
              fontSize: valueDisplayFontSize,// valueFontSize,
              fontWeight: 'bold',
              color: valueFontColor,
              lineHeight: valueDisplayFontSize // valueFontSize
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