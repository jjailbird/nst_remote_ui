import React, { Component } from 'react';
import ControlSwitchButton from './ControlSwitchButton';
import { connect } from 'react-redux';

class TrailerBogieDescTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'RUN'
    };
    this.onButtonChange = this.onButtonChange.bind(this);
    this.onCarMassChange = this.onCarMassChange.bind(this);
  }
  onButtonChange(value) {
    this.setState({
      type: value
    })
  }
  onCarMassChange(value) {
    if(this.props.onChange) {
      this.props.onChange(value);
    }
  }
  render() {
    //const { type } = this.state;
    const { carMass } = this.props;
    return (
      <div className="setupBoxCon setupBoxConDesc">
        <div className={carMass !== 'RUN' ? 'hide' : ''}>
          <div className="setupDescBox pull-left">
            <ul className="modeConfig3-list setupDescList">
              <li>
                  <span>WEELBASE</span>
                  <span>:</span>
                  <span>1. 8 m</span>
              </li>
              <li>
                  <span>WEIGHT</span>
                  <span>:</span>
                  <span>7.0 ton</span>
              </li>
              <li>
                  <span>WHEEL DIA</span>
                  <span>:</span>
                  <span>660 mm</span>
              </li>
              <li>
                  <span>BOGIE DIST</span>
                  <span>:</span>
                  <span>18 m</span>
              </li>
              <li>
                  <span>BRAKE SYSTEM</span>
                  <span>:</span>
                  <span>Hydraulic</span>
              </li>
              <li>
                  <span>Traction Link</span>
                  <span>:</span>
                  <span>Mono Link</span>
              </li>
            </ul>
          </div>
          <div className="setupDescBox pull-right">
            <ul className="modeConfig3-list setupDescList">
              <li>
                  <span>Primary Spring</span>
                  <span>:</span>
                  <span>Rubber</span>
              </li>
              <li>
                  <span>Max Disp. X</span>
                  <span>:</span>
                  <span>14 mm</span>
              </li>
              <li>
                  <span>Max Disp. Y</span>
                  <span>:</span>
                  <span>6 mm</span>
              </li>
              <li>
                  <span>Motor Type</span>
                  <span>:</span>
                  <span>PMSM</span>
              </li>
              <li>
                  <span>MAX BRAKE PRESSURE</span>
                  <span>:</span>
                  <span>300Pa</span>
              </li>
              <li>
                  <span>MAX MOTOR TORQUE</span>
                  <span>:</span>
                  <span>500Nm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={carMass !== 'DEMO' ? 'hide' : ''}>
          <div className="setupDescBox pull-left">
            <ul className="modeConfig3-list setupDescList">
              <li>
                  <span>WEELBASE</span>
                  <span>:</span>
                  <span>1. 8 m</span>
              </li>
              <li>
                  <span>WEIGHT</span>
                  <span>:</span>
                  <span>10 ton</span>
              </li>
              <li>
                  <span>WHEEL DIA</span>
                  <span>:</span>
                  <span>660 mm</span>
              </li>
              <li>
                  <span>BOGIE DIST</span>
                  <span>:</span>
                  <span>18 m</span>
              </li>
              <li>
                  <span>BRAKE SYSTEM</span>
                  <span>:</span>
                  <span>Hydraulic</span>
              </li>
              <li>
                  <span>Traction Link</span>
                  <span>:</span>
                  <span>Mono Link</span>
              </li>
            </ul>
          </div>
          <div className="setupDescBox pull-right">
            <ul className="modeConfig3-list setupDescList">
              <li>
                  <span>Primary Spring</span>
                  <span>:</span>
                  <span>Rubber</span>
              </li>
              <li>
                  <span>Max Disp. X</span>
                  <span>:</span>
                  <span>14 mm</span>
              </li>
              <li>
                  <span>Max Disp. Y</span>
                  <span>:</span>
                  <span>6 mm</span>
              </li>
              <li>
                  <span>Motor Type</span>
                  <span>:</span>
                  <span>PMSM</span>
              </li>
              <li>
                  <span>MAX BRAKE PRESSURE</span>
                  <span>:</span>
                  <span>300Pa</span>
              </li>
              <li>
                  <span>MAX MOTOR TORQUE</span>
                  <span>:</span>
                  <span>500Nm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="setupDescBoxBtns pull-right">
          <ControlSwitchButton 
            title="RUN MODE" 
            activeBgColor="rgba(255,255,255,0.3)" 
            textColor="#fff" 
            padding="3px 20px" 
            value={carMass}
            buttons={[
              { idx: 1, title: 'RUN', value: 'RUN' }, 
              { idx: 2, title: 'DEMO', value: 'DEMO' }
            ]}
            onChange={this.onCarMassChange}
          />
        </div>
      </div>
    );
  }
} 

function mapStateToProps(state){
    // console.log('itcsetup',state.setItcSetupFrontRightData);
    return {
      carMass: state.setSetupButtons.carMass,
    }
}

export default connect(mapStateToProps)(TrailerBogieDescTab);
