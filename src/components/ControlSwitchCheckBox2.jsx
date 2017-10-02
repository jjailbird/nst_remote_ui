import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getToggledValues } from '../utils/functions';

// for Redux value
export default class ControlSwitchCheckBox2 extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      values: this.props.values ? this.props.values : []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {

    let value = e.target.dataset.value;
    if (value === undefined) {
      value = e.target.parentNode.dataset.value;
    }

    const values = getToggledValues(this.state.values, value);
    if(this.props.onChange) {
      // this.props.onChange(value);
      this.props.onChange(values);
    }
    
    this.setState({
      // values: getToggledValues(this.state.values, value),
      values
    });
    // console.log('this.state.values:', this.state.values);
  }
  render() {
    const { values } = this.state;
    const { title, buttons, activeBgColor, textColor, padding } = this.props;

    return (
      <span className="btnGroupType-inline">
        {
          title ? <span className="confTitle">{title} : </span> : ''
        }
        
        { buttons.map((button) => (
          <a
            key={button.idx}
            href="#"
            data-value={button.title}
            onClick={this.handleChange}
            
            style={{
              color: `${textColor}`,
              padding: `${padding}`,
              border: '1px solid rgba(255,255,255,0.4)',
              display: 'inline-block',
              fontSize: '12px',
              position: 'relative',
              background: 'rgba(0,0,0,0.5)'
            }}
          >
            <span
              style={{
                width: '12px',
                height: '12px',
                background: values.indexOf(button.value) > -1 ? `${activeBgColor}` : 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.4)',
                position: 'absolute',
                left: '6px',
                top: '5px'
              }}
            ></span>
            {button.title}
          </a>
        ))}
      </span>
    );
  }
}

ControlSwitchCheckBox2.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  buttons: PropTypes.array,
};
