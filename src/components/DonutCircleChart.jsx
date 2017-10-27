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
    const width = parseInt(donutWidth);
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
    let lineValueShift = shift !== undefined ? Number(shift) : 0;
    let valueMax = max ? Number(max) : 0; 
    let valuePercent = 0; 
    let linePx = 0; 
    let value = 0;
    let valueDisplayFontSize = valueFontSize;
    let valueDisplay = "";
  
    if(data !== undefined) {
      value = Number(data);
      lineValue = value + lineValueShift;
      valuePercent = (lineValue / valueMax) * 100; 
      linePx = (lineFull * valuePercent) / 100;
      
      if(value > 1000 || value < -1000) {
        valueDisplay = value.toExponential(1);
        valueDisplayFontSize = "12px"; 
      } else {
        valueDisplay = isFloat(value) ? value.toFixed(1) : value
      }

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
            width: donutWidth,
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
              fontSize: valueDisplayFontSize,
              fontWeight: 'bold',
              color: valueFontColor,
              lineHeight: valueDisplayFontSize
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