import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GithubLoginButton } from 'react-social-login-buttons';

class SignIn extends Component {

  componentDidMount () {
    if (this.props.isAuth && this.props.user[0]) {
      this.props.history.push('/repos')
    }
  }

  render() {
    return (
      <div className="container-landing">
        <div className="h-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.74 227.97" width="500">
            <title>PuRe</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <text className="cls-11" transform="translate(1.39 136.55) rotate(-0.6)">PR</text>
                <text className="cls-22" transform="translate(2.53 195.24)">Dashboard</text>
              </g>
            </g>
          </svg>

          <div className="v-container">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.82 317.54">
              <title>Asset 1</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <text className="cls-1" transform="translate(7.14 247.8)">follow the repo
                  </text>
                </g>
              </g>
            </svg>

            <a href={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/auth/github`} className="github-button">
              <GithubLoginButton />
            </a>  
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ authentication }) => ({
  isAuth: authentication.isAuthenticated,
  user: authentication.currentUser
})

export default connect(mapStateToProps)(SignIn)
