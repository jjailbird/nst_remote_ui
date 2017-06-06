import React, { Component } from 'react';
import ControlSwitchGroup from './ControlSwitchGroup';

export default class MotorControlTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'ISO'
    };
    this.onButtonChange = this.onButtonChange.bind(this);
  }
  onButtonChange(value) {
    this.setState({
      type: value
    })
    
  }
  render() {
    const { type } = this.state;

    return (
      <div>
        <ControlSwitchGroup
            value={this.state.type}
            buttons={[
            { idx: 1, title: 'ISO', value: 'ISO' },
            { idx: 2, title: 'SIDE', value: 'SIDE' },
            { idx: 3, title: 'FRT', value: 'FRT' },
            { idx: 4, title: 'TOP', value: 'TOP' }
            ]}
            onChange={this.onButtonChange}
        />
        <div
          className="motorControlTabImg"
          style={{
            marginTop: '17px'
          }}
        >
          <div className={type !== 'ISO' ? 'hide' : ''}>
            <img src="/img/motor-control1.png" alt="img/motor-control1.png"/>
          </div>
          <div className={type !== 'SIDE' ? 'hide' : ''}>
            <img src="/img/motor-control2.png" alt="img/motor-control2.png"/>
          </div>
          <div className={type !== 'FRT' ? 'hide' : ''}>
            <img src="/img/motor-control3.png" alt="img/motor-control3.png"/>
          </div>
          <div className={type !== 'TOP' ? 'hide' : ''}>
            <img src="/img/motor-control4.png" alt="img/motor-control4.png"/>
          </div>
        </div>
      </div>
    );
  }
} 
