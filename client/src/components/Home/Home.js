import React from 'react';
import { } from 'prop-types';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => (
  <div className="Home">
    <Link href to="/login">Login</Link>
    <Link href to="/sign-up">Sign up</Link>
  </div>
);

Home.propTypes = {};
Home.defaultProps = {};
export default Home;
