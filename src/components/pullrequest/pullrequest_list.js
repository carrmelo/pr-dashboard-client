import io from 'socket.io-client';
import React, { Component } from 'react';

import config from '../../config';
import PullRequestItem from './pullrequest_item'

const user = 'reactjs'
const repo = 'redux'

const socket = io.connect('https://pr-dashboard-server.herokuapp.com/');

class PullRequestList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      pulls: []
    }
  }

  componentDidMount () {
    socket.on('pr-update', function(data) {
      console.log('Data from the server');
      console.log(data);
    });

    fetch(`${config.baseServerUrl}/repos/${user}/${repo}/pulls`)
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then(data => {
      console.log(data);
      return this.setState({ pulls : data })
    });
  }

  render () {
    if (this.state.pulls) {
      return this.state.pulls.map(pull => {
        return (
          <div key={pull.id}>
            <PullRequestItem
              body={pull.body}
              closed_at={pull.closed_at}
              comments_url={pull.comments_url}
              commits_url={pull.commits_url}
              issue_url={pull.issue_url}
              state={pull.state}
              title={pull.title}
              updated_at={pull.updated_at}
              user={pull.user.login}
              userUrl={pull.user.html_url}
            />
          </div>
        )
      })
    } else {
      return <p>Loading</p>
    }
  }
}


export default PullRequestList;