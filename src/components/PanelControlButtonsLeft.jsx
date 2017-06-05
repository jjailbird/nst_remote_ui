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
        <a href="">CAP</a>
        <a href="">REC</a>
        <a href="">SAVE</a>
      </div>
    );
  }
} 
