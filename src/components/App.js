import React, { Component } from 'react';

import RepositoriesList from './repositories/repository_list'


import Header from './layout/component_header'
import Sidebar from './layout/component_sidebar'
import Pannel from './layout/component_pannel'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Pannel />
      </div>
    );
  }
}

export default App;
