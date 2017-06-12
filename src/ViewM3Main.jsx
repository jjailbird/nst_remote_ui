import React, { Component } from 'react';
import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/src/Keyboard.css';

export default class ViewM3Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showLogin: false,
        value: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onLoginFormToggle = this.onLoginFormToggle.bind(this);
  }
  handleOnChange(){

  }
  onLoginFormToggle() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }
  onLogin() {
    this.props.history.push('/m3/run');
  }
  render() {
    return (
      <div>
        <div className="head">
          <div className="title">hyundai rotem company</div>
        </div>
        <div
          className="con-login"
          style={{
            background: 'url(/img/main_bg3.png)',
            position: 'relative'
          }}
        >
          <div
            style={{
              textAlign: 'center',
              position: 'absolute',
              width: '100%',
              marginTop: '50px'
            }}
          >
            <img src="/img/main_title3.png" alt="main_title1.png" />
          </div>

          {this.state.showLogin ?
            <div
              style={{
                position: 'absolute',
                width: '100%',
                zIndex: '9',
                bottom: '105px'
              }}
            >
              <div
                style={{
                  width: '667px',
                  height: '302px',
                  margin: '0 auto',
                  background: 'url(/img/login_box.png)',
                  paddingTop: '112px',
                  position: 'relative'
                }}
                
              >
                <div
                  onClick={this.onLoginFormToggle}
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: '86px'
                  }}
                >
                  &nbsp;
                </div>
                <div
                  className="login-form"                
                  style={{
                    margin: '0px auto 0'
                  }}
                  
                >
                  <KeyboardedInput
                    enabled
                    className="login-pw"
                    type="password"
                    defaultKeyboard="us"
                    onChange={this.handleOnChange}
                  /> 
                  {/*<input type="password" className="login-pw" />*/}
                  <input type="button" className="login-submit" value="Check in" onClick={this.onLogin} />
                </div>
              </div>
            </div>
            :
            <div>
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  zIndex: '9',
                  bottom: '120px'
                }}
                onClick={this.onLoginFormToggle}
              >
                <div
                  style={{
                    width: '607px',
                    height: '89px',
                    margin: '0 auto',
                    background: 'url(/img/login_before.png)',
                  }}
                />
              </div>
            </div> 
          }
          
        </div>        
      </div>
    );
  }
}
