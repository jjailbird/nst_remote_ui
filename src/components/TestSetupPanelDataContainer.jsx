import React, { Component } from 'react';
import TestSetupPanelDataContainerBarChart from './TestSetupPanelDataContainerBarChart';
import TestPanelDataDonutCircleChart from './TestPanelDataDonutCircleChart'


export default class TestSetupPanelDataContainer extends Component {
  render() {
    const { dataLeft, dataRight, compTitle, nameLeft, nameRight, unitLeft, unitRight, cNameLeft, cNameRight, barTitle, CompColor } = this.props;
    //console.log('get graph dataLeft:', dataLeft);  
    let dataTypeL1 = '';
    let dataTypeL2 = '';
    let dataTypeL3 = '';
    let dataTypeL4 = '';
    let dataTypeR1 = '';
    let dataTypeR2 = '';
    let dataTypeR3 = '';
    let dataTypeR4 = '';
    switch(compTitle) {
      case 'BMS':
        dataTypeL1 = dataLeft.cell1;
        dataTypeL2 = dataLeft.cell2;
        dataTypeL3 = dataLeft.cell3;
        dataTypeL4 = dataLeft.cell4;
        dataTypeR1 = dataRight.cell1;
        dataTypeR2 = dataRight.cell2;
        dataTypeR3 = dataRight.cell3;
        dataTypeR4 = dataRight.cell4;
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
        break;
    }
    
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
                data={dataTypeL1} 
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
            <TestSetupPanelDataContainerBarChart data={dataTypeL1} title={`${barTitle}1`} unit={unitLeft} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataTypeL2} title={`${barTitle}2`} unit={unitLeft} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataTypeL3} title={`${barTitle}3`} unit={unitLeft} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataTypeL4} title={`${barTitle}4`} unit={unitLeft} barColor={CompColor}/>
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
                data={dataTypeL1} 
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
            <TestSetupPanelDataContainerBarChart data={dataTypeR1} title={`${barTitle}1`} unit={unitRight} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataTypeR2} title={`${barTitle}2`} unit={unitRight} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataTypeR3} title={`${barTitle}3`} unit={unitRight} barColor={CompColor}/>
            <TestSetupPanelDataContainerBarChart data={dataTypeR4} title={`${barTitle}4`} unit={unitRight} barColor={CompColor}/>
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