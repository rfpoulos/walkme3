import React from 'react';
import './App.css';
import { 
          BrowserRouter as Router, 
          Route, 
          Switch
        } from 'react-router-dom';
import Location from './fragments/location/location'
import Header from './views/header/header'

let App = () =>
  <Router>
    <div className="app">
      <Location />
      <Header />
      <Switch>
      </Switch>
    </div>
  </Router>
;

export default App;