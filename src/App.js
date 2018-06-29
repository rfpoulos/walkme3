import React from 'react';
import './App.css';
import { 
          BrowserRouter as Router, 
          Route, 
          Switch
        } from 'react-router-dom';
import Location from './fragments/location/component'

let App = () =>
  <Router>
    <div>
      <Location />
      <Switch>
      </Switch>
    </div>
  </Router>
;

export default App;