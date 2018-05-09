import React, { Component } from 'react'
import Toggle from 'material-ui/Toggle';


class RepositoryItem extends Component {

	//WHY NOT NEEDED TO RENDER LIST 
	constructor(props) {
		super(props)
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
		)
	}
}

const styles = {
	toggle: {
		color: "red"
	}
}

export default RepositoryItem