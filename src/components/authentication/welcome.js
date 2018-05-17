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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 360" width="1000">
          <title>PuRe</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <text className="cls-2" transform="translate(1.39 136.55) rotate(-0.6)">
                Welcome to PR Dashboard, we are redirecting you to your Repositories</text>
              <text className="cls-2" transform="translate(2.53 195.24)">
                if you are able to read this far, maybe something went wrong, we'll let you know</text>
            </g>
          </g>
        </svg>
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
