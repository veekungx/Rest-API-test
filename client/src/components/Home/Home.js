import React from 'react';
import { } from 'prop-types';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => (
  <div className="Home">
    <div className="Home__title">FANCY</div>
    <div className="Home__linkContainer">
      <Link className="Home__link" href to="/login">Login</Link>
      |
      <Link className="Home__link" href to="/sign-up">Sign up</Link>
    </div>
  </div>
);

Home.propTypes = {};
Home.defaultProps = {};
export default Home;
