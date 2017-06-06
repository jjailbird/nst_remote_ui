import React, { Component } from 'react';

export default class ViewMain extends Component {
  render() {
    return (
      <div>
        <div className="head">
          <div className="title">hyundai rotem company</div>
        </div>
        <div className="con-login">
          <div className="con-loginBoxArea">
            <div className="con-loginTitle">
              <img src="/img/v1-index-title.png" alt="ITC Control Panel" />
            </div>
            <div className="con-loginBox">
              <div className="login-form">
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
