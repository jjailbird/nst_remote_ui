import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class TestSetupPanelDataContainerBarChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, title, unit, barColor } = this.props;
    //console.log('datadata?? ',data)
    const barFull = 258;   
    let barValue = 0;
    let barValueShift =0;
    let barMax = 0; 
    let barPercent = 0; 
    let barPx = 0; 
    let value = 0;
    //console.log('titletitle = ',title)
    switch(title) {
      case 'PACK #1':
        barValueShift = 0;
        barMax = 100;
        break;
      case 'PACK #2':
        barValueShift = 0;
        barMax = 100;
        break;
      case 'PACK #3':
        barValueShift = 0;
        barMax = 100;
        break;
      case 'PACK #4':
        barValueShift = 0;
        barMax = 100;
        break;
      case 'INV #1':
        barValueShift = 0;
        if (unit === '℃')
          barMax = 100;
        else
          barMax = 900;
        break;
      case 'INV #2':
        barValueShift = 0;
        if (unit === '℃')
          barMax = 100;
        else
          barMax = 900;
        break;
      case 'INV #3':
        barValueShift = 0;
        if (unit === '℃')
          barMax = 100;
        else
          barMax = 900;
        break;
      case 'INV #4':
        barValueShift = 0;
        if (unit === '℃')
          barMax = 100;
        else
          barMax = 900;
        break;
      case 'Caliper #1':
        barValueShift = 0;
        barMax = 900;
        break;
      case 'Caliper #2':
        barValueShift = 0;
        barMax = 900;
        break;
      case 'Caliper #3':
        barValueShift = 0;
        barMax = 900;
        break;
      case 'Caliper #4':
        barValueShift = 0;
        barMax = 900;
        break;
    }

    if(data) {
      value = data;
      barValue = value + barValueShift;
      barPercent = (barValue / barMax) * 100; 
      barPx = Math.round((barFull * barPercent) / 100); 
      //console.log('title+barPx',title,barPx,barFull)
    }
    const valueDisplay = isFloat(value) ? value.toFixed(2) : value;
    return (
        <div
            className="tspdBarCase"
            style={{
            marginTop: '5px',
            fontSize: '13px'
            }}
        >
          <span
          style={{
              float: 'left',
              color: '#fff'
          }}
          >{title}</span>
          <span
          style={{
              float: 'right',
              color: '#fff',
              textAlign: 'right'
          }}
          >{valueDisplay} {unit}</span>
          <div
          className="stroke"
          style={{
              border: '1px solid rgba(255,255,255,0.3)',
              width: '100%',                          
              height: '15px',
              clear: 'both',
              marginTop: '0px',
              marginBottom: '0px',
              display: 'inline-block',
              position: 'relative',
              padding: '2px 2px'
          }}
          >
            <div 
                className="barFill"
                style={{
                background: `${barColor}`,
                width: `${barPx}px`,
                height: '9px'
                }}
            ></div>
          </div>
        </div>
    );
  }
} 
