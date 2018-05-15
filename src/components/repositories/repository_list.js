import socket from '../../websockets';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import { 
	getRepositories
} from '../../actions'

import RepositoryItem from './repository_item'

class RepositoriesList extends Component {
	
	//UPDATE ON REAL TIME SOCKETS
	// componentDidMount() {
	// 	socket.on('repos-update', this.props.getRepositories.bind(this));
	// 	axios.get(`${config.baseServerUrl}/repos`)
	// 		.then(res => {
	// 			console.log('***', res)
	// 			this.props.getRepositories(res.data)
	// 		})
	// }

	componentWillMount() {
		this.props.getRepositories()
	}

	renderRepositoryItem (searchValue) {
		
		let { repositories } = this.props
		if(!repositories) return <div>LOADING</div>
		
		return Object.keys(repositories)
			.filter(item => item.toUpperCase().includes(searchValue.toUpperCase()) )
			.map(key => {
				return (
					<RepositoryItem 
						key={key} 
						repo={repositories[key]}
					/>
				)
			})
	}

	render() {
		return (
			<ul>
				{this.renderRepositoryItem(this.props.searchValue)}
			</ul>
			
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		repositories: state.entities.repositories, 
		searchValue: state.search 
	}		
}
	
const mapDispatchToProps = (dispatch) => ({
	getRepositories: (repos, header) => dispatch(getRepositories(repos, header))
	// return bindActionCreators({ getRepositories }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList)



// <div className="dashboard__repository__card">
// 	<h4 className="dashboard__repository__title">
// 		Repositories
// 	</h4>
// 	<ul className="dashboard__repository__list">
// 		{this.renderRepositoryItem()}
// 	</ul>
// </div>











