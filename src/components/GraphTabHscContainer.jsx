// import { connect } from 'react-redux';
import React, { Component } from 'react';
import ControlSwitchGroup from './ControlSwitchGroup';
import DynamicLineChart from './DynamicLineChart';
import DynamicBarChart from './DynamicBarChart';
import DonutDigitalChart from './DonutDigitalChart';

export default class GraphTabHscContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'PIE'
    };
    this.onButtonChange = this.onButtonChange.bind(this);
  }
  onButtonChange(value) {
    this.setState({
      type: value
    })
    
  }
  render() {
    const { type } = this.state;
    const { data, title } = this.props;
    // console.log('get graph data:', data);  
    
    return (
      <div className="panelBox graphBox">
        <div className="graphType">
          <span className="graphTopTitle">
            {title}
            <img 
              src="/img/data-title-triangle.png"
              style={{
                position: 'absolute',
                top: '0',
                right: '-17px'
              }}
            />
          </span>
          <div className="graphTypeContents">
            <div className={type !== 'PIE' ? 'hide' : ''}>
              <DonutDigitalChart data={data.sylinder} unit="mm" name="sylinder stroke" strokeColor="#8cb857" strokeColorLine="#2f4036"/>
              <DonutDigitalChart data={data.yawAngle} unit="deg" name="yaw angle" strokeColor="#8cb857" strokeColorLine="#2f4036"/>
              <DonutDigitalChart data={data.aPort} unit="kpa" name="a port pressure" strokeColor="#3581c9" strokeColorLine="#16315b"/>
              <DonutDigitalChart data={data.bPort} unit="kpa" name="b port pressure" strokeColor="#3581c9" strokeColorLine="#16315b"/>
            </div>
            <div className={type != 'BAR' ? 'hide' : ''}>
              <DynamicBarChart data={data.sylinder} unit="mm" name="sylinder stroke" barColor="#6f934f"/>
              <DynamicBarChart data={data.yawAngle} unit="deg" name="yaw angle" barColor="#6f934f"/>
              <DynamicBarChart data={data.aPort} unit="kpa" name="a port pressure" barColor="#2c68a8"/>
              <DynamicBarChart data={data.bPort} unit="kpa" name="a port pressure" barColor="#2c68a8"/>
            </div>
            <div className={type != 'LINE' ? 'hide' : ''}>
              <DynamicLineChart data={data.sylinder} unit="mm" name="lat. distance"/>
              <DynamicLineChart data={data.yawAngle} unit="deg" name="yaw angle" />
              <DynamicLineChart data={data.aPort} unit="kpa" name="a port pressure" />
              <DynamicLineChart data={data.bPort} unit="kpa" name="a port pressure" />              
            </div>

          </div>        
        </div>
        <div className="graphBtnBox">
          <ControlSwitchGroup
            value={this.state.type}
            buttons={[
              { idx: 1, title: 'PIE', value: 'PIE' },
              { idx: 2, title: 'BAR', value: 'BAR' },
              { idx: 3, title: 'LINE', value: 'LINE' }
            ]}
            onChange={this.onButtonChange}
          />
        </div>
      </div>
    )
  }

}
/*
function mapStateToProps(state){
    return {
      frontLeftData: state.frontLeftData
    }
}
*/
// export default connect(mapStateToProps)(GraphTabContainer);
