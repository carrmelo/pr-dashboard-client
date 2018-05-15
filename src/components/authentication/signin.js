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
        PR Dashboard <br />
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
