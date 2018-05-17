
import socket from '../../websockets';
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
			.filter(item => item.toUpperCase().includes(this.props.searchValue.toUpperCase()) )
			.map(key => {
				return (
					<RepositoryItem
						key={key}
						repo={repositories[key]}
						itemId={repositories[key]._id}
						active={repositories[key].hookEnabled}
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

