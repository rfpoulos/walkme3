import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Location from './fragments/location/location';
import Header from './views/header/header';
import SignIn from './views/sign-in/sign-in';
import SignInRedirect from './fragments/sign-in-redirect/sign-in-redirect';
import CreateAccount from './views/create-account/create-account';
import Walks from './views/walks/walks';
import Menu from './views/menu/menu';
import WalkOverview from './views/walk-overview/walk-overview';

let App = () =>
  <Router>
    <div>
      <Location />
      <SignInRedirect />
      <Menu />
      <Header />
      <div style={ {paddingTop: '4rem'} }>
        <Switch>
          <Route path="/walks/:id" component={ WalkOverview } />
          <Route path="/walks" component={ Walks } />
          <Route path="/signin" component={ SignIn } />
          <Route path="/createaccount" component={ CreateAccount } />
          <Route path="/" component={ Walks } />
        </Switch>
      </div>
    </div>
  </Router>
;

export default App;