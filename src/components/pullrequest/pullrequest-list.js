import React, { Component } from 'react';

import PullRequestItem from './pullrequest-item'

const user = 'reactjs'
const repo = 'redux'
const url = `https://api.github.com/repos/${user}/${repo}`

class PullRequestList extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      pulls: []
    }
  }

  componentDidMount () {
    fetch(`${url}/pulls`)
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