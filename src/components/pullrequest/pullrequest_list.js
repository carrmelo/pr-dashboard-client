import io from 'socket.io-client';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { normalize, schema } from 'normalizr';

import { allPullRequests } from '../../actions';

import config from '../../config';
import PullRequestItem from './pullrequest_item';

const userSchema = new schema.Entity('user', {}, { idAttribute: 'loginName' });
const repoSchema = new schema.Entity('repository', {}, { idAttribute: 'fullName' });
const pullSchema = new schema.Entity(
  'pull_requests',
  { repository: repoSchema, user: userSchema },
  { idAttribute: '_id' }
);

const pullRequestSchema = [ pullSchema ];

const socket = io.connect('https://pr-dashboard-server.herokuapp.com/');

class PullRequestList extends Component {

  componentDidMount () {
    socket.on('pr-update', this.props.allPullRequests.bind(this));
    axios.get(`${config.baseServerUrl}/pullrequests`)
      .then(res => {
        const normalizedResponse = normalize(res.data, pullRequestSchema);
        console.log('============================', normalizedResponse);
        
        this.props.allPullRequests(normalizedResponse)})
  };

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
    if (Object.keys(this.props.pull_requests).length) {
      return (
        <div>
          {this.renderPullRequestItem(this.props.pull_requests)}
        </div>
      )

    } else {
      return <p>Loading</p>
    }
  }
}

const mapStateToProps = ({ repos, pull_requests }) => ({
  repos,
  pull_requests
})

const mapDispatchToProps = (dispatch) => ({
  allPullRequests: (pulls) => dispatch(allPullRequests(pulls))
})

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestList);