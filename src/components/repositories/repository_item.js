import React, { Component } from 'react'

class RepositoryItem extends Component {

	//WHY NOT NEEDED TO RENDER LIST 
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<li className="repository__item">
				<span className="respository__item-text">{this.props.repo.name}</span>
			</li>
		)
	}
}

export default RepositoryItem