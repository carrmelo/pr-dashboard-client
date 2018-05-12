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
		
		let { repositories } = this.props

		if(!repositories) return <div>LOADING</div>
		
		return Object.keys(repositories)
			.map(key => {
				return (
					<RepositoryItem 
						key={key} 
						repo={repositories[key]}
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

const mapStateToProps = (state) => {
	return { repositories: state.entities.repositories }		
}
	

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getRepositories }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList)


