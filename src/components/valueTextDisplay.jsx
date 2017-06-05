import React, { Component } from 'react';

export default class valueTextDisplay extends Component {
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
