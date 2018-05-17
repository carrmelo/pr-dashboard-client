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
        {/* <Route path='/'> */}
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/welcome" component={Welcome} />
          <div>
            <div style={{width:"100vw", height:"109px", backgroundColor:"#Fb2d3b", position:"fixed", zIndex:"6"}}></div>
            <DashboardHeader />
            <DashboardContent />
          </div>
        </Switch>
        {/* </Route> */}
      </div>
    );
  }
}

export default App;
