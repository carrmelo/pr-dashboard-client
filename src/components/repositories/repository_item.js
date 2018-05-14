import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleRepository } from '../../actions'

import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';

class RepositoryItem extends Component {

	handleToggle = (id, action) => {
		const serverAction = action ? 'disable' : 'enable'
		this.props.toggleRepository(id, serverAction)
	}

	render() {
		return (
			<li className="repository__item">
				<div className="repository__item-content">
					<div className="repository__item-content-text">
						<span>{this.props.repo.name}</span>
					</div>
					<div className="repository__item-content-toggle">
						{/* <span onClick={this.toggleRepository}> */}
							<Toggle 
							toggled={this.props.active}
							onToggle={() => this.handleToggle(this.props.itemId, this.props.active)}/>
						{/* </span> */}
					</div>
				</div>
				<Divider />
			</li>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	toggleRepository: (id, action) => dispatch(toggleRepository(id, action))
})

export default connect(null, mapDispatchToProps)(RepositoryItem)

