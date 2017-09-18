import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ControlSwitchButtonBlock extends Component {
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
    const { title, buttons, activeBgColor, textColor, padding, titleMargin, buttonWidth } = this.props;
    const cssTitleMargin = titleMargin ? titleMargin : '0 16px 0 0px';
    const cssButtonWidth = buttonWidth ? buttonWidth : 'auto';
    return (
      <div className="btnGroupType-inline">
        {
          title ? <span
                    className="confTitle"
                    style={{
                      color: '#fff',
                      textTransform: 'uppercase',
                      fontSize: '11px',
                      margin: cssTitleMargin
                    }}
                  >{title} : </span> : ''
        }
        
        { buttons.map((button) => (
          <a
            key={button.idx}
            href="#"
            data-value={button.title}
            onClick={this.handleChange}
            className={value === button.value ? 'active' : ''}
            style={{
              background: value === button.value ? `${activeBgColor}` : 'rgba(0,0,0,0.5)',
              color: `${textColor}`,
              padding: `${padding}`,
              border: '1px solid rgba(255,255,255,0.4)',
              display: 'inline-block',
              fontSize: '12px',
              width: buttonWidth
            }}
          >
            {button.title}
          </a>
        ))}
      </div>
    );
  }
}

ControlSwitchButtonBlock.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  buttons: PropTypes.array,
};
