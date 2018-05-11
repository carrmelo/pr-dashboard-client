import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleRepository } from '../../actions'

import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';

class RepositoryItem extends Component {

	handleToggle = (id, action) => {
		const serverAction = action ? 'enable' : 'disable'
		this.props.toggleRepository(id, action)
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
							defaultToggled={this.props.active}
							onToggle={() => this.handleToggle(this.props.repo._id, this.props.active)}/>
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

