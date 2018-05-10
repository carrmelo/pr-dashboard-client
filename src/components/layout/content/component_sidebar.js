



import React, { Component } from 'react'

import { Link } from 'react-router-dom'


class Sidebar extends Component {
	render() {
		return (
			<ul className="dashboard__sidebar">
				<li className="sidebar__navigation-repositories">
					<svg className="sidebar__icon-repositories">
						<use xlinkHref="./icons/sprite.svg#icon-th-large-outline"></use>
					</svg>
				</li>
				<Link to="/repos">REPOS</Link>
				<Link to="/pulls">PULLS</Link>
				<li className="sidebar__navigation-pullrequests">
					<svg className="sidebar__icon-pullrequests">
						<use xlinkHref="./icons/sprite.svg#icon-flow-switch"></use>
					</svg>
				</li>
			</ul>
		)
	}
}

export default Sidebar

