import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader';

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

  renderPullRequestItem (pulls) {
    return (Object.keys(this.props.pulls).length > 0)
    ? Object.keys(pulls).map(key => (
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
    ))
    : <p>Seems like there's nothing to show yet</p>
  } 

  render () {
    return (
      <Loader loaded={this.props.loaded}>
        <div>
          {this.renderPullRequestItem(this.props.pulls)}
        </div>
      </Loader>
    )
  }
}

const mapStateToProps = ({ entities, authentication }) => ({
  loaded: entities.loadedEntities,
  isAuth: authentication.isAuthenticated,
  pulls: entities.pull_requests,
});

const mapDispatchToProps = dispatch => ({
  getPullRequests: () => dispatch(getPullRequests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestList);
