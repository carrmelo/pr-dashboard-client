import React, { Component } from 'react';

import './pullrequest_item.css'

class PullRequestItem extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div>STATUS {this.props.state}</div>
        <div>BODY {this.props.comment}</div>
        {/* <div className="links-container">
          <a href={this.props.commits_url}>COMMITS</a>
          <a href={this.props.issue_url}>ISSUES</a>
          <a href={this.props.comments_url}>COMMENTS</a>
        </div>  */}
        {this.props.closed_at
        ? <div>CLOSED AT {this.props.closed_at}</div>
        : <div>Pending</div>}
        <div>UPDATED AT {this.props.updated_at}</div>
      </div>
    )
  }
}

export default PullRequestItem