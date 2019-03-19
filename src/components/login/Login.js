import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../assets/images/water-logo.png';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import './Login.css';


class Login extends React.Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  

  render() {
    
    return (
      <div className="App">
      <header class="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <form onSubmit={this.handleSubmit}>
            <TextField label='Email' type='email' name='email' placeholder='joe@schmoe.com' onChange={this.handleChange}  required /><br/>
            <TextField label='Password' type='password' name='password' onChange={this.handleChange} required /><br/><br/>
            <Button type='submit' value="Submit" variant='contained'>Login</Button>
        </form>
        <Link to="/signup"><span class="small-text">Sign Up</span></Link>
      </header>
      </div>
    );
  }
}

export default Login;