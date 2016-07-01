import React, { Component } from 'react';

class BinsMain extends Component {
  render() {
    return (
      <div>Bin {this.props.params.binId}</div>
    );
  }
}

export default BinsMain
