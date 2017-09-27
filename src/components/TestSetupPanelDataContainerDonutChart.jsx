import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class TestSetupPanelDataContainerDonutChart extends Component {
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
      case 'notch':
        lineValueShift = 3;
        valueMax = 6;
        break;
      case 'speed':
        lineValueShift = 0;
        valueMax = 60;
        break;
      case 'soc':
        lineValueShift = 0;
        valueMax = 100;
        break;
    }
    
    let value = 0;

    if(name != 'speed'){
      if(data) {
        value = data;
        lineValue = value + lineValueShift;
        valuePercent = (lineValue / valueMax) * 100; 
        linePx = (lineFull * valuePercent) / 100;
      }
    }else if(name == 'speed'){
      if(data && data.length > 0) {
        value = data[data.length-1];
        lineValue = value + lineValueShift;
        valuePercent = (lineValue / valueMax) * 100; 
        linePx = (lineFull * valuePercent) / 100;
      }
    }
    
    const valueDisplay = isFloat(value) ? value.toFixed(1) : value;
    const strokeDasharrayValue = `${linePx} ${circleLen - linePx}`;
    
    return (
      <div className="testSetupDunutBox">
        <div 
          className="testSetupDunutDataBox"
          style={{
            position: 'absolute',
            left: '45px',
            top: '28px',
            textAlign: 'left'
          }}
        >
          {/*
          <h5
            style={{
              color: '#fff',
              marginBottom: '0px',
              textTransform: 'capitalize',
              fontSize: '12px',
              fontWeight: 'normal'
            }}
          >{name}</h5>
          */}
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
                fontSize: '17px',
                color: '#fff',
                marginLeft: '5px'
              }}
            >{unit}</small>
          </div>
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