import React, { Component } from 'react';

import RepositoriesList from './repositories/repository_list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pull Requests Dashboard</h1>
        </header>
        <RepositoriesList />
      </div>
    );
  }
}

export default App;
