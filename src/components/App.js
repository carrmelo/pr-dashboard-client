import React, { Component } from 'react';

import RepositoriesList from './repositories/repository_list'

import DashboardHeader from './layout/component_dashboard_header'
import DashboardContent from './layout/component_dashboard_content'
import Sidebar from './layout/component_sidebar'
import Pannel from './layout/component_pannel'

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
