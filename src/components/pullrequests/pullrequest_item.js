
import React, { Component } from 'react'

class PullRequestItem extends Component {

	//WHY NOT NEEDED TO RENDER LIST 
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				{this.props.repo.name}
			</div>
		)
	}
}

export default PullRequestItem



