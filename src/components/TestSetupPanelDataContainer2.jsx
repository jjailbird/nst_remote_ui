import React, { Component } from 'react';
import TestSetupPanelDataContainerBarChart from './TestSetupPanelDataContainerBarChart';
import TestPanelDataDonutCircleChart from './TestPanelDataDonutCircleChart'

// For T-BMS
export default class TestSetupPanelDataContainer2 extends Component {
  render() {
    const { 
      dataLeft, dataRight, compTitle, nameLeft, nameRight, 
      unitLeft, unitRight, cNameLeft, cNameRight, CompColor, 
      barTitle, 
      barTitleLeft1, barTitleLeft2, barTitleLeft3, barTitleLeft4,
      barTitleRight1, barTitleRight2, barTitleRight3, barTitleRight4,
      unitLeft1, unitLeft2, unitLeft3, unitLeft4,
      unitRight1, unitRight2, unitRight3, unitRight4,
    } = this.props;
    let dataLeft1 = '';
    let dataLeft2 = '';
    let dataLeft3 = '';
    let dataLeft4 = '';
    let dataLeftCircle = 0;
    let dataLeftValueMax = 100;
    let dataRight1 = '';
    let dataRight2 = '';
    let dataRight3 = '';
    let dataRight4 = '';
    let dataRightCircle = 0;
    let dataRightValueMax = 100;
    
    dataLeft1 = dataLeft.data1;
    dataLeft2 = dataLeft.data2;
    dataLeft3 = dataLeft.data3;
    dataLeft4 = dataLeft.data4;
    dataLeftValueMax = dataLeft.valueMax ? dataLeft.valueMax : 100;
    
    dataRight1 = dataRight.data1;
    dataRight2 = dataRight.data2;
    dataRight3 = dataRight.data3;
    dataRight4 = dataRight.data4;
    dataRightValueMax = dataRight.valueMax ? dataRight.valueMax : 100;
    
    dataLeftCircle = dataLeft.circle;
    dataRightCircle = dataRight.circle;
   
    const cCaseLeft = `${compTitle} ${cNameLeft}`;
    const cCaseRight = `${compTitle} ${cNameRight}`;

    return (
      <div className="testPanelBox testSetupPanelDataBox">
        <span className="testPanelBoxTitle">
          {compTitle}
          <img 
            src="/img/data-title-triangleBig.png"
            alt="data-title-triangleBig"
            style={{
              position: 'absolute',
              top: '0',
              right: '-17px'
            }}
          />
        </span>
        <div className="pull-left tspdInner">
          <div className="tspdBarBox">
            <div
              style={{
                height: '45px',
                position: 'absolute',
                right: '0px',
                top: '0px'
              }}
            >
              <TestPanelDataDonutCircleChart 
                data={dataLeftCircle} 
                unit={unitLeft}
                name={cNameLeft} 
                cCase={cCaseLeft}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
                valueMax={dataLeftValueMax}
              />
            </div>
            <div 
              className="tspdDesc"
              style={{
                textTransform: 'uppercase',
                color: '#fff',
                fontWeight: 'bold',
                height: '22px'
              }}
            >
              {nameLeft} {nameLeft ? `${unitLeft}` : ''} 
            </div>
            <TestSetupPanelDataContainerBarChart data={dataLeft1} title={`${barTitle}1 SOC`} unit={unitLeft} barColor={CompColor} valueMax={dataLeftValueMax} />
            <TestSetupPanelDataContainerBarChart data={dataLeft2} title={`${barTitle}2 SOC`} unit={unitLeft} barColor={CompColor} valueMax={dataLeftValueMax} />
            <TestSetupPanelDataContainerBarChart 
              data={dataLeft3} title="PACK #1 VOLTAGE" unit="V" valueMax="900" barColor={CompColor} 
            />
            <TestSetupPanelDataContainerBarChart 
              data={dataLeft4} title="PACK #2 VOLTAGE" unit="V"  valueMax="900" barColor={CompColor}
            />
          </div>
        </div>
        <div className="pull-right tspdInner">
          <div className="tspdBarBox">
            <div
              style={{
                height: '45px',
                position: 'absolute',
                right: '0px',
                top: '0px'
              }}
            >
              <TestPanelDataDonutCircleChart 
                data={dataRightCircle} 
                unit={unitRight}
                name={cNameRight} 
                cCase={cCaseRight}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
                valueMax={dataRightValueMax}
              />
            </div>
            <div 
              className="tspdDesc"
              style={{
                color: '#fff',
                fontWeight: 'bold',
                height: '22px'
              }}
            >
              {nameRight} {nameRight ? `${unitRight}` : ''} 
            </div>
            <TestSetupPanelDataContainerBarChart data={dataRight1} title={`${barTitle}1 TEMP`} unit={unitRight} barColor={CompColor} valueMax={dataRightValueMax} />
            <TestSetupPanelDataContainerBarChart data={dataRight2} title={`${barTitle}2 TEMP`} unit={unitRight} barColor={CompColor} valueMax={dataRightValueMax} />
            <TestSetupPanelDataContainerBarChart
              data={dataRight3} title="PACK #1 CURRENT" unit="A" valueMax="1000" valueShift="500" barColor={CompColor}
            />
            <TestSetupPanelDataContainerBarChart
              data={dataRight4} title="PACK #2 CURRENT" unit="A" valueMax="1000" valueShift="500" barColor={CompColor}
            />
          </div>
        </div>
      </div>
    )
  }

}
/*
function mapStateToProps(state){
    return {
      bmsSocData: state.bmsSocData,
      bmsTempData: state.bmsTempData
    }
}

export default connect(mapStateToProps)(TestSetupPanelDataContainer);*/