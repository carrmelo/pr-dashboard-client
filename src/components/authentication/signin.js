import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {

  componentDidMount () {
    if (this.props.isAuth && this.props.user[0]) {
      this.props.history.push('/repos')
    }
  }

  render() {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.82 317.54">
          <title>Asset 1</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <text class="cls-1" transform="translate(7.14 247.8)">PRD
              </text>
            </g>
          </g>
        </svg>
        
        <a href={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_API_VERSION}/auth/github`}>Sign In</a>
      </div>
    )
  }
}

const mapStateToProps = ({ authentication }) => ({
  isAuth: authentication.isAuthenticated,
  user: authentication.currentUser
})

export default connect(mapStateToProps)(SignIn)
