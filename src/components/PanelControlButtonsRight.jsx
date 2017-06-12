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
        <a href="javascript:void(0)">DEFAULT</a>
        <a href="javascript:void(0)">RESTORE</a>
        <a href="javascript:void(0)">SET SAVE</a>
      </div>
    );
  }
} 
