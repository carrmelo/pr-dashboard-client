
import React, { Component } from 'react'

// import SearchBar from './component_search_bar'

class DashboardHeader extends Component {
	render() {
		return (
			<header 
				style={{backgroundColor: 'inherit', boxShadow: 'inherit'}}
				className="dashboard__header" >
				
				<div className="header__logo">
					<svg className="header__logo-icon">
						<use xlinkHref="./icons/sprite.svg#icon-social-github-circular"></use>
					</svg>
				</div>

				<div className="header__search">
					<form action="#" className="header__search-form">
						<input type="text" className="header__search-input" placeholder="" />
						<button className="header__search-button">
							<svg className="header__search-icon">
								<use xlinkHref="./icons/sprite.svg#icon-zoom-outline"></use>
							</svg>
						</button>
					</form>
				</div>

				<div className="header__config">
					<button className="header__config-button">
						<svg className="header__config-icon">
							<use xlinkHref="./icons/sprite.svg#icon-cog-outline"></use>
						</svg>
					</button>
				</div>
			</header>
		)
	}
}

export default DashboardHeader




