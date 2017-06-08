import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class RailDonutPanelLeft extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, dType, lever } = this.props;
    let value = 0;
    let valueDType = 0;
    let valueSpeed = 0;
    let driveType = '';
    let driveDir = '';
    let driveDirColor = 0;
    let colorP = 'rgba(255,255,255,0.4)';
    let colorB = 'rgba(255,255,255,0.4)';
    //driveType font setting    
    let fontSizeDType = '30px';
    let fontWeightDType = 'bold';
    let paddingDType = '0 3px 0'
    let paddigBottomDType = '4px';
    let lineHeightDType = '30px';
    let colorDType = 'rgba(255,255,255,0.4)';
    let colorDType1 = colorDType;
    let colorDType2 = colorDType;
    let colorDType3 = colorDType;
    let colorDType4 = colorDType;
    let colorDType5 = colorDType;
    let colorDType6 = colorDType;
    let colorDTypeN = 'rgba(255,255,255,0.9)';
    let colorDTypeNBorder = colorDType;
    let colorDTypeActive = 'rgba(201,195,53,1)';//노랑

    switch(dType) {
      case 'auto':
        driveType = 'auto mode'
        break;
    }
    
    if(data) {
      value = data
      // valueDType = value.fwd;
      valueSpeed = value.speed;
    }
    if (lever) {
      valueDType = lever;
    }


    if(valueDType > 0){
      driveDir = 'FWD';
      driveDirColor = 'rgba(55,129,201,1)';//파랑
      colorB = 'rgba(255,255,255,0.8)'
    }else if(valueDType == 0){
      driveDir = 'N';
      driveDirColor = 'rgba(255,255,255,0.7)';//흰색
    }else if(valueDType < 0){
      driveDir = 'BWD';
      driveDirColor = 'rgba(204,85,85,0.8)';//빨강
      colorP = 'rgba(255,255,255,0.8)'
    }
    if(valueDType == -3){
      colorDType1 = colorDTypeActive;
    }else if(valueDType == -2){
      colorDType2 = colorDTypeActive;
    }else if(valueDType == -1){
      colorDType3 = colorDTypeActive;
    }else if(valueDType == 0){
      colorDTypeN = colorDTypeActive;
      colorDTypeNBorder = colorDTypeActive;
    }else if(valueDType == 1){
      colorDType4 = colorDTypeActive;
    }else if(valueDType == 2){
      colorDType5 = colorDTypeActive;
    }else if(valueDType == 3){
      colorDType6 = colorDTypeActive;
    }

    const speedDisplay = isFloat(valueSpeed) ? valueSpeed.toFixed(1) : valueSpeed;
    return (
      <div
        style={{
          width: '353px',
          height: '353px',
          position: 'relative'
        }}
      >
          <div 
            style={{
              position: 'absolute',
              width: '353px',
              textAlign: 'center',
              left: '0',
              top: '80px'
            }}
            classNmae="frontText"
          >
            <div
              style={{
                color: driveDirColor,
                fontSize: '33px',
                fontWeight: 'bold',
                marginBottom: '0px',
                lineHeight: '33px'
              }}
            >{driveDir}</div>
            <div
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '18px',
                fontWeight: 'bold',
                marginBottom: '1px',
                textTransform: 'uppercase'
              }}
            >{driveType}</div>
            <div
              style={{
                
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: fontSizeDType,
                    fontWeight: fontWeightDType,
                    color: colorDType1,
                    lineHeight: lineHeightDType,
                    padding: paddingDType,
                    paddingBottom: paddigBottomDType,
                    borderBottom: `2px solid ${colorDType1}`
                  }}
                >3</span>
                <span
                  style={{
                    fontSize: fontSizeDType,
                    fontWeight: fontWeightDType,
                    color: colorDType2,
                    lineHeight: lineHeightDType,
                    padding: paddingDType,
                    paddingBottom: paddigBottomDType,
                    borderBottom: `2px solid ${colorDType2}`
                  }}
                >2</span>
                <span
                  style={{
                    fontSize: fontSizeDType,
                    fontWeight: fontWeightDType,
                    color: colorDType3,
                    lineHeight: lineHeightDType,
                    padding: paddingDType,
                    paddingBottom: paddigBottomDType,
                    borderBottom: `2px solid ${colorDType3}`
                  }}
                >1</span>
                <span
                  style={{
                    fontSize: fontSizeDType,
                    fontWeight: fontWeightDType,
                    color: colorDTypeN,
                    lineHeight: lineHeightDType,
                    padding: paddingDType,
                    paddingBottom: paddigBottomDType,
                    borderBottom: `2px solid ${colorDTypeNBorder}`
                  }}
                >N</span>
                <span
                  style={{
                    fontSize: fontSizeDType,
                    fontWeight: fontWeightDType,
                    color: colorDType4,
                    lineHeight: lineHeightDType,
                    padding: paddingDType,
                    paddingBottom: paddigBottomDType,
                    borderBottom: `2px solid ${colorDType4}`
                  }}
                >1</span>
                <span
                  style={{
                    fontSize: fontSizeDType,
                    fontWeight: fontWeightDType,
                    color: colorDType5,
                    lineHeight: lineHeightDType,
                    padding: paddingDType,
                    paddingBottom: paddigBottomDType,
                    borderBottom: `2px solid ${colorDType5}`
                  }}
                >2</span>
                <span
                  style={{
                    fontSize: fontSizeDType,
                    fontWeight: fontWeightDType,
                    color: colorDType6,
                    lineHeight: lineHeightDType,
                    padding: paddingDType,
                    paddingBottom: paddigBottomDType,
                    borderBottom: `2px solid ${colorDType6}`
                  }}
                >3</span>
              </div>
              <div
                style={{
                  width: '198px',
                  margin: '7px auto 0',
                  overflow: 'hidden'
                }}
              >
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: colorP,
                    width: '49%',
                    float: 'left'
                  }}
                >P</span>
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: colorB,
                    width: '49%',
                    float: 'right'
                  }}
                >B</span>
              </div>
            </div>
            <div
              style={{
                marginTop: '0px',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '22px',
                fontWeight: 'bold'
              }}
            >SPEED km/h</div>
            <div
              style={{
                color: 'rgba(201,53,53,0.5)',
                fontSize: '67px',
                fontWeight: 'bold',
                lineHeight: '62px'
              }}
            >{speedDisplay}</div>
          </div>
          <div
            style={{
              width: '353px',
              height: '353px',
              background: 'url(/img/train_pie2.png)'
            }}
            classNmae="backGraph"
          >

          </div>
      </div>
    );
  }
} 
