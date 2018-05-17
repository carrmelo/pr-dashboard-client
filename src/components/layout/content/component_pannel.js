
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Loader } from 'react-loader';

import RepoList from '../../repositories/repository_list';
import PullRequestList from '../../pullrequest/pullrequest_list';
import { PrivateRoute } from '../../authentication/private_route';



class Pannel extends Component {
	
	render() {
	console.log(this.props.loaded);
		
		return (
			<div className="card-panel dashboard__panel">
				<Loader loaded={this.props.loaded}>
					<PrivateRoute exact path="/repos" component={RepoList} />
					<PrivateRoute exact path="/pulls" component={PullRequestList} />
				</Loader>
			</div>
		)
	}
}

const mapStateToProps = ({ entities }) => ({
	loaded: entities.loadedEntities
})

export default connect(mapStateToProps)(Pannel)
