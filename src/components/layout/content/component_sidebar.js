import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newPullsNotification } from '../../../actions'

import Badge from 'material-ui/Badge';

class Sidebar extends Component {

	componentWillMount() {
		this.props.newPullsNotification()
	}

	render() {
		return (
			<ul className="dashboard__sidebar">
				<li className="sidebar__navigation-repositories">
					<Link to="/repos">
						<svg className="sidebar__icon-repositories">
							<use xlinkHref="./icons/sprite.svg#icon-th-large-outline"><title></title></use>
						</svg>
					</Link>
				</li>

				<li className="sidebar__navigation-pullrequests">
					<div className="sidebar__notification__icon">
						<Badge
						   badgeContent={this.props.pullsnotification}
						   primary={true}
						/>
					</div>
					<div className="sidebar__pullrequests__button">
						<Link to="/pulls">
							<svg className="sidebar__icon-pullrequests">
								<use xlinkHref="./icons/sprite.svg#icon-flow-switch"><title></title></use>
							</svg>
						</Link>
					</div>
				</li>
			</ul>
		)
	}
}

const mapStateToProps = ({ pullsnotification }) => ({ pullsnotification })

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ newPullsNotification }, dispatch)
}

//why null in mapStateToProps makes it not to work
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
