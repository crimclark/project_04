import React, { Component } from 'react';

class OctaveDown extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let inst = this.props.inst;
    let synth = this.props.synth;
    this.props.octaveHandler(inst, -1200, synth);
  }

  render() {
    return (
      <button onClick={this.handleClick} className="pure-button">-</button>
      )
  }
}

export default OctaveDown;