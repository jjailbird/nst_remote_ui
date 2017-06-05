import React, { Component } from 'react';
import { isFloat } from '../utils/functions';

export default class RailroadTrailStartStop extends Component {
  constructor(props) {
    super(props);
    this.railPath = null;
    this.railPathLengthPx = 0;
    this.dot = null;
    this.distanceMax = 250;
    this.stopPoint = null;
    this.stopPos = { x: 0, y: 0};
    this.startPoint = null;
    this.startPos = { x: 0, y: 0};
  }
  getDistancePos(value){
    // const distance = parseFloat(value); // 정방향 
    const distance = this.distanceMax - parseFloat(value); // 역방향
    const distancePercent = (distance / this.distanceMax) * 100;
    const distancePx = Math.round((this.railPathLengthPx * distancePercent) / 100);
    const pos = this.railPath.getPointAtLength(distancePx);

    return pos;
  } 
  moveCircle(value) {
    const pos = this.getDistancePos(value);
    this.dot.setAttribute('cx', pos.x);
    this.dot.setAttribute('cy', pos.y);
  }
  moveStartPoint(value) {
    const pos = this.getDistancePos(value);
    this.startPos.x = pos.x;
    this.startPos.y = pos.y;
  }
  moveStopPoint(value) {
    const pos = this.getDistancePos(value);
    this.stopPos.x = pos.x;
    this.stopPos.y = pos.y;
    // this.stoptPoint.setTranslate(pos.x - 6, pos.y - 16); // chrome error!
  }
  componentDidMount() {
    this.railPath = document.getElementById('railPath');
    this.railPathLengthPx = this.railPath.getTotalLength();
    this.dot = document.getElementById('circleTrain');
    this.startPoint = document.getElementById('startPoint');
    this.stopPoint = document.getElementById('stopPoint');
    
    this.moveCircle(this.props.value);
    this.moveStartPoint(this.props.start);
    this.moveStopPoint(this.props.stop);
  }
  componentDidUpdate() {
    this.moveCircle(this.props.value);
    this.moveStartPoint(this.props.start);
    this.moveStopPoint(this.props.stop);
  }
  render() {    
    const {value, name, unit ,start, stop} = this.props;//stop 포인트위치부터 circle위치까지의 거리 값을 넣어야 할거같은데;;; 잘 모르겠네요
    const changePosition = value - stop;//<----틀린듯.ㅜㅜ
    const valueDisplay = isFloat(value) ? changePosition.toFixed(2) : changePosition;
    return (
      <div>
        <div
          className="lineGraphTitle"
          style={{
            overflow: 'hidden',
            width: '100%',
            padding: '5px 7px',
            marginBottom: '5px'
          }}
        >
          <div
            style={{
              width: '150px',
              padding: '8px 7px',
              float: 'left',
              textTransform: 'uppercase',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >{name}</div>
          <div
            style={{
              float: 'right',
              width: '105px',
              padding :'8px 10px',
              background: 'rgb(132, 134, 149)',
              color: '#000',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >{valueDisplay} <small>{unit}</small></div>
        </div>
        <svg 
          x="0px" y="0px" width="262.5px" height="111.5px" viewBox="0 0 262.5 111.5"
          enableBackground="new 0 0 262.5 111.5" xmlSpace="preserve"
        >
          <path
            id="railPath"
            fill="none" stroke="#5D6C81" strokeWidth="2" strokeMiterlimit="10"
            d="M23.999,26.732h195.846c15.188,0,27.5,12.313,27.5,27.5l0,0c0,15.188-12.313,27.5-27.5,27.5h-56.679"
          />
          <circle
            id="circleTrain"
            fill="#91923A" cx="0" cy="0" r="9.211"
          />
          <g id="stopPoint" transform={`translate(${this.stopPos.x - 7}, ${this.stopPos.y - 16})`}>
            <polygon
              fill="#8C98A8"
              // points="52.188,7.492 44.125,7.492 39.188,7.492 44.125,16.433 48.156,23.732 52.188,16.433 57.125,7.492"
              points="0,0 16,0 8,16"
            />
            <text
              transform="matrix(1 0 0 1 20 12)"
              fill="#FFFFFF" fontFamily="'MyriadPro-Regular'" fontSize="15.663"
            >
              STOP
            </text>
          </g>
          <g id="startPoint" transform={`translate(${this.startPos.x - 7}, ${this.startPos.y + 3})`}>
            <polygon
              fill="#8C98A8"
              points="0,16 8,0 16,16"
            />
            <text
              transform="matrix(1 0 0 1 20 16)"
              fill="#FFFFFF" fontFamily="'MyriadPro-Regular'" fontSize="15.663"
            >
              START
            </text>
          </g>
        </svg>
      </div>
    );
  }

}

