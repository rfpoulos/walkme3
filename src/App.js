import React from 'react';
import './App.css';
import { 
          BrowserRouter as Router, 
          Route, 
          Switch
        } from 'react-router-dom';
import Location from './fragments/location/location';
import Header from './views/header/header';
import Menu from './views/menu/menu';
import SignIn from './views/sign-in/sign-in';
import SignInRedirect from './fragments/sign-in-redirect/sign-in-redirect';

let App = () =>
  <Router>
    <div className="app">
      <Location />
      <SignInRedirect />
      <Header />
      <Menu />
      <Switch>
        <Route path="/signin" component={ SignIn } />
      </Switch>
    </div>
  </Router>
;

export default App;