import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Login from './components/login/Login'
import SignUp from './components/sign-up/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import * as serviceWorker from './serviceWorker'
import 'typeface-roboto';


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signup" component={SignUp} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
