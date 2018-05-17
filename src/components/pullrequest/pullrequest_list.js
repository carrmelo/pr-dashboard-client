import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPullRequests } from '../../actions';

import PullRequestItem from './pullrequest_item';

class PullRequestList extends Component {
  componentDidMount() {
    this.props.getPullRequests();
  }

  componentDidUpdate() {
    if (!this.props.isAuth) {
      this.props.history.push('/');
    }
  }

  renderPullRequestItem(pulls) {
    if (!pulls) return <div>Loading</div>;

    return Object.keys(pulls)
      .map(key => {
        return (
          <div key={pulls[key]._id}>
            <PullRequestItem
              repository={pulls[key].repository}
              webUrl={pulls[key].webUrl}
              closed_at={pulls[key].closed_at}
              merged_at={pulls[key].merged_at}
              created_at={pulls[key].created_at}
              updated_at={pulls[key].updated_at}
              user={pulls[key].user}
              title={pulls[key].title}
              number={pulls[key].number}
              state={pulls[key].state}
              seen={pulls[key].seen}
              comment={pulls[key].comment}
              comments={pulls[key].comments}
            />
          </div>
        );
      });
  }

  render() {
    if (Object.keys(this.props.pulls).length) {
      return (
        <div className="dashboard__pullrequest__card">
          <h4 className="dashboard__pullrequest__title">Pullrequests</h4>
          <ul>{this.renderPullRequestItem(this.props.pulls)}</ul>
        </div>
      );
    } else {
      return <p>Seems like there's nothing to show yet</p>;
    }
  }
}

const mapStateToProps = ({ entities, authentication }) => ({
  isAuth: authentication.isAuthenticated,
  pulls: entities.pull_requests,
});

const mapDispatchToProps = dispatch => ({
  getPullRequests: () => dispatch(getPullRequests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestList);
