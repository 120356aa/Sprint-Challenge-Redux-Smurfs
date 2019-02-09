import React, { Component } from 'react';
import './App.css';
import { SmurfListView } from './view';
import SmurfForm from './components/SmurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfListView />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
