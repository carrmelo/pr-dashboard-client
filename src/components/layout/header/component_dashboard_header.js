
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlatButton from 'material-ui/FlatButton';

import { searchTerm } from '../../../actions'
import * as authActions from '../../../actions/authActions';

class DashboardHeader extends Component {
	
	state = { value: '' }
	
	onInputChange = (e) => {
		this.setState({
			value: e.target.value
		}, () => {
			this.props.searchTerm(this.state.value)
		})
	} 	

	handleLogOut = () => {
		this.props.authActions.logoutUser();
	}

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
						<input 
							type="text" className="header__search-input" placeholder="" 
							onChange={this.onInputChange}
							value={this.state.value}
						/>
						<button className="header__search-button">
							<svg className="header__search-icon">
								<use xlinkHref="./icons/sprite.svg#icon-zoom-outline"></use>
							</svg>
						</button>
					</form>
				</div>

				<a href={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/auth/github`}>Link </a>

				<div className="header__config">
					<FlatButton 
						onClick={this.handleLogOut}
						className="header__config-button"
					>LOG OUT</FlatButton>
				</div>
			</header>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	authActions: bindActionCreators(authActions, dispatch), 
	searchTerm: bindActionCreators(searchTerm, dispatch)
});

export default connect(null, mapDispatchToProps)(DashboardHeader);




