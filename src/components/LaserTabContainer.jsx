import React, { Component } from 'react';
import ControlSwitchGroup from './ControlSwitchGroup';

export default class LaserTabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'FRT'
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
        <div className="setPiedata-btns graphBtnBox">
            <ControlSwitchGroup
                value={this.state.type}
                buttons={[
                { idx: 1, title: 'FRT', value: 'FRT' },
                { idx: 2, title: 'SIDE', value: 'SIDE' }
                ]}
                onChange={this.onButtonChange}
            />
        </div>
        <div
          className="motorControlTabImg"
          style={{
            marginTop: '17px'
          }}
        >
          <div className={type !== 'FRT' ? 'hide' : ''}>
            <img src="img/sample/setupsample1-1.png" alt="img/motor-control1.png"/>
          </div>
          <div className={type !== 'SIDE' ? 'hide' : ''}>
            <img src="img/sample/setupsample1-2.png" alt="img/motor-control2.png"/>
          </div>
        </div>
      </div>
    );
  }
} 
