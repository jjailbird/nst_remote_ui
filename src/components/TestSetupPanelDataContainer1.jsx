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
    let dataTypeL1 = '';
    let dataTypeL2 = '';
    let dataTypeL3 = '';
    let dataTypeL4 = '';
    let dataTypeL5 = 0;
    let dataTypeR1 = '';
    let dataTypeR2 = '';
    let dataTypeR3 = '';
    let dataTypeR4 = '';
    let dataTypeR5 = 0;
    switch(compTitle1) {
      case 'BMS':
        dataTypeL1 = dataLeft.cell1;
        dataTypeL2 = dataLeft.cell2;
        dataTypeL3 = dataLeft.cell3;
        dataTypeL4 = dataLeft.cell4;
        
        dataTypeR1 = dataRight.cell1;
        dataTypeR2 = dataRight.cell2;
        dataTypeR3 = dataRight.cell3;
        dataTypeR4 = dataRight.cell4;
        
        dataTypeL5 = dataLeft.socTotal;
        dataTypeR5 = dataRight.tempAvg;

        break;
      case 'INV':
        dataTypeL1 = dataLeft.inv1;
        dataTypeL2 = dataLeft.inv2;
        dataTypeL3 = dataLeft.inv3;
        dataTypeL4 = dataLeft.inv4;

        dataTypeR1 = dataRight.inv1;
        dataTypeR2 = dataRight.inv2;
        dataTypeR3 = dataRight.inv3;
        dataTypeR4 = dataRight.inv4;

        dataTypeL5 = dataLeft.invAvg;
        dataTypeR5 = dataRight.tempAvg;
        break;
      case 'BCU':
        dataTypeL1 = dataLeft.b1;
        dataTypeL2 = dataLeft.b2;
        dataTypeL3 = dataLeft.b3;
        dataTypeL4 = dataLeft.b4;
        
        dataTypeR1 = dataRight.b1;
        dataTypeR2 = dataRight.b2;
        dataTypeR3 = dataRight.b3;
        dataTypeR4 = dataRight.b4;

        dataTypeL5 = dataLeft.mBogieAvg;
        dataTypeR5 = dataRight.tBogieAvg;
        break;
    }
    
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
                data={dataTypeL5} 
                unit={unitLeft1}
                name={cNameLeft1} 
                cCase={cCaseLeft}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
              />
            </div>
            <TestSetupPanelDataContainerBarChart data={dataTypeL1} title={`${barTitle}1`} unit={unitLeft1} barColor={CompColor}/>
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
                data={dataTypeL5} 
                unit={unitLeft2}
                name={cNameLeft2} 
                cCase={cCaseLeft}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
              />
            </div>
            <TestSetupPanelDataContainerBarChart data={dataTypeL1} title={`${barTitle}1`} unit={unitLeft2} barColor={CompColor}/>
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
                data={dataTypeL5} 
                unit={unitRight1}
                name={cNameRight1} 
                cCase={cCaseLeft}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
              />
            </div>
            <TestSetupPanelDataContainerBarChart data={dataTypeL1} title={`${barTitle}1`} unit={unitRight1} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataTypeL1} title={`${barTitle}2`} unit={unitRight1} barColor={CompColor}/>
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
                data={dataTypeL5} 
                unit={unitRight2}
                name={cNameRight2} 
                cCase={cCaseLeft}
                strokeColor={CompColor}
                strokeColorLine="rgba(255,255,255,0.2)" 
                donutWidth="53" 
                donutStrokeWidth="5"
                valueFontSize="24px"
                valueFontColor="#fff"
              />
            </div>
            <TestSetupPanelDataContainerBarChart data={dataTypeL1} title={`${barTitle}1`} unit={unitRight2} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataTypeL1} title={`${barTitle}2`} unit={unitRight2} barColor={CompColor}/>
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