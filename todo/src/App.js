import React, { Component } from 'react';

import './App.css';
import TaskInput from './components/TaskInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do App</h1>
        </header>
        <TaskInput />
      </div>
    );
  }
}

export default App;
