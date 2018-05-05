import React, { Component } from 'react';

import './pullrequest-item.css'

class PullRequestItem extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <a href={this.props.userUrl}>pull request by: {this.props.user}</a>
        <div>STATUS {this.props.state}</div>
        <div>BODY {this.props.body}</div>
        <div className="links-container">
          <a href={this.props.commits_url}>COMMITS</a>
          <a href={this.props.issue_url}>ISSUES</a>
          <a href={this.props.comments_url}>COMMENTS</a>
        </div> 
        {this.props.closed_at
        ? <div>CLOSED AT {this.props.closed_at}</div>
        : <div>Pending</div>}
        <div>UPDATED AT {this.props.updated_at}</div>
      </div>
    )
  }
}

export default PullRequestItem