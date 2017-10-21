import React from 'react';
import { } from 'prop-types';
import TopBarMenu from '../TopBarMenu/TopBarMenu';
import './TopBar.scss';

const TopBar = () => (
  <div className="TopBar">
    <input
      className="TopBar__search"
      type="search"
      placeholder="Search Fancy"
    />
    <div className="TopBar__logo">FANCY</div>
    <div className="TopBar__menus">
      <TopBarMenu iconClassName="fa fa-shopping-cart" badge={1} />
      <TopBarMenu iconClassName="fa fa-inbox" />
      <TopBarMenu iconClassName="fa fa-bolt" />
      <TopBarMenu iconClassName="fa fa-user" label="You" />
    </div>
  </div>
);

TopBar.propTypes = {};
TopBar.defaultProps = {};
export default TopBar;
