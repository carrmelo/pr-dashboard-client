import React, { Component } from 'react';

import { Collapsible, CollapsibleItem } from 'react-materialize'

class PullRequestItem extends Component {

  render() {
    return (
      <div>
        <Collapsible>
          <CollapsibleItem header={this.props.title} icon='whatshot'>
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
          </CollapsibleItem>
          {/* <CollapsibleItem header='Second' icon='place'>
          <CollapsibleItem header='Third' icon='whatshot'> */}
        </Collapsible>
      </div>
    )
  }
}

export default PullRequestItem