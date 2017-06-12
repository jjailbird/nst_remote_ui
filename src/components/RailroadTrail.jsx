import React, { Component } from 'react';

export default class RailroadTrail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cx: 0
    };
  }
  componentDidUpdate() {
    // this.timer = setInterval(this.thick, 1000 / 30);
    const { value, valueMax } = this.props;

    let distance = 0;
    let distanceMax = 250;
    if (value) {
      distance = parseFloat(value);
      distanceMax = parseFloat(valueMax);
    }
    const railPath = document.getElementById('railPath');
    const length = railPath.getTotalLength();

    const distancePercent = (distance / distanceMax) * 100;
    const distancePx = Math.round((length * distancePercent) / 100);

    const pos = railPath.getPointAtLength(distancePx);
    const dot = document.getElementById('circleTrain');


    // console.log('length:', length);
    // console.log('w:', w, 'h:', h);
    // console.log('pos:', pos);
    // v155.36
    dot.setAttribute('cx', pos.x);
    dot.setAttribute('cy', pos.y);
  }
  render() {
    return (
      <div
        style={{
          margin: '20px 15px 0'
        }}
      >
        <svg version="1.1" x="0px" y="0px" width="98px" height="335px" viewBox="0 0 98 335" enableBackground="new 0 0 98 335" xmlSpace="preserve">
          <path
            id="railPath" fill="none" stroke="#52714C" strokeWidth="2" strokeMiterlimit="10" 
            d="M20.885,316.502V47.308c0-15.358,12.45-27.808,27.808-27.808l0,0C64.05,19.5,76.5,31.95,76.5,47.308v60"/>
          <circle id="circleTrain" fill="#8E8E38" cx="0" cy="0" r="8.5"/>
        </svg>
      </div>
    );
  }

}

