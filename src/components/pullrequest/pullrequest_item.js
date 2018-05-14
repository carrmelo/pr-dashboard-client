import React, { Component } from 'react';

class PullRequestItem extends Component {

  render() {
    return (
      <div>
        <h3><a href={this.props.pullWebUrl}>{this.props.title}</a></h3>
        <div>Created at {this.props.created_at}</div>
        <div>STATUS {this.props.state}</div>
        <div>{this.props.comment}</div>
        {/* <div className="links-container">
          <a href={this.props.commits_url}>COMMITS</a>
          <a href={this.props.issue_url}>ISSUES</a>
          <a href={this.props.comments_url}>COMMENTS</a>
        </div>  */}
        {this.props.merged_at
        ? <div>MERGED AT {this.props.closed_at}</div>
        : <div>Pending to merge</div>}
        {this.props.closed_at
        ? <div>CLOSED AT {this.props.closed_at}</div>
        : <div>Pending to close</div>}
        <div>UPDATED AT {this.props.updated_at}</div>
        <div>Last action: {this.props.action}</div>
      </div>
    )
  }
}

export default PullRequestItem