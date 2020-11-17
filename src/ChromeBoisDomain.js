import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    drawChromeBoiAtCoords(x, y);
  }

  handleClick = (event) => {
    toggleCycling();
  };

  handleKey = (event) => {
    console.log(event.target)
    if (event.keyCode === 65) {
      resize("+");
    } else if (event.keyCode === 83) {
      resize("-");
    }
  };

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleClick}
        onKeyDown={this.handleKey}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
