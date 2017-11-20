import React, { Component } from 'react';
import { getSocketCommand, sendCommandToDevice } from '../utils/functions'
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';

import { setRecording } from '../actions/m2SetupActions';

class PanelControlButtonsLeft extends Component {
  constructor(props) {
    super(props);
    this.snapshotCurrentPage = this.snapshotCurrentPage.bind(this);
    this.getNstTestLabel = this.getNstTestLabel.bind(this);
    this.recordingToggle = this.recordingToggle.bind(this);
  }
  recordingToggle() {
    const { dispatch, recording } = this.props;
    const recordingValue = !recording;
    // const command = getSocketCommand('REC_000', recordingValue == 'on' ? 1:0);
    const command = getSocketCommand('REC_000', recordingValue ? 1:0);
    sendCommandToDevice(command);

    dispatch(setRecording(!recording));
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
    
    sendCommandToDevice(JSON.stringify(command));
    // https://jsfiddle.net/codepo8/V6ufG/2/
    /*
    const pageTitle = document.getElementById('pageHiddenTitle').innerText;
    const date = new Date();
    const fileName = pageTitle + "-" + date.yyyymmddhhmmss();
    alert(fileName);
    window.html2canvas(document.body).then(function(canvas) {
      // document.body.appendChild(canvas);
      let hiddenSave = document.getElementById('hiddenSave');
      hiddenSave.href = canvas.toDataURL();
      hiddenSave.download = fileName;
      hiddenSave.click();
    });
    */ 
  }
  getNstTestLabel(){

    const command = {
      // "GET_NST_test_label": 1
      'NST_test_label': 'NST TEST 00001' 
    };
    
    // sendCommandToDevice(JSON.stringify(command), '192.168.147.20:8181');
    sendCommandToDevice(JSON.stringify(command));
  }
  render() {
    const {
      recording,
      dispatch
    } = this.props;

    let recordingButtonClass = ['button-rec'];
    if(recording) {
      recordingButtonClass.push('active');
    }

    return (
      <div 
        className="conBoxAreaBtnBox cbabbLeft"
        style={{
          overflow: 'hidden',
          marginTop: '9px',
          textAlign: 'left'         
        }}
      >
        <a 
          href="#"
          className="record-button"
          onClick={this.snapshotCurrentPage} 
        >
          CAP
        </a>
        <a 
          href="javascript:void(0)"
          onClick={this.recordingToggle}
        >
          REC
          <ReactLoading type="spin" color="#6B2638" height='16px' width='16px' delay="0" className={recordingButtonClass.join(' ')} />
        </a>
        <a href="javascript:void(0)" onClick={this.getNstTestLabel}>SAVE</a>
        <a href="#" id="hiddenSave" style={{display:'none'}}>HiddenSave</a>
      </div>
    );
  }
} 

function mapStateToProps(state){
  // console.log('driveData', state.driveData);  
  return {
    // DIO Command =================================
    recording: state.setM2SetupButtons.recording,
  }
}

export default connect(mapStateToProps)(PanelControlButtonsLeft);
