import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class TestSetupGaugeBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, name, unit, fillColor } = this.props;
    let value = 0;
    const barFull = 144;
    let barValue = 0;
    let barMax = 0; 
    let barPercent = 0; 
    let barPx = 0; 
    
    switch(name) {
      case 'tract':
        barMax = 100;
        break;
      case 'brake':
        barMax = 100;
        break;
    }
    
    if(data) {
      value = data;
      barValue = value;
      barPercent = (barValue / barMax) * 100; 
      barPx = Math.round((barFull * barPercent) / 100); 
    }
    const valueDisplay = isFloat(value) ? value.toFixed(0) : value;
    return (
      <div
      style={{
        width: '65px',
        margin: '0 auto',
        marginTop: '4px'
      }}
      >
        {/*<div className="bar-graph-title">{name} {value} <small>{unit}</small></div>*/}
        <div
          className="barBox"
          style={{
            width: '65px',
            padding: '2px'
          }}
        >
          <div className="barFill"
            style={{
              height: barPx,
              width: '59px',
              background: fillColor
            }}
          >
          </div>
        </div>
        <div
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: '5px',
              fontSize: '19px'
            }}
        >{valueDisplay}</div>
      </div>
    );
  }
} 
