import React, { Component } from 'react';
import TestSetupPanelDataContainerBarChart from './TestSetupPanelDataContainerBarChart';
import TestPanelDataDonutCircleChart from './TestPanelDataDonutCircleChart'


export default class TestSetupPanelDataContainer extends Component {
  render() {
    const { dataLeft, dataRight, compTitle, nameLeft, nameRight, unitLeft, unitRight, cNameLeft, cNameRight, barTitle, CompColor } = this.props;
    if(compTitle == 'T-BMS')
      console.log('get graph dataLeft:', dataLeft);  
    let dataLeft1 = '';
    let dataLeft2 = '';
    let dataLeft3 = '';
    let dataLeft4 = '';
    let dataLeftCircle = 0;
    let dataRight1 = '';
    let dataRight2 = '';
    let dataRight3 = '';
    let dataRight4 = '';
    let dataRightCircle = 0;
    
    dataLeft1 = dataLeft.data1;
    dataLeft2 = dataLeft.data2;
    dataLeft3 = dataLeft.data3;
    dataLeft4 = dataLeft.data4;
    
    dataRight1 = dataRight.data1;
    dataRight2 = dataRight.data2;
    dataRight3 = dataRight.data3;
    dataRight4 = dataRight.data4;
    
    dataLeftCircle = dataLeft.circle;
    dataRightCircle = dataRight.circel;
   
    const cCaseLeft = `${compTitle} ${cNameLeft}`;
    const cCaseRight = `${compTitle} ${cNameLeft}`;

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
            <TestSetupPanelDataContainerBarChart data={dataLeft1} title={`${barTitle}1`} unit={unitLeft} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataLeft2} title={`${barTitle}2`} unit={unitLeft} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataLeft3} title={`${barTitle}3`} unit={unitLeft} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataLeft4} title={`${barTitle}4`} unit={unitLeft} barColor={CompColor}/>
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
            <TestSetupPanelDataContainerBarChart data={dataRight1} title={`${barTitle}1`} unit={unitRight} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataRight2} title={`${barTitle}2`} unit={unitRight} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataRight3} title={`${barTitle}3`} unit={unitRight} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataRight4} title={`${barTitle}4`} unit={unitRight} barColor={CompColor}/>
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