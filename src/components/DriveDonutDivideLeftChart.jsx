import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class DriveDonutDivideLeftChart extends Component {
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
    
    switch(name) {
      case 'traction battery':
        lineValueShift = 300;
        valueMax = lineValueShift + 900;
        break;
      case 'control battery':
        lineValueShift = 10;
        valueMax = lineValueShift + 40;
        break;
      case 'max inverer temp':
        lineValueShift = 0;
        valueMax = 100;
        break;
      case 'max motor temp':
        lineValueShift = 0;
        valueMax = 100;
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
          background: 'rgba(0,0,0,0)',
          width: '190px',
          height: '80px',
          position: 'relative',
          textAlign: 'right'
        }}
      >        
        <div
          style={{
            position: 'absolute',
            width: '70px',
            textAlign: 'center',
            top: '49px',
            left: '50px',
            fontWeight: 'normal',
            fontSize: '14px',
            color: '#fff'
          }}
        >{unit}</div>
        <div 
          className="tcbTitle"
          style={{
            textAlign: 'left',
            fontSize: '17px'
          }}
        >{name}</div>
        <div 
          className="ddivcDataBox"
          style={{
            position: 'absolute',
            left: '10px',
            top: '35px',
            textAlign: 'left'
          }}
        >
          <div
            className="ddivcValue"
            style={{
              fontSize: valueFontSize,
              fontWeight: 'bold',
              color: valueFontColor
            }}
          >
            {valueDisplay} 
          </div>
        </div>
        <svg  style={{ width: `${width}px`, height: `${height}px`, marginRight: '79px' }}>
          <circle
            cx={centerPos} cy={centerPos}
            transform={`rotate(-90 ${centerPos} ${centerPos})`}
            r={r}
            fill="transparent"
            stroke={strokeColorLine} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray}   strokeDashoffset="0" strokeOpacity="1" />    
          <circle
            id="donutRing"
            cx={centerPos} cy={centerPos}
            transform={`rotate(-90 ${centerPos} ${centerPos})`}
            r={r}
            fill="transparent"            
            stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray={strokeDasharrayValue} strokeDashoffset="0" strokeOpacity="1" />
          
        </svg>     
      </div>   
    )
  }
}