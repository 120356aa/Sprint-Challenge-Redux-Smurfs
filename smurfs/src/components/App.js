import React, { Component } from 'react';
import './App.css';
import { SmurfsListView } from '../view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfsListView/>
      </div>
    );
  }
}

export default App;
