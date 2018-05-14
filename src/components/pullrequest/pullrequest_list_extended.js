import React, { Component } from 'react';
import PullRequestItem from './pullrequest_item';

import socket from '../../websockets';

import { normalize } from 'normalizr';
import { Schemas } from '../../middleware/api'

import { bindActionCreators } from 'redux'
import { 
  getPullRequests, 
  setPullsFromSocket 
  } from '../../actions';
import { connect } from 'react-redux';

class PullRequestList extends Component {

  componentDidMount () {
    //socket.on('pr-update', this.setPRsFromSocket.bind(this));
    // socket.on('pr-update', this.updateFromSocket.bind(this));
    this.props.getPullRequests()
  };
  // updateFromSocket (pulls) {
  //   const normalizedPulls = normalize(pulls, Schemas.PULLS)
  //   this.props.setPullsFromSocket(normalizedPulls);
  // }

  renderPullRequestList(pulls) {
    if(!pulls) return (<div>LOADING</div>)

    return (
      <PullRequestItem 
        pullrequest={pulls}
      />
    )
  }

  render () {
    return (
      <ul>
        {this.renderPullRequestList(this.props.pulls)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  pulls: state.entities.pull_requests
})

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({ getPullRequests }, dispatch)
  // setPullsFromSocket: (pulls) => dispatch(setPullsFromSocket(pulls))
}

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestList);





