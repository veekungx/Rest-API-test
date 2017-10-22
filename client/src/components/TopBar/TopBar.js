import React from 'react';
import { func } from 'prop-types';
import TopBarMenu from '../TopBarMenu/TopBarMenu';
import './TopBar.scss';

const TopBar =
  ({
    // events
    onSearch,
  }) =>
    (
      <div className="TopBar">
        <input
          className="TopBar__search"
          type="search"
          onChange={onSearch}
          placeholder="Search Fancy"
        />
        <div className="TopBar__logo">FANCY</div>
        <div className="TopBar__menus">
          <TopBarMenu iconClassName="fa fa-shopping-cart" badge={1} />
          <TopBarMenu iconClassName="fa fa-inbox" />
          <TopBarMenu iconClassName="fa fa-bolt" />
          <TopBarMenu iconClassName="fa fa-user" label="You" />
          <TopBarMenu iconClassName="fa fa-sign-out" label="Log out" />
        </div>
      </div>
    );

TopBar.propTypes = {
  onSearch: func,
};
TopBar.defaultProps = {
  onSearch: undefined,
};
export default TopBar;
