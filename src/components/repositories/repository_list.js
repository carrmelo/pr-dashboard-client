import socket from '../../websockets';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import { getRepositories } from '../../actions'

import config from '../../config';
import RepositoryItem from './repository_item'

import { bindActionCreators } from 'redux'

class RepositoriesList extends Component {

	// componentDidMount() {
	// 	socket.on('repos-update', this.props.getRepositories.bind(this));
	// 	axios.get(`${config.baseServerUrl}/repos`)
	// 		.then(res => {
	// 			console.log('***', res)
	// 			this.props.getRepositories(res.data)
	// 		})
	// }

	componentWillMount() {
		this.props.getRepositories()
	}

	renderRepositoryItem () {
		if(!this.props.repositories) return <div>LOADING</div>
		
		Object.keys(this.props.repositories)
			.map(repoKey => {
				return (
					<li>
						{this.props.repositories[repoKey].fullName}
					</li>
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

const mapStateToProps = (state) => {
	return {
		repositories: state.entities.repositories
	}		
}
	

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getRepositories }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList)


