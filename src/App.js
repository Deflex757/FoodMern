import React, { Component } from 'react';
import './App.css';
import Plate from './components/plates.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Plate />
      </div>
    );
  }
}

export default App;
