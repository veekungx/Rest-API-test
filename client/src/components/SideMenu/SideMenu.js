import React from 'react';
import { } from 'prop-types';
import SideMenuButton from '../SideMenuButton/SideMenuButton';
import './SideMenu.scss';

const SideMenu = () => (
  <div className="SideMenu">
    <SideMenuButton iconClassName="fa fa-user-circle" label="Edit Profile" />
    <SideMenuButton iconClassName="fa fa-vcard" label="Preferences" />
    <SideMenuButton iconClassName="fa fa-lock" label="Password" />
    <SideMenuButton iconClassName="fa fa-flash" label="Notifications" />
    <SideMenuButton iconClassName="fa fa-link" label="Connected Accounts" />
    <div className="SideMenu__divider" />
    <SideMenuButton iconClassName="fa fa-newspaper-o" label="Orders" />
    <SideMenuButton iconClassName="fa fa-credit-card" label="Payments" />
    <SideMenuButton iconClassName="fa fa-truck" label="Shipping" />
    <div className="SideMenu__divider" />
    <SideMenuButton iconClassName="fa fa-info" label="Credits & Referrals" />
  </div>
);

SideMenu.propTypes = {};
SideMenu.defaultProps = {};
export default SideMenu;
