import socket from '../../websockets';
import { normalize } from 'normalizr';
import { Schemas } from '../../middleware/api'
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPullRequests, setPullsFromSocket } from '../../actions';

import PullRequestItem from './pullrequest_item';

class PullRequestList extends Component {

  componentDidMount () {
    socket.on('pr-update', this.updateFromSocket.bind(this));
    this.props.getPullRequests();
  };

  updateFromSocket (pulls) {
    const normalizedPulls = normalize(pulls, Schemas.PULLS)
    this.props.setPullsFromSocket(normalizedPulls);
  }

  renderPullRequestItem (pulls) {
    return Object.keys(pulls).map(key => {
      return (
        <div key={pulls[key]._id}>
          <PullRequestItem
            repo={pulls[key].repository.name}
            closed_at={pulls[key].closed_at}
            merged_at={pulls[key].merged_at}
            created_at={pulls[key].created_at}
            updated_at={pulls[key].updated_at}
            action={pulls[key].action}
            title={pulls[key].title}
            number={pulls[key].number}
            state={pulls[key].state}
            comment={pulls[key].comment}
            comments={pulls[key].comments}
          />
        </div>
      )
    })
  }

  render () {
    if (Object.keys(this.props.pulls).length) {
      return (
        <div>
          {this.renderPullRequestItem(this.props.pulls)}
        </div>
      )
    } else {
      return <p>Loading</p>
    }
  }
}

const mapStateToProps = ({ entities }) => ({
  pulls: entities.pull_requests
})

const mapDispatchToProps = (dispatch) => ({
  getPullRequests: () => dispatch(getPullRequests()),
  setPullsFromSocket: (pulls) => dispatch(setPullsFromSocket(pulls))
})

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestList);