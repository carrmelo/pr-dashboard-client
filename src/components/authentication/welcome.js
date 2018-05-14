import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser, getUserInfo } from '../../actions/authActions';

class Welcome extends Component {

  componentDidMount () {
    const code = this.props.location.search
    this.props.loginUser(code)
  }

  // static getDerivedStateFromProps (nextProps, prevState) {
  //   if (nextProps.isAuth) {
  //     nextProps.getUserInfo()
  //     nextProps.history.push('/repos')
  //   }
  //   return { ...nextProps }
  // }

  componentDidUpdate () {
    if (this.props.isAuth) {
      this.props.getUserInfo()
      this.props.history.push('/repos')
    }
  }

  render() {
    return (
      <div>
        Welcome to PR Dashboard, we are redirecting you to your Repositories<br/>
        if you are able to read this far, maybe something went wrong, we'll let you know
      </div>
    )
  }
}

const mapStateToProps = ({ authentication }) => ({
  isAuth: authentication.isAuthenticated,
  currentUser: authentication.currentUser
})

const mapDispatchToProps = (dispatch) => ({
	loginUser: (code) => dispatch(loginUser(code)),
	getUserInfo: (code) => dispatch(getUserInfo(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
