import React, { Component } from 'react';

export default class ViewTestSvg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indicatorValue: 0
    };
    this.thick = this.thick.bind(this);
  }
  componentDidMount() {
    // this.timer = setInterval(this.thick, 1000 / 30);
    const script = document.createElement("script");

    script.src = "js/pathFollow.js";
    script.async = true;

    document.body.appendChild(script);
  }
  thick() {
    const num = Math.floor(Math.random() * (12 - 0)) + 0;
    console.log('random number:', num);
    this.setState({
      indicatorValue: num.toString()
    });
  }
  render() {
    return (
      <div>
        <div className="head">
          <div className="title">hyundai rotem company</div>
          <div>
            <h4>TEST SVG</h4>
            <div id="pathAnimation">
              <script src="pathFollow.js"></script>
            </div>
          </div>        
        </div>
      </div>
    );
  }
}
