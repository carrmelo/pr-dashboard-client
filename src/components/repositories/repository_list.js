import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import { allRepositories } from '../actions'

import config from '../../config';
import RepositoryItem from './repository_item'

const user = 'reactjs'

class RepositoriesList extends Component {

	componentDidMount() {
		axios.get(`${config.baseServerUrl}/users/${user}/repos`, {auth: {username: config.username, password: config.password}})
			.then(res => {
				const repos = res.data.map(repo => {
					repo.active = false;
					repo.pulls = axios.get(`${config.baseServerUrl}/repos/${user}/${repo.name}/pulls`, {auth: {username: config.username, password: config.password}})
					      .then(res => res.data)
					return repo
				});
			this.props.allRepositories(repos)
		})
	}

	renderPullRequestItem () {
		return this.props.repos.map(repo => {
			return (
				<RepositoryItem 
					key={repo.id}
					repo={repo}
					active={repo.active}
				/>
			)
		})
	}

	render() {
		console.log('repos', this.props.repos);
		
		return (
			<div>
				{this.renderPullRequestItem()}
			</div>
		)
	}
}

const mapStateToProps = ({ repos, pulls }) => ({
	repos
})

const mapDispatchToProps = (dispatch) => ({
	allRepositories: (repos) => dispatch(allRepositories(repos))
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList)


