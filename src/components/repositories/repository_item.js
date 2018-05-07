import React, { Component } from 'react'
import './repository_item.css'

import { connect } from 'react-redux';
import { togglePR } from '../actions'

class RepositoryItem extends Component {


	handleActivation = (id) => {
		this.props.togglePR(id)
	}

	render() {
		return (
			<div className={this.props.repo.active ? "blue" : "red"}>
				{this.props.repo.name}
				<button onClick={() => this.handleActivation(this.props.repo.id)} > activate </button>
			</div>
		)
	}
}

const mapStateToProps = ({ repos }) => ({
	repos
})

const mapDispatchToProps = (dispatch) => ({
	togglePR: (id) => dispatch(togglePR(id))
})

export default connect (mapStateToProps, mapDispatchToProps)(RepositoryItem)