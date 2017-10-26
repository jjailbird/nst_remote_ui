import React, { Component } from 'react';
import { sendCommandToDevice } from '../utils/functions'

export default class PanelControlButtonsLeft extends Component {
  constructor(props) {
    super(props);
    this.snapshotCurrentPage = this.snapshotCurrentPage.bind(this);
  }
  snapshotCurrentPage(e) {
    const snapshotPrefix = localStorage.getItem("NST_test_label");
    let snapshotTarget = window.location.pathname;
    snapshotTarget = snapshotTarget.replace(/\//gi, ".");
  
    const date = new Date();
    const snapshotDate = date.yyyymmddhhmmss();
    
    const command = {
      "CAPTURE": `${snapshotPrefix}${snapshotTarget}.${snapshotDate}` 
    };
    
    sendCommandToDevice(JSON.stringify(command), 'localhost:8181');
  }
  render() {
    return (
      <div 
        className="conBoxAreaBtnBox cbabbLeft"
        style={{
          overflow: 'hidden',
          marginTop: '9px',
          textAlign: 'left'         
        }}
      >
        <a href="javascript:void(0)" onClick={this.snapshotCurrentPage}>CAP</a>
        <a href="javascript:void(0)">REC</a>
        <a href="javascript:void(0)">SAVE</a>
      </div>
    );
  }
} 