import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
		localStorage.clear();
	}

	renderLogOutButton = () => (
		(this.props.isAuth)
		?
			<div onClick={this.handleLogOut} className="header__sign_out">
				<span>LOG OUT</span>
			</div>
		: null
	)

	renderName = (user) => (
			<div id="header__userinfo">
				<img
					src={user[0].picture}
					id="header__userinfo-img"
					alt="{user[0].displayName}"/>
				<div>
					{user[0].loginName}
				</div>
			</div>
	)

	renderSignIn = () => (
	  <div id="header__sign-in"> Please,
			<a href={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/auth/github`}> Sign In </a>
		</div>
	)

	renderSearchBar = () => (
		<form action="#" className="header__search-form">
		<input
			type="text" className="header__search-input" placeholder=""
			onChange={this.onInputChange}
			value={this.state.value}
		/>
		<button className="header__search-button">
			<svg className="header__search-icon">
				<use xlinkHref="./icons/sprite.svg#icon-zoom-outline"><title></title></use>
			</svg>
		</button>
	</form>
	)

	render() {
		return (
			<header className="dashboard__header" >

				<div className="header__logo">
					<svg className="header__logo-icon">
						<use xlinkHref="./icons/sprite.svg#icon-social-github-circular"></use>
					</svg>
				</div>

				<div id="header__search-userinfo-sign">
					<div id="header__search-bar">
						{(this.props.isAuth && this.props.user[0])
						? this.renderSearchBar()
						: ''}
					</div>

					{(this.props.isAuth && this.props.user[0])
					? this.renderName(this.props.user)
					: this.renderSignIn()}

					{this.renderLogOutButton()}

				</div>


			</header>
		)
	}
}

const mapStateToProps = ({ authentication }) => ({
	isAuth: authentication.isAuthenticated,
	user: authentication.currentUser
})

const mapDispatchToProps = dispatch => ({
	authActions: bindActionCreators(authActions, dispatch),
	searchTerm: bindActionCreators(searchTerm, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
