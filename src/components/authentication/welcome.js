import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader';

import { loginUser, getUserInfo } from '../../actions/authActions';

class Welcome extends Component {

  componentDidMount () {
    if (!this.props.isAuth){
      const code = this.props.location.search
      this.props.loginUser(code)
    } else if (!this.props.user) {
      this.props.getUserInfo()
      this.props.history.push('/repos')
    }
  }

  componentDidUpdate () {
    if (this.props.isAuth) {
      this.props.getUserInfo()
      setTimeout(() => this.props.history.push('/repos'), 300)
    }
  }

  render() {
    return (
      <div className="welcome-message">
        <Loader loaded={this.props.isAuth} color="#FFF" />
      </div>
    )
  }
}

const mapStateToProps = ({ authentication }) => ({
  isAuth: authentication.isAuthenticated,
  user: authentication.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
	loginUser: (code) => dispatch(loginUser(code)),
	getUserInfo: (code) => dispatch(getUserInfo(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
