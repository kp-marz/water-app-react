import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import logo from '../../assets/images/water-logo.png'
import './Dashboard.css';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      </div>
    );
  }
}

export default Dashboard;