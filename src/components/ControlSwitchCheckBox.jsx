import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ControlSwitchCheckBox extends Component {
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
            className={value === button.value ? 'active' : ''}
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
                background: value === button.value ? `${activeBgColor}` : 'rgba(0,0,0,0.8)',
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

ControlSwitchCheckBox.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  buttons: PropTypes.array,
};
