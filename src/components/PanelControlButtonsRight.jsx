import React, { Component } from 'react';
import { getSocketCommand, sendCommandToDevice } from '../utils/functions';

export default class PanelControlButtonsRight extends Component {
  constructor(props) {
    super(props);
    this.target = this.props.target;
    this.setCommand = this.setCommand.bind(this);
  }
  setCommand(command) {
    const cmdString = getSocketCommand(this.target,command);  
    alert(cmdString);
    sendCommandToDevice(cmdString);
  }
  render() {
    return (
      <div
        className="conBoxAreaBtnBox cbabbRight"
        style={{
          overflow: 'hidden',
          marginTop: '9px',
          textAlign: 'right'         
        }}
      >
        <a href="javascript:void(0)" onClick={() => this.setCommand('SET_DEFAULT')}>DEFAULT</a>
        <a href="javascript:void(0)" onClick={() => this.setCommand('SET_RESTORE')}>RESTORE</a>
        <a href="javascript:void(0)" onClick={() => this.setCommand('SET_SAVE')}>SET SAVE</a>
      </div>
    );
  }
} 
