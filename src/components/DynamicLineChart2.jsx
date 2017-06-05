import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class DynamicLineChart2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, unit, name } = this.props;
    const lineFull = 107;//실제높이 -2   
    let lineValue = 0;
    let lineValueShift =0;
    let lineMax = 0; 
    let linePercent = 0; 
    let linePx = 0; 
    
    switch(name) {
      case 'Vehicle Speed':
        lineValueShift = 0;
        lineMax = 15;
        break;
    }
    //console.log('recieved data:', data);
    let points = '';
    let value = 0;
    if(data && data.length > 0) {
      //console.log('recieved array!');

      data.map((item,idx) => {
        value = data[data.length-1];
        lineValue = item + lineValueShift ;
        linePercent = (lineValue / lineMax) * 100; 
        linePx = lineFull - Math.round((lineFull * linePercent) / 100); 
        points += `${idx},${linePx+1} `;
      });
      // console.log(points);
    }
    const valueDisplay = isFloat(value) ? value.toFixed(2) : value;
    return (
      <div className="dlcBox">
        <div
          className="lineGraphTitle"
          style={{
            overflow: 'hidden',
            width: '290px',
            padding: '5px 7px',
            marginBottom: '5px'
          }}
        >
          <div
            style={{
              width: '140px',
              padding: '8px 10px',
              float: 'left',
              textTransform: 'uppercase',
              fontSize: '15px',
              fontWeight: 'bold'
            }}
          >{name}</div>
          <div
            style={{
              float: 'right',
              width: '130px',
              padding :'8px 10px',
              background: 'rgb(132, 134, 149)',
              color: '#000',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >{valueDisplay} <small>{unit}</small></div>
        </div>
        <div
          style={{
            width: '278px',
            height: '131px',
            clear: 'both',
            margin: '0 auto',
            backgroundImage: 'url(img/dynamiclinechart-bg2.png)',
            paddingLeft: '42px',
            paddingBottom: '22px'
          }}
        >
          <div
            style={{
              width: '236px',
              height: '109px'
            }}
          >
            <svg width="234" height="109">
              <polyline
                fill="none"
                stroke="yellow"
                strokeWidth="1"
                points={points}
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
} 
