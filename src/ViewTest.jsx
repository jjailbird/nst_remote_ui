import React, { Component } from 'react';
import DialIndicator from './components/DialIndicator';
import RailroadTrail from './components/RailroadTrail';
import DonutChart2 from './components/DonutChart2';
import DonutDigitalChart from './components/DonutDigitalChart';


export default class ViewTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indicatorValue: 0,
      trainDistance: 0,
    };
    this.thick = this.thick.bind(this);
    this.chartData1 = [];
  }
  componentDidMount() {
    this.timer = setInterval(this.thick, 1000/30);
    /*
    for(let i=0;i<100;i++) {
      this.chartData.push(Math.floor(Math.random() * (120 - 0)) + 0)
    }
    */
   
    /*
    const script = document.createElement('script');
    script.src = 'http://d3js.org/d3.v3.min.js';
    script.async = true;
    document.body.appendChild(script);  
    */
  }
  thick() {
    const num1 = Math.floor(Math.random() * (12 - 0)) + 0;
    let num2 = parseFloat(this.state.trainDistance) + 1;
    if (num2 > 586.16357421875)
      num2 = 0;
    const num3 = Math.floor(Math.random() * (120 - 0)) + 0; 
    if(this.chartData1.length < 292) {
      this.chartData1.push(Math.floor(Math.random() * (30 - 0)) + 0);
    } else {
      this.chartData1.shift();
      this.chartData1.push(Math.floor(Math.random() * (30 - 0)) + 0);
    }
    this.setState({
      indicatorValue: num1.toString(),
      trainDistance: num2.toString()
    });
  }
  render() {
    return (
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <td><DialIndicator value={this.state.indicatorValue} /></td>
                <td><RailroadTrail value={this.state.trainDistance} /></td>
                <td></td>
               
              </tr>
            </tbody>
          </table>        
        </div>
        <div>
        <DonutDigitalChart />
        </div>
      </div>
    );
  }
}
