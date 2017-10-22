import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
import Home from '../../components/Home/Home';
import { LoginForm } from '../../features/login/components/Login/Login';
import { SignUpForm } from '../../features/sign-up/components/SignUp/SignUp';
import AuthenticatedRouter from '../AuthenticatedRoute/AuthenticatedRoute';
import UserPage from '../UserPage/UserPage';

const App = () => (
  (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/sign-up" component={SignUpForm} />
        <AuthenticatedRouter path="/user" component={UserPage} />
      </Switch>
    </Router>
  )
);

export default App;
