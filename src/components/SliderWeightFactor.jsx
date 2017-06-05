import React, { Component } from 'react';
import Slider from './react-rangeslider';

class SliderWeightFactor extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      value: parseFloat(this.props.value).toFixed(2)
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({
      value: value
    });
  }
  render () {
    const { value } = this.state;
    const fValue = parseFloat(value); 
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={100}
          step={0.01}
          tooltip={false}
          value={fValue}
          onChange={this.handleChange}
        />
        <div className='value'>{fValue.toFixed(2)}</div>
      </div>
    );
  }
}

export default SliderWeightFactor;