
import React, { Component } from 'react';
import RepoList from '../../repositories/repository_list';
//TEMPORARY CHANGE TO EXTENDED TO TEST TOGGLE WIRING
// import PullRequestList from '../../pullrequest/pullrequest_list_extended'
import PullRequestList from '../../pullrequest/pullrequest_list';
import { PrivateRoute } from '../../authentication/private_route';

class Pannel extends Component {
	render() {
		return (
			<div className="card-panel dashboard__panel">
				<PrivateRoute exact path="/repos" component={RepoList} />
				<PrivateRoute exact path="/pulls" component={PullRequestList} />
			</div>
		)
	}
}

export default Pannel
