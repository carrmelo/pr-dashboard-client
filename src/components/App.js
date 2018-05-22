import React, { Component } from 'react';

import NotFound from './authentication/notFound';
import SignIn from './authentication/signin';
import Welcome from './authentication/welcome';
import { Route, Switch } from 'react-router-dom';
import PuReDashboard from './layout/content/component_pure_dashboard'

import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch className="App">
          <Route exact path="/" component={SignIn} />
          <Route exact path="/welcome" component={Welcome} />
          <Route path="/repos" component={PuReDashboard} />
          <Route path="/pulls" component={PuReDashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
