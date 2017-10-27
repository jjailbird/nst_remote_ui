import React, { Component } from 'react';
import TestSetupPanelDataContainerBarChart from './TestSetupPanelDataContainerBarChart';
import TestPanelDataDonutCircleChart from './TestPanelDataDonutCircleChart'


export default class TestSetupPanelDataContainer1 extends Component {
  render() {
    const { dataLeft, dataRight, 
      compTitle1, compTitle2, 
      nameLeft, nameRight, 
      unitLeft1, unitLeft2, unitRight1, unitRight2, cNameLeft1, cNameRight1, cNameLeft2, cNameRight2,
      barTitle, CompColor } = this.props;
    //console.log('get graph dataLeft:', dataLeft);  
    let dataLeft1 = '';
    let dataLeft2 = '';
    let dataLeft3 = '';
    let dataLeft4 = '';
    let dataLeftCircle1 = 0;
    let dataLeftValueMax1 = 100;
    let dataLeftCircle2 = 0;
    let dataLeftValueMax2 = 100;
    
    let dataRight1 = '';
    let dataRight2 = '';
    let dataRight3 = '';
    let dataRight4 = '';
    let dataRightCircle1 = 0;
    let dataRightValueMax1 = 100;
    let dataRightCircle2 = 0;
    let dataRightValueMax2 = 100;

    dataLeft1 = dataLeft.data1;
    dataLeft2 = dataLeft.data2;
    dataLeftCircle1 = dataLeft.circle1;
    dataLeftValueMax1 = dataLeft.valueMax1 ? Number(dataLeft.valueMax1) : 100;
    dataLeftCircle2 = dataLeft.circle2;
    dataLeftValueMax2 = dataLeft.valueMax2 ? Number(dataLeft.valueMax2) : 100;
    
    dataRight1 = dataRight.data1;
    dataRight2 = dataRight.data2;
    dataRight3 = dataRight.data3;
    dataRight4 = dataRight.data4;

    dataRightCircle1 = dataRight.circle1;
    dataRightValueMax1 = dataRight.valueMax1;
    dataRightCircle2 = dataRight.circle2;
    dataRightValueMax2 = dataRight.valueMax2;

    const cCaseLeft = `${compTitle1} ${cNameLeft1}`;
    const cCaseRight = `${compTitle2} ${cNameRight1}`;

    return (
      <div className="testPanelBox testSetupPanelDataBox">
        <span className="testPanelBoxTitle">
          {compTitle1}
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
        <div className="pull-left tspdInner" style={{ position: 'absolute', top: '-39px' }}>
          <div className="tspdBarBox">
            <div
              style={{
                height: '45px',
                position: 'realative',
                marginLeft: '137px',
                right: '0px',
                top: '0px'
              }}
            >
              <TestPanelDataDonutCircleChart 
                data={dataLeftCircle1} 
                unit={unitLeft1}
                name={cNameLeft1} 
                cCase={cCaseLeft}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
                valueMax={dataLeftValueMax1}
              />
            </div>
            <TestSetupPanelDataContainerBarChart data={dataLeft1} title={`${barTitle}1`} unit={unitLeft1} barColor={CompColor} valueMax={dataLeftValueMax1} />
          </div>
          <div className="tspdBarBox" style={{ marginTop: '40px' }}>
            <div
              style={{
                height: '45px',
                position: 'realative',
                marginLeft: '137px',
                right: '0px',
                top: '0px'
              }}
            >
              <TestPanelDataDonutCircleChart 
                data={dataLeftCircle2} 
                unit={unitLeft2}
                name={cNameLeft2} 
                cCase={cCaseLeft}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
                valueMax={dataLeftValueMax2}
              />
            </div>
            <TestSetupPanelDataContainerBarChart data={dataLeft2} title={`${barTitle}1`} unit={unitLeft2} barColor={CompColor} valueMax={dataLeftValueMax2} />
          </div>
        </div>
        <span className="testPanelBoxTitle right" style={{ marginLeft: '316px', borderLeft: '1px solid rgba(255,255,255,0.4)' }}>
          {compTitle2}
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
        <div className="pull-right tspdInner" style={{ position: 'absolute', top: '-39px', right: '22px' }}>
          <div className="tspdBarBox">
            <div
              style={{
                height: '45px',
                position: 'realative',
                marginLeft: '137px',
                right: '0px',
                top: '0px'
              }}
            >
              <TestPanelDataDonutCircleChart 
                data={dataRightCircle1} 
                unit={unitRight1}
                name={cNameRight1} 
                cCase={cCaseLeft}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
                valueMax={dataRightValueMax1}
              />
            </div>
            <TestSetupPanelDataContainerBarChart data={dataRight1} title={`${barTitle}1`} unit={unitRight1} barColor={CompColor} valueMax={dataRightValueMax1} />
            <TestSetupPanelDataContainerBarChart data={dataRight2} title={`${barTitle}2`} unit={unitRight1} barColor={CompColor} valueMax={dataRightValueMax1}/>
          </div>
          <div className="tspdBarBox">
            <div
              style={{
                height: '45px',
                position: 'realative',
                marginLeft: '137px',
                right: '0px',
                top: '0px'
              }}
            >
              <TestPanelDataDonutCircleChart 
                data={dataRightCircle2} 
                unit={unitRight2}
                name={cNameRight2} 
                cCase={cCaseLeft}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
                valueMax={dataRightValueMax2}
              />
            </div>
            <TestSetupPanelDataContainerBarChart data={dataRight3} title={`${barTitle}1`} unit={unitRight2} barColor={CompColor} valueMax={dataRightValueMax2} />
            <TestSetupPanelDataContainerBarChart data={dataRight4} title={`${barTitle}2`} unit={unitRight2} barColor={CompColor} valueMax={dataRightValueMax2} />
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