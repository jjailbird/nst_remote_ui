import React, { Component } from 'react';
import Slider from './react-rangeslider';

import KeyboardedInput from '../components/react-touch-screen-keyboard/src/KeyboardedInput';
import 'react-touch-screen-keyboard/src/Keyboard.css';

class SliderWeightFactor extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      value: parseFloat(this.props.value).toFixed(2)
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  }
  handleChange(value) {
    this.setState({
      // value: value
      value
    });
  }
  handleChangeComplete() {
    if(this.props.onChange) {
      const fValue = parseFloat(this.state.value); 
      this.props.onChange(this.state.value);
    }
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
          onChangeComplete={this.handleChangeComplete}
        />
        {/*<div className='value'>{fValue.toFixed(2)}</div>*/}
        <KeyboardedInput
          enabled
          className="rect-touch-screen-keyboard-input-weight"
          type="text"
          defaultKeyboard="us"
          value={fValue}
          onChange={this.handleChange}
          onHide={this.handleChangeComplete}
        />
      </div>
    );
  }
}

export default SliderWeightFactor;