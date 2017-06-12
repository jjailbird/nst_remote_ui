import React, { Component } from 'react';

export default class PanelControlButtonsLeft extends Component {
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
        <a href="javascript:void(0)">CAP</a>
        <a href="javascript:void(0)">REC</a>
        <a href="javascript:void(0)">SAVE</a>
      </div>
    );
  }
} 
