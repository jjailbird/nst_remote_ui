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
        <a 
          href="#"
          onClick={this.snapshotCurrentPage} 
        >
          CAP
        </a>
        <a href="javascript:void(0)">REC</a>
        <a href="javascript:void(0)">SAVE</a>
        <a href="#" id="hiddenSave" style={{display:'none'}}>HiddenSave</a>
      </div>
    );
  }
} 