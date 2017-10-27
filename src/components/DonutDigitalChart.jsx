import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class DonutDigitalChart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const donutRing = document.getElementById('donutRing');
    // const length = donutRing.getTotalLength();
  }
  render() {
    const { data, max, shift, unit, name, strokeColor, strokeColorLine } = this.props;
    
    const width = 82;
    const height = width;
    const strokeWidth = 8;

    const r = (width - strokeWidth) / 2;
    const centerPos = width / 2;
    const circleLen = 2 * r * Math.PI;
    const divideCount = 32;
    const dashWidth = circleLen / divideCount;
    const strokeDasharray = `${dashWidth + 3.8} ${dashWidth - 3.8}`;
    
    
    const lineFull = circleLen;   
    let lineValue = 0;
    
    let lineValueShift = shift ? parseFloat(shift) : 0;
    let lineMax = max ? parseFloat(max) : 0; 
    
    let linePercent = 0; 
    let linePx = 0; 
    let value = 0;

    if(data !== undefined) {
      value = Array.isArray(data) ? data[data.length-1] : data;
      lineValue = value + lineValueShift;
      linePercent = (lineValue / lineMax) * 100; 
      linePx = (lineFull * linePercent) / 100; 
    }
    
    const valueDisplay = isFloat(value) ? value.toFixed(2) : value;
    const strokeDasharrayValue = `${linePx} ${lineFull - linePx}`;
    

    return (
      <div className="ddcBox">
        <h5>{name}</h5>
        <svg  style={{ width: `${width}px`, height: `${height}px` }}>
          <mask id="mask-dounut">  
            <circle
              cx={centerPos} cy={centerPos}
            transform={`rotate(90 ${centerPos} ${centerPos})`}
              r={r}
              fill="transparent"
              stroke="#fff" strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeDashoffset="0" />    
          </mask>  
          <circle
            cx={centerPos} cy={centerPos}
            r={r}
            fill="transparent"
            stroke={strokeColorLine} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray}   strokeDashoffset="0" strokeOpacity="1" />    

          <circle
            id="donutRing"
            mask="url(#mask-dounut)"
            cx={centerPos} cy={centerPos}
            transform={`rotate(90 ${centerPos} ${centerPos})`}
            r={r}
            fill="transparent"            
            stroke={strokeColor} strokeWidth={strokeWidth} strokeDasharray={strokeDasharrayValue} strokeDashoffset="0" strokeOpacity="1" />
            <text x={centerPos} y={centerPos+1} fill="white"
            style={{
              textAnchor: 'middle',
              fontSize: '20px'
            }}
            >{valueDisplay}</text>     
            <text x={centerPos} y={centerPos+20} fill="white"
            style={{
              textAnchor: 'middle',
              fontSize: '11px'
            }}
            >{unit}</text>
        </svg>     
      </div>   
    )
  }
}