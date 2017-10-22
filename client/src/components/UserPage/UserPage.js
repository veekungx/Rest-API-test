import React from 'react';
import { object } from 'prop-types';
import { Route } from 'react-router-dom';

import './UserPage.scss';
import TopBar from '../TopBar/TopBar';
import SideMenu from '../SideMenu/SideMenu';
import { PreferenceForm } from '../../features/preference/components/Preference/Preference';

const UserPage =
  ({
    // HOC react-router
    match,
  }) =>
    (
      <div className="UserPage">
        <TopBar />
        <div className="UserPage__container">
          <SideMenu />
          <Route path={`${match.url}/preference`} component={PreferenceForm} />
        </div>
      </div>
    );

UserPage.propTypes = {
  match: object,
};
UserPage.defaultProps = {
  match: {},
};

export default UserPage;
