
import React, { Component } from 'react';
import RepoList from '../../repositories/repository_list';
import PullRequestList from '../../pullrequest/pullrequest_list';
import SignIn from '../../authentication/signin';
import Welcome from '../../authentication/welcome';
import { Route } from 'react-router-dom';
import { PrivateRoute } from '../../authentication/private_route';

class Pannel extends Component {
	render() {
		return (
			<div className="card-panel dashboard__panel">
				<Route path="/" component={SignIn} />
				<Route path="/welcome" component={Welcome} />
				<PrivateRoute exact path="/repos" component={RepoList} />
				<PrivateRoute exact path="/pulls" component={PullRequestList} />	
			</div>
		)
	}
}

export default Pannel
          
