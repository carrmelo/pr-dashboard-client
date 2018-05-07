
import React, { Component } from 'react'
import axios from 'axios'

import RepoItem from './repository_item'

class RepoList extends Component {

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
				<RepoItem 
					key={repo.id}
					repo={repo}
				/>
			)
		})
	}

	render() {
		return (
			<div>
				{this.renderPullRequestItem()}
			</div>
		)
	}
}

export default RepoList

