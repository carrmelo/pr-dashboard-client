import React, { Component } from 'react'

import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux';
import { toggleRepository } from '../../actions'

class RepositoryItem extends Component {

	handleActivation = (id) => {
		this.props.toggleRepository(id)
	}

	render() {
		return (
			<li className="repository__item">
				<div className="repository__item-content">
					<div className="repository__item-content-text">
						<span>{this.props.repo.name}</span>
					</div>
					<div className="repository__item-content-toggle">
						<Toggle style={styles.toggle} />
					</div>
				</div>
			</li>

			<div className={this.props.repo.hookEnabled ? "blue" : "red"}>
				{this.props.repo.name}
				<button onClick={() => this.handleActivation(this.props.repo._id)} > activate </button>
			</div>
		)
	}
}

const styles = {
	toggle: {
		color: "red"
	}
}

const mapStateToProps = ({ repos }) => ({
	repos
})

const mapDispatchToProps = (dispatch) => ({
	toggleRepository: (id) => dispatch(toggleRepository(id))
})

export default connect (mapStateToProps, mapDispatchToProps)(RepositoryItem)

