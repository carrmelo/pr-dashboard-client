import React, { Component } from 'react'

import { Link } from 'react-router-dom'


class Sidebar extends Component {
	render() {
		return (
			<ul className="dashboard__sidebar">

				<li className="sidebar__navigation-repositories">
					<Link to="/repos">
						<svg className="sidebar__icon-repositories">
							<use xlinkHref="./icons/sprite.svg#icon-th-large-outline"></use>
						</svg>
					</Link>
				</li>

				<li className="sidebar__navigation-pullrequests">
					<Link to="/pulls">
						<svg className="sidebar__icon-pullrequests">
							<use xlinkHref="./icons/sprite.svg#icon-flow-switch"></use>
						</svg>
					</Link>
				</li>

			</ul>
		)
	}
}

export default Sidebar
