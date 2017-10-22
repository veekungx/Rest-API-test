import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from '../../components/Home/Home';
import { LoginForm } from '../../features/login/components/Login/Login';
import { SignUpForm } from '../../features/sign-up/components/SignUp/SignUp';
import { PreferenceForm } from '../../features/preference/components/Preference/Preference';
import AuthenticatedRouter from '../AuthenticatedRoute/AuthenticatedRoute';

const App = () => (
  (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up" component={SignUpForm} />
        <AuthenticatedRouter exact path="/preference" component={PreferenceForm} />
      </Switch>
    </Router>
  )
);

export default App;
