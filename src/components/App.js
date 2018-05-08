import React, { Component } from 'react';

import RepositoriesList from './repositories/repository_list'
import DashboardHeader from './layout/header/component_dashboard_header'
import DashboardContent from './layout/content/component_dashboard_content'
import Sidebar from './layout/content/component_sidebar'
import Pannel from './layout/content/component_pannel'
import 'materialize-css/dist/css/materialize.min.css'

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
