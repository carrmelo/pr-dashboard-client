import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import { allRepositories } from '../../actions'

import config from '../../config';
import RepositoryItem from './repository_item'

class RepositoriesList extends Component {

	componentDidMount() {
		axios.get(`${config.baseServerUrl}/repos`)
			.then(res => this.props.allRepositories(res.data))
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
		if (this.props.repos) {	
			return (
				<div>
					{this.renderRepositoryItem()}
				</div>
			)
		} else {
			return <p>Loading</p>
		}
	}
}

const mapStateToProps = ({ entities }) => ({
	repos: entities.repos
})

const mapDispatchToProps = (dispatch) => ({
	allRepositories: (repos) => dispatch(allRepositories(repos))
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList)


