




import React, { Component } from 'react'

import SearchBar from './component_search_bar'

class DashboardHeader extends Component {
	render() {
		return (
			<header 
				style={{backgroundColor: 'inherit', boxShadow: 'inherit'}}
				className="dashboard__header" >
				
				<div className="left-items">
				<svg className="dashboard__logo">
					<use xlinkHref="./icons/sprite.svg#icon-social-github-circular"></use>
				</svg>
				</div>
				
				<div className="central-right-items">
				<form action="#" className="dashboard__header__search">
					<input type="text" className="dashboard__header__search__input" placeholder="" />
						<svg className="dashboard__header__search__icon">
							<use xlinkHref="./icons/sprite.svg#icon-zoom-outline"></use>
						</svg>
					<button className="dashboard__header__search__button"></button>
				</form>
				</div>

				<button className="dashboard__header__button"></button>
			</header>
		)
	}
}

export default DashboardHeader




