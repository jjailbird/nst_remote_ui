import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ControlSwitchButtonOnOffPatch extends Component {
  constructor (props, context) {
    super(props, context);
    /*
    this.state = {
      value: this.props.value
    };
    */
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target.dataset.value;
    if(this.props.onChange) {
      this.props.onChange(value);
    }
    
    /*
    this.setState({
      value: value
    });
    */
  }
  render() {
    console.log('this.props:', this.props, 'this.state:', this.state);
    const { value } = this.props;
    const { title, buttons, onBgColor, offBgColor, onTextColor, offTextColor, padding, width } = this.props;
    
    let activeBgColor = 0;
    let activeTextColor = 0;
    if(value === 'on'){
      activeBgColor = onBgColor;
      activeTextColor = onTextColor;
    }else{
      activeBgColor = offBgColor;
      activeTextColor = offTextColor;
    }

    return (
      <div className="btnGroupType-inline tepvBoxInnerBtnsGroup">
        {
          title ? <div
                    className="confTitle"
                    style={{
                      color: '#fff',
                      textTransform: 'uppercase',
                      fontSize: '15px',
                      fontWeight: 'bold',
                      marginRight: '16px',
                      marginBottom: '8px'
                    }}
                  >{title}</div> : ''
        }
        <div style={{clear: 'both'}}></div>
        { buttons.map((button) => (
          <a
            key={button.idx}
            href="#"
            data-value={button.value}//원래는 data-value={button.title} 였는데 타이틀과 값이 달라도 가능할려면 value가 맞는것 같아서 우선 수정
            onClick={this.handleChange}
            className={value === button.value ? 'active' : ''}
            style={{
              background: value === button.value ? `${activeBgColor}` : 'rgba(0,0,0,0.1)',
              color: value === button.value ? `${activeTextColor}` : '#fff',
              padding: `${padding}`,
              border: '1px solid rgba(255,255,255,0.4)',
              display: 'inline-block',
              fontSize: '13px',
              width: `${width}`,
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            {button.title}
          </a>
        ))}
      </div>
    );
  }
}

ControlSwitchButtonOnOffPatch.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  buttons: PropTypes.array,
};
