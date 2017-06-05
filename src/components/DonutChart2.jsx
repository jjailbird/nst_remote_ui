import React, { Component } from 'react';

export default class DonutChart2 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const donutRing = document.getElementById('donutRing');
    const length = donutRing.getTotalLength();
    // console.log('donutRing length:', length);
  }
  render() {
    return (
      <div>
        <h3>DonutChart Test</h3>
        {/*
        <svg width="100%" height="100%" className="donut-digital"  viewBox="0 0 80 80">
          <circle
            id="donutRing"
            cx="40" cy="40"
            r="15.91549430918954"
            fill="transparent"
            stroke="#ce4b99" strokeWidth="4" strokeDasharray="5.25 1" strokeDashoffset="0" />
        </svg>
        */}        
        <svg width="100%" height="100%" className="donut-bite"  viewBox="0 0 80 80">
           <defs>  
            <mask id="mask-path">  
              <circle
                id="donutRing"
                cx="40" cy="40"
                r="15.91549430918954"
                fill="transparent"
                stroke="grey" strokeWidth="4" strokeDasharray="5.25 1" strokeDashoffset="0" />       
            </mask>  
          </defs>
 
          <circle
            mask="url(#mask-path)"
            id="donutRing"
            cx="40" cy="40"
            r="15.91549430918954"
            fill="transparent"
            stroke="grey" strokeWidth="4" strokeDashoffset="25" />    
            
          <defs>  
            <mask id="mask-path2">  
              <circle
                id="donutRing"
                cx="40" cy="40"
                r="15.91549430918954"
                fill="transparent"
                stroke="grey" strokeWidth="4" strokeDasharray="5.25 1" strokeDashoffset="0" />       
            </mask>  
          </defs>

          <circle
            mask="url(#mask-path2)"
            id="donutSegment"
            cx="40" cy="40"
            r="15.91549430918954"
            fill="transparent"
            stroke="red" strokeWidth="4" strokeDasharray="10 90" strokeDashoffset="0" transform="rotate(-90 40 40)" /> 
          
          {/*
          <text transform="matrix(1 0 0 1 131.4692 150.9873)" fill="#F7F8F8" fontFamily="'AdobeMyungjoStd-Medium-KSCpc-EUC-H'" fontSize="40.5342">A</text>
          <text transform="matrix(1 0 0 1 109.1597 92.0469)" fill="#F7F8F8" fontFamily="'AdobeMyungjoStd-Medium-KSCpc-EUC-H'" fontSize="28.861">29.5</text>
          */}
        </svg>        

      </div>
    )
  }
}