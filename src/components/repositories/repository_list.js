
import React, { Component } from 'react'
import axios from 'axios'

import RepositoryItem from './repository_item'

class RepositoriesList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			repositories: []
		}
	}

	componentDidMount() {
		axios.get('https://api.github.com/users/reactjs/repos')
			.then(res => {
				this.setState({
					repositories: res.data
				})
			})
	}

	renderPullRequestItem () {
		return this.state.repositories.map(repo => {
			return (
				<RepositoryItem 
					key={repo.id}
					repo={repo}
				/>
			)
		})
	}

	render() {
		return (
			<ul className="dashboard__repository__list">
				{this.renderPullRequestItem()}
			</ul>
		)
	}
}

export default RepositoriesList


