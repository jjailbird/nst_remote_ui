import React, { Component } from 'react';

export default class FluidTemp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    let tempValue = 0;
    if(data) {
      tempValue = data.toFixed(1);
      // console.log("tempValue", tempValue);
    }
    return (
      <div className="motor-temp">
          <span>FLUID Temp</span> <span className="mTRed">{tempValue}</span><span>℃</span>
      </div>
    );
  }
} 
