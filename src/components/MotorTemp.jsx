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
          Motor Temp <span>{tempValue}</span>℃
      </div>
    );
  }
} 
