import React, { Component } from 'react';

import DashboardHeader from './layout/header/component_dashboard_header'
import PullRequestList from './pullrequest/pullrequest_list'
import DashboardContent from './layout/content/component_dashboard_content'
import 'materialize-css/dist/css/materialize.min.css'

// import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardHeader />
        <DashboardContent />
      </div>
    );
  }
}

export default App;
