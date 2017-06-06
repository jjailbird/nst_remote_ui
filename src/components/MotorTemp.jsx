import React, { Component } from 'react';

export default class MotorTemp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    let tempValue = 0;
    if(data) {
      tempValue = data;
      // console.log("tempValue", tempValue);
    }
    return (
      <div className="motor-temp">
          <span>Motor Temp</span> <span className="mTRed">{tempValue.toFixed(1)}</span><span>℃</span>
      </div>
    );
  }
} 
