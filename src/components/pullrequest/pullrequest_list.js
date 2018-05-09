import io from 'socket.io-client';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { normalize, schema } from 'normalizr';

import { allPullRequests } from '../../actions';

import config from '../../config';
import PullRequestItem from './pullrequest_item';


const users = new schema.Entity('user', {}, { idAtribute: 'loginName' });
const repos = new schema.Entity('repository', {}, { idAtribute: 'fullName' });
const pulls = new schema.Entity('pull_requests', {}, { idAttribute: '_id' } )
const pullSchema = new schema.Entity('pull_requests', { users: users, repos: repos }, {
  idAttribute: '_id',
  mergeStrategy: (entityA, entityB) => ({
    ...entityA,
    ...entityB,
    favorites: entityA.favorites
  })
});

const otherSchema = new schema.Entity('pull_requests', {}, { idAttribute: '_id' });
const pullRequestSchema = [ otherSchema ];
const theSchema = [ pullSchema ]

const data = { id_str: '123', url: 'https://twitter.com', user: { id_str: '456', name: 'Jimmy' } };

const user = new schema.Entity('users', {}, { idAttribute: 'id_str' });
const tweet = new schema.Entity('tweets', { user: user }, { 
    idAttribute: 'id_str',
    // Apply everything from entityB over entityA, except for "favorites"
    // mergeStrategy: (entityA, entityB) => ({
    //   ...entityA,
    //   ...entityB,
    //   favorites: entityA.favorites
    // })
});

const normalizedData = normalize(data, tweet);

// new schema.Array({
//   pull_requests: pullSchema,
//   repositories: repoSchema,
//   users: userSchema
// }, (input, parent, key) => `${input._id}`);


const socket = io.connect('https://pr-dashboard-server.herokuapp.com/');

class PullRequestList extends Component {

  componentDidMount () {
    socket.on('pr-update', this.props.allPullRequests.bind(this));
    axios.get(`${config.baseServerUrl}/pullrequests`)
      .then(res => {
        console.log('normalizedData', normalize(res.data, pullSchema));
        console.log('normalizedData theSchema', normalize(res.data, theSchema));
        console.log('normalizedData otherSchema', normalize(res.data, pullRequestSchema));
        console.log('normalizedData Example', normalizedData);
        this.props.allPullRequests(res.data)})
  };

  renderPullRequestItem (pulls) {
    return pulls.map(pull => {
      return (
        <div key={pull._id}>
          <PullRequestItem
            repo={pull.repository.name}
            closed_at={pull.closed_at}
            merged_at={pull.merged_at}
            created_at={pull.created_at}
            updated_at={pull.updated_at}
            action={pull.action}
            title={pull.title}
            number={pull.number}
            state={pull.state}
            comment={pull.comment}
            comments={pull.comments}
          />
        </div>
      )
    })
  }


  render () {
    if (this.props.pulls) {
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

const mapStateToProps = ({ repos, pulls }) => ({
  repos,
  pulls
})

const mapDispatchToProps = (dispatch) => ({
  allPullRequests: (pulls) => dispatch(allPullRequests(pulls))
})

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestList);