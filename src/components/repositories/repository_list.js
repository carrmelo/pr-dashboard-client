import React, { Component } from 'react'
import { connect } from 'react-redux';

import Loader from 'react-loader';

import {
	getRepositories
} from '../../actions'

import RepositoryItem from './repository_item'

class RepositoriesList extends Component {

	componentDidMount() {
		this.props.getRepositories()
	}

	componentDidUpdate() {
		if (!this.props.isAuth) {
	      this.props.history.push('/')
	    }
	}

	renderRepositoryItem () {
		let { repositories, searchValue } = this.props
		if(!repositories) return <div>LOADING</div>

		return Object.keys(repositories)
			.filter(item => repositories[item].fullName.toUpperCase().includes(searchValue.toUpperCase()) )
			.map(repoKey => {		
				let sumPulls = 0;
				const pulls = this.props.pulls
				Object.keys(pulls).map(pullKey => {
					return (pulls[pullKey].repository._id === repoKey) ? sumPulls++ : null
				})
				return (
					<RepositoryItem
						key={repoKey}
						repo={repositories[repoKey]}
						itemId={repositories[repoKey]._id}
						active={repositories[repoKey].hookEnabled}
						pullnum={sumPulls}
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
				<Loader loaded={this.props.loaded}>
					<ul>
						{this.renderRepositoryItem(this.props.searchValue)}
					</ul>
				</Loader>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		pulls: state.entities.pull_requests,
		loaded: state.entities.loadedEntities,
		repositories: state.entities.repositories, 
		searchValue: state.search, 
    isAuth: state.authentication.isAuthenticated, 
	}		
}


const mapDispatchToProps = (dispatch) => ({
	getRepositories: () => dispatch(getRepositories())
	// return bindActionCreators({ getRepositories }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList)

