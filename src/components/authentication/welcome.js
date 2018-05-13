import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authActions';

class Welcome extends Component {

  componentDidMount () {
    const code = this.props.location.search
    console.log(code);
    this.props.loginUser(code)
  }
 
  render() {
    return (
      <div>
        PR Dashboard <br/>
      {/* <button onClick>Sign In</button> */}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
	loginUser: (code) => dispatch(loginUser(code))
});

export default connect(null, mapDispatchToProps)(Welcome);
