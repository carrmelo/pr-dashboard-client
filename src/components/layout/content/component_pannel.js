
import React, { Component } from 'react'
import RepoList from '../../repositories/repository_list'
import PullRequestList from '../../pullrequest/pullrequest_list'
import { Route } from 'react-router-dom'

class Pannel extends Component {
	render() {
		return (
			<div className="card-panel dashboard__panel">
				<Route path="/repos" component={RepoList} />
				<Route path="/pulls" component={PullRequestList} />	
			</div>
		)
	}
}

export default Pannel
          
