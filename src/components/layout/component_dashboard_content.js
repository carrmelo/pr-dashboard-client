
import React, { Component } from 'react'
import Pannel from './component_pannel'
import Sidebar from './component_sidebar'

class DashboardContent extends Component {
	render() {
		return (
			<div className="dashboard__content">
				<Sidebar />
				<Pannel />
			</div>
		)
	}
}

export default DashboardContent





