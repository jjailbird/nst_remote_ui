import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class RunningMileage extends Component {
  constructor(props) {
    super(props);
    this.resetMileage = this.resetMileage.bind(this);
  }
  resetMileage() {
    if(this.props.onResetMileageClick) {
      this.props.onResetMileageClick();
    }
  }
  render() {
    const { total, test } = this.props;
    let fTotal = total ? parseFloat(total) : 0.000;
    fTotal = fTotal.toFixed(3);

    let fTest = test ? parseFloat(test) : 0.000;
    fTest = fTest.toFixed(3);

    return (
      <div className="dlcBox" style={{ position: 'relative', marginTop: '60px', padding: '0px 10px', width: '100%' }}>
        <table style={{ width: '100%', color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', fontWeight: 'bold' }}>
          <tr>
            <td>TOTAL MILEAGE</td>
            <td style={{ textAlign: 'center' }}>km</td>
          </tr>
          <tr>
            <td style={{ color: '#fff' }}>>></td>
            <td style={{ color: '#fff', textAlign: 'right', fontSize: '20px' }}>{fTotal}</td>
          </tr>
          <tr>
            <td>TEST MILEAGE</td>
            <td style={{ textAlign: 'center' }}>m</td>
          </tr>
          <tr>
            <td style={{ color: '#ffff00' }}>>></td>
            <td style={{ color: '#ffff00', textAlign: 'right', fontSize: '20px' }}>{fTest}</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}><img src="/img/runningMan.white.png" alt="running man" /></td>
            <td style={{ textAlign: 'right' }}>
              <input
                type="button"
                value="RESET"
                onClick={this.resetMileage}
                style={{
                  position: 'relative',
                  padding: '5px 10px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(132, 134, 149, 1)',
                  color: '#000',
                  fontSize: '14px',
                  marginRight: '4px',
                  width: '105px',
                  fontWeight: 'bold'
                }}
              />    
            </td>
          </tr>
        </table>
      </div>
    );
  }
} 
