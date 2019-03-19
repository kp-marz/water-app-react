import React, { Component } from 'react';
import logo from './assets/images/water-logo.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Holla
          </p>
        </header>
      </div>
    );
  }
}

export default App;
