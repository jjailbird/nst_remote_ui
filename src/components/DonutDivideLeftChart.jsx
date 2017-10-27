import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class DonutDivideLeftChart extends Component {
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
    const dashLen = (circleLen * 70) / 100;
    const dashSpace = circleLen - dashLen;
    const strokeDasharray = `${dashLen} ${dashSpace}`;
    
    // console.log('cirlce:', circleLen, dashLen, dashSpace);
    
    const lineFull = dashLen;   
    let lineValue = 0;
    let lineValueShift = shift ? Number(shift) : 0;
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
      <div className="ddivcBox">
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
              textTransform: 'capitalize',
              fontSize: '12px',
              fontWeight: 'normal'
            }}
          >{name}</h5>
          <div
            className="ddivcValue"
            style={{
              fontSize: valueFontSize,
              fontWeight: 'bold',
              color: valueFontColor
            }}
          >
            {valueDisplay} 
            <small
              style={{
                fontWeight: 'normal',
                fontSize: '14px',
                color: '#fff',
                marginLeft: '5px'
              }}
            >{unit}</small>
          </div>
        </div>
        <svg  style={{ width: `${width}px`, height: `${height}px` }}>
          <circle
            cx={centerPos} cy={centerPos}
            transform={`rotate(-110 ${centerPos} ${centerPos})`}
            r={r}
            fill="transparent"
            stroke={strokeColorLine} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray}   strokeDashoffset="0" strokeOpacity="1" />    
          <circle
            id="donutRing"
            cx={centerPos} cy={centerPos}
            transform={`rotate(-110 ${centerPos} ${centerPos})`}
            r={r}
            fill="transparent"            
            stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray={strokeDasharrayValue} strokeDashoffset="0" strokeOpacity="1" />
          
        </svg>     
      </div>   
    )
  }
}