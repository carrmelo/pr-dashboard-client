import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader';

import { getPullRequests, checkPullrequest } from '../../actions';

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

  checkPull(pullId) {
    this.props.checkPullrequest(pullId);
  }

  renderPullRequestItem() {
    const { pulls, searchValue } = this.props;
    return Object.keys(this.props.pulls).length > 0 ? (
      Object.keys(pulls)
        .filter(item =>
          pulls[item].title.toUpperCase().includes(searchValue.toUpperCase()),
        )
        .map(key => (
          <div
            onClick={() => this.checkPull(pulls[key]._id)}
            key={pulls[key]._id}
          >
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
        ))
    ) : (
      <p>Seems like there's nothing to show yet</p>
    );
  }

  render() {
    return (
      <div className="dashboard__pullrequest__card">
        <h4 className="dashboard__pullrequest__title">Pullrequests</h4>
        <Loader loaded={this.props.loaded}>
          <ul>{this.renderPullRequestItem(this.props.searchValue)}</ul>
        </Loader>
      </div>
    );
  }
}

const mapStateToProps = ({ entities, authentication, search }) => ({
  loaded: entities.loadedEntities,
  isAuth: authentication.isAuthenticated,
  pulls: entities.pull_requests,
  searchValue: search,
});

const mapDispatchToProps = dispatch => ({
  checkPullrequest: pullId => dispatch(checkPullrequest(pullId)),
  getPullRequests: () => dispatch(getPullRequests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestList);
