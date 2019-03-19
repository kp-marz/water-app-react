import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../assets/images/water-logo.png';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import './Login.css';


class Login extends React.Component {
  render() {
    
    return (
      <div className="App">
      <header class="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <form>
            <TextField label='Email' placeholder='joe@schmoe.com' required /><br/>
            <TextField label='Password' type='password' required /><br/><br/>
            <Button type='submit' variant='contained'>Login</Button>
        </form>
        <Link to="/signup"><span class="small-text">Sign Up</span></Link>
      </header>
      </div>
    );
  }
}

export default Login;