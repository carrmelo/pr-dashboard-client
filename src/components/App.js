import React, { Component } from 'react';

import PullRequestsList from './pullrequest/pullrequest_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        	<PullRequestsList />	
      </div>
    );
  }
}

export default App;
