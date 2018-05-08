




import React, { Component } from 'react'

import SearchBar from './component_search_bar'

class DashboardHeader extends Component {
	render() {
		return (
			<header 
				style={{backgroundColor: 'inherit', boxShadow: 'inherit'}}
				className="dashboard__header" >
				HEADER

				<SearchBar />
			</header>
		)
	}
}

export default DashboardHeader




