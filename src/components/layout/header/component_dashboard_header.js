
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../../actions/authActions';

class DashboardHeader extends Component {

	redirect() {
    window.location.href = `https://pr-dashboard-server.herokuapp.com/v1/auth/github`;
  }

	handleLogIn = () => {
		// const msg = loginTab(`https://pr-dashboard-server.herokuapp.com/v1/auth/github`)
		// msg.then(user => {
		// 	console.log('USER', user);
			
		this.props.authActions.loginUser()

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
						<input type="text" className="header__search-input" placeholder="" />
						<button className="header__search-button">
							<svg className="header__search-icon">
								<use xlinkHref="./icons/sprite.svg#icon-zoom-outline"></use>
							</svg>
						</button>
					</form>
				</div>

				<a href= 'https://pr-dashboard-server.herokuapp.com/v1/auth/github '>Link </a>

				<div className="header__config">
					<button className="header__config-button" onClick={this.handleLogIn}>
						<svg className="header__config-icon">
							<use xlinkHref="./icons/sprite.svg#icon-cog-outline"></use>
						</svg>
					</button>
				</div>
			</header>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	authActions: bindActionCreators(authActions, dispatch)
});

export default connect(null, mapDispatchToProps)(DashboardHeader);




