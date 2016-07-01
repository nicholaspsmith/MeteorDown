import React, { Component } from 'react';

class BinsShare extends Component {
  onShareClick() {
    const email = this.refs.email.value
    Meteor.call('bins.share', this.props.bin, email)
    this.refs.email.value = ""
  }

  renderShareList() {
    return this.props.bin.sharedWith.map( email => {
      return (
        <button 
          key={email}
          className="btn btn-default">
            {email}
          </button>
        )
    })
  }

  render() {
    return (
      <footer className="bins-share">
        <div className="input-group col-sm-4">
          <input ref="email" type="text" className="form-control"/>
          <div className="input-group-btn">
            <button
              onClick={this.onShareClick.bind(this)}
              className="btn btn-default">Share</button>
          </div>
        </div>
        <div>
          Shared with:
        </div>
        <div className="btn-group">
          {this.renderShareList()}
        </div>
      </footer>
    );
  }
}

export default BinsShare
