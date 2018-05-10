import React, { Component } from 'react'

import Toggle from 'material-ui/Toggle';

class RepositoryItem extends Component {

	render() {
		return (
			<li className="repository__item">
				<div className="repository__item-content">
					<div className="repository__item-content-text">
						<span>{this.props.repo.name}</span>
					</div>
					<div className="repository__item-content-toggle">
						<Toggle />
					</div>
				</div>
			</li>
		)
	}
}

export default RepositoryItem

