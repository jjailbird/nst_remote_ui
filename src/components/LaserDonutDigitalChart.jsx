import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class LaserDonutDigitalChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const donutRing = document.getElementById('donutRing');
    // const length = donutRing.getTotalLength();
  }
  render() {
    const { data, unit, name, dataName, strokeColor, strokeColorLine, donutWidth, donutStrokeWidth, valueFontSize, valueFontColor } = this.props;
    //console.log(valueFontSize, valueFontColor);
    const width = donutWidth;
    const height = width;
    const strokeWidth = donutStrokeWidth;

    const r = (width - strokeWidth) / 2;
    const centerPos = width / 2;
    const circleLen = 2 * r * Math.PI;
    const divideCount = 2;
    
    const dashWidth = circleLen / divideCount;
    const dashLen = (circleLen * 65) / 100;
    const dashSpace = circleLen - dashLen;
    const strokeDasharray = `${dashLen} ${dashSpace}`;
    
    // console.log('cirlce:', circleLen, dashLen, dashSpace);
    
    const lineFull = dashLen;   
    let lineValue = 0;
    let lineValueShift =0;
    let valueMax = 0; 
    let valuePercent = 0; 
    let linePx = 0; 
    
    
    switch(dataName) {
      case 'frontG':
        lineValueShift = 5;
        valueMax = 10;
        break;
      case 'rearG':
        lineValueShift = 5;
        valueMax = 10;
        break;
    }
    
    let value = 0;

    if(data) {
      value = data;
      lineValue = value + lineValueShift;
      valuePercent = (lineValue / valueMax) * 100; 
      linePx = (lineFull * valuePercent) / 100;
    }
    
    const valueDisplay = isFloat(value) ? value.toFixed(2) : value;
    const strokeDasharrayValue = `${linePx} ${circleLen - linePx}`;
    

    return (
      <div
        className=""
        style={{
          width: '137px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div 
          className=""
          style={{
            position: 'absolute',
            left: '6px',
            top: '28px',
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
                fontSize: '20px',
                color: '#fff',
                marginLeft: '5px',
                float: 'right'
              }}
            >{unit}</small>
          </div>
        </div>
        <svg  
          style={{ 
            width: `${width}px`, 
            height: `${height}px`, 
            position: 'absolute',
            left: '35px',
            top: '4px'
          }}
        >
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

