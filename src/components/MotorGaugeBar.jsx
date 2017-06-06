import React, { Component } from 'react';

export default class MotorGaugeBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, name, unit } = this.props;
    let value = 0;
    const barFull = 38;
    let barValue = 0;
    let barMax = 0; 
    let barPercent = 0; 
    let barPx = 0; 
    
    switch(name) {
      case 'rpm':
        barMax = 3000;
        break;
      case 'torque':
        barMax = 3000;
        break;
    }
    
    if(data) {
      value = data;
      barValue = value;
      barPercent = (barValue / barMax) * 100; 
      barPx = Math.round((barFull * barPercent) / 100); 
    }
    return (
      <div>
        <div className="bar-graph-title">{name} {value.toFixed(1)} <small>{unit}</small></div>
        <div className="barBox">
          <div className="barFill"
            style={{
              height: barPx
            }}
          >
          </div>
        </div>
      </div>
    );
  }
} 
