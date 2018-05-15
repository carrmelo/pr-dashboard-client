
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../../actions/authActions';

class DashboardHeader extends Component {

	state = { value: '' }

	onInputChange = (e) => {
		this.setState({
			value: e.target.value
		}, () => console.log(this.state.value))
	}

	handleLogOut = () => {
		this.props.authActions.logoutUser();
		localStorage.clear();
	}

	renderLogOutButton = () => (
		(this.props.isAuth)
		? <div className="header__config">
				<button className="header__config-button" onClick={this.handleLogOut}>
					Sign Out
					<svg className="header__config-icon">
						<use xlinkHref="./icons/sprite.svg#icon-cog-outline"></use>
					</svg>
				</button>
			</div>
		: null
	)

	renderName = (user) => (
			<div className="header__config">
				Hello <br />{user[0].loginName}
			</div>
	)

	renderSignIn = () => (
	  <div> Please,
			<a href={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/auth/github`}> sign in </a>
		</div>
	)

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

				{(this.props.isAuth && this.props.user[0])
				? this.renderName(this.props.user)
				: this.renderSignIn()}

				{this.renderLogOutButton()}

			</header>
		)
	}
}

const mapStateToProps = ({ authentication }) => ({
	isAuth: authentication.isAuthenticated,
	user: authentication.currentUser
})

const mapDispatchToProps = dispatch => ({
	authActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
