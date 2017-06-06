import React, { Component } from 'react';

export default class ViewM2Main extends Component {
  render() {
    return (
      <div>
        <div className="head">
          <div className="title">hyundai rotem company</div>
        </div>
        <div
          className="con-login"
          style={{
            background: 'url(/img/main_bg2.png)',
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
            <img src="/img/main_title2.png" alt="main_title1.png" />
          </div>
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
                background: 'url(/img/v1-index-loginBox.png)',
                paddingTop: '112px'
              }}
            >
              <div
                className="login-form"                
                style={{
                  margin: '0px auto 0'
                }}
              >
                <input type="password" className="login-pw" />
                <input type="button" className="login-submit" value="Check in" />
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}
