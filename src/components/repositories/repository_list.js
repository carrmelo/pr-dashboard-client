import socket from '../../websockets';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import { authHeader } from '../../helpers/auth-header'

import { getRepositories } from '../../actions'

import config from '../../config';
import RepositoryItem from './repository_item'

// import { bindActionCreators } from 'redux'

class RepositoriesList extends Component {

	componentDidMount() {
		socket.on('repos-update', this.props.getRepositories.bind(this));
		const header = authHeader()
		axios.get(`${config.serverUrl}/repos`, { headers: header })
			.then(res => {
				this.props.getRepositories(res.data, header)
			})
	}

	renderRepositoryItem () {
		return this.props.repos.map(repo => {
			return (
				<RepositoryItem
					key={repo._id}
					repo={repo}
					active={repo.hookEnabled}
				/>
			)
		})
	}

	render() {
		return (
			<div className="dashboard__repository__card">
				<h4 className="dashboard__repository__title">
					Repositories
				</h4>
				<ul className="dashboard__repository__list">
					{this.renderRepositoryItem()}
				</ul>
			</div>
			
		)
	}
}

const mapStateToProps = ({ entities }) => ({
	repos: entities.repos
})

const mapDispatchToProps = (dispatch) => ({
	getRepositories: (repos, header) => dispatch(getRepositories(repos, header))
	// return bindActionCreators({ getRepositories }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList)


