import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ControlSwitchGroup extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      value: this.props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target.dataset.value;
    if(this.props.onChange) {
      this.props.onChange(value);
    }
    
    this.setState({
      value: value
    });
  }
  render() {
    const { value } = this.state;
    const { title, buttons, type } = this.props;
    const className = type == 'yellowButton' ? ' yellowButton' : ''; 
    return (
      <span className={`btnGroupType-inline${className}`}>
        {
          title ? <span className="confTitle">{title} : </span> : ''
        }
        
        { buttons.map((button) => (
          <a
            key={button.idx}
            href="#"
            data-value={button.title}
            onClick={this.handleChange}
            className={value === button.value ? 'active' : ''}
          >
            {button.title}
          </a>
        ))}
      </span>
    );
  }
}

ControlSwitchGroup.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  buttons: PropTypes.array,
};
