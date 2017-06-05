import React, { Component } from 'react';

export default class PanelControlButtonsRight extends Component {
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
        <a href="">DEFAULT</a>
        <a href="">RESTORE</a>
        <a href="">SET SAVE</a>
      </div>
    );
  }
} 
