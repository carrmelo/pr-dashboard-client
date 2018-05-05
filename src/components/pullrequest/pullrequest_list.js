
import React, { Component } from 'react'
import axios from 'axios'

import PullRequestItem from './pullrequest_item'


class PullRequestsList extends Component {

	componentDidMount() {
		console.log('PR LIST')
	}

	renderPullRequestItem () {
		console.log('RENDER ITEM')
	}

	render() {
		this.renderPullRequestItem()
		return (
			
			<div>
				PULL REQUEST LIST:
				<PullRequestItem />
			</div>
		)
	}
}

export default PullRequestsList




