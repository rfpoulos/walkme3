import React from 'react';
import './App.css';
import { 
          BrowserRouter as Router, 
          Route, 
          Switch
        } from 'react-router-dom';
import Location from './fragments/location/location';
import Header from './views/header/header';
import SignIn from './views/sign-in/sign-in';
import SignInRedirect from './fragments/sign-in-redirect/sign-in-redirect';
import CreateAccount from './views/create-account/create-account';
import Walks from './views/walks/walks';
import Menu from './views/menu/menu'

let App = () =>
  <Router>
    <div className="app">
      <Location />
      <SignInRedirect />
      <Menu />
      <Header />
      <Switch>
        <Route path="/signin" component={ SignIn } />
        <Route path="/createaccount" component={ CreateAccount } />
        <Route path="/" component={ Walks } />
      </Switch>
    </div>
  </Router>
;

export default App;