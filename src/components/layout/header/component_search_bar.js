


import React, { Component } from 'react'

class SearchBar extends Component {
	render() {
		return (
			<form action="#" className="header__search" 
			placeholder="Search for repositories, pull requests, or users">
					<input type="text" className="search__input"/>
					<button className="search__button"></button>
					<svg className="search__icon">
						<use xlinkHref="../../../icons/sprite.svg#zoom-outline"></use>
					</svg>
			</form>
		)
	}
}

export default SearchBar



