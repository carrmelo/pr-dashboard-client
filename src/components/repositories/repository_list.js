import socket from '../../websockets';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getRepositories } from '../../actions'

import RepositoryItem from './repository_item'

// import { bindActionCreators } from 'redux'

class RepositoriesList extends Component {

	//UPDATE ON REAL TIME SOCKETS
	componentDidMount() {
	// 	socket.on('repos-update', this.props.getRepositories.bind(this));
	// 	axios.get(`${config.baseServerUrl}/repos`)
	// 		.then(res => {
	// 			console.log('***', res)
	// 			this.props.getRepositories(res.data)
	// 		})
		this.props.getRepositories()
	}

	componentDidUpdate() {
		if (!this.props.isAuth) {
      this.props.history.push('/')
    }
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
	return {
		repositories: state.entities.repositories,
		isAuth: state.authentication.isAuthenticated
	 }
}


const mapDispatchToProps = (dispatch) => ({
	getRepositories: () => dispatch(getRepositories())
	// return bindActionCreators({ getRepositories }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList)
