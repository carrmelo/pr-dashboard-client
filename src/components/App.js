import React, { Component } from 'react';

import SignIn from './authentication/signin';
import Welcome from './authentication/welcome';
import { Route, Switch } from 'react-router-dom';
import DashboardHeader from './layout/header/component_dashboard_header'
import DashboardContent from './layout/content/component_dashboard_content'
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/welcome" component={Welcome} />
          <div>
            <DashboardHeader />
            <DashboardContent />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
