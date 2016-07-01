import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import { Bins } from '../../../imports/collections/bins'
import { Link } from 'react-router'

class BinsList extends Component {
  onBinRemove(bin) {
    Meteor.call('bins.remove', bin)
  }

  renderList() {
    return this.props.bins.map( bin => {
      return (
        <li className="list-group-item" key={bin._id}>
          <span className="pull-left binid">
            <Link to={`/bins/${bin._id}`}>{bin._id}</Link>   
          </span>
          <span className="pull-right">
            <button className="btn btn-danger" onClick={() => this.onBinRemove(bin)}>Remove</button>
          </span>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer( () => {
  Meteor.subscribe('bins')
  Meteor.subscribe('sharedBins')

  return { bins: Bins.find({}).fetch() }
}, BinsList)
