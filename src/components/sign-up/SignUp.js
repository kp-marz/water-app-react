import React from 'react';
import { Form } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import logo from '../../assets/images/water-logo.png';
import { Link } from 'react-router-dom';
import './SignUp.css';

class SignUp extends React.Component {
  render() {
    return (
      <div className="App">
      <button class="sign-up-button" type="button"><Link to="/login">Login</Link></button>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Form>
            <Form.Input fluid label='Name' placeholder='Name' required />
            <Form.Input label='Email' placeholder='joe@schmoe.com' required />
            <Form.Input label='Password' type='password' required />
            <Button type='submit' variant='contained'>Sign Up</Button>
        </Form>
      </header>
      </div>
    );
  }
}

export default SignUp;
