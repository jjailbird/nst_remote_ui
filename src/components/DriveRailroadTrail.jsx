import React, { Component } from 'react';

export default class DriveRailroadTrail extends Component {
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


     //console.log('length:', length);
    // console.log('w:', w, 'h:', h);
     //console.log('pos:', pos);

    dot.setAttribute('cx', pos.x);
    dot.setAttribute('cy', pos.y);
  }
  render() {
    return (
      <div
        style={{
          margin: '0px 15px 0'
        }}
      >
      <div
        className="tcpTitle"
        style={{
          fontSize: '18px'
        }}
      >Vehicle position</div>
      <svg version="1.1" x="0px" y="0px" width="131.562px" height="426.667px" viewBox="0 0 131.562 426.667" enableBackground="new 0 0 131.562 426.667">
        <path id="railPath" fill="none" stroke="#F7F8F8" strokeWidth="4" strokeMiterlimit="10" d="M15.347,409.891V70.667c0-28.962,23.479-52.441,52.44-52.441l0,0c28.962,0,52.44,23.479,52.44,52.441v82.17"/>
        <circle id="circleTrain" opacity="0.8" fill="#C30D23" cx="120.228" cy="152.199" r="11.333"/>
      </svg>
      </div>
    );
  }

}

