import React from 'react';
import { string, bool, func } from 'prop-types';
import classnames from 'classnames';

import './SideMenuButton.scss';

const SideMenuButton =
  ({
    // props
    isActive,
    iconClassName,
    label,

    // events
    onClick,
  }) =>
    (
      <button
        className={classnames('SideMenuButton', { active: isActive })}
        onClick={onClick}
      >
        <i className={classnames('SideMenuButton__icon', iconClassName)} />
        <span className={classnames('SideMenuButton__label', { active: isActive })}>{label}</span>
      </button>
    );

SideMenuButton.propTypes = {
  isActive: bool,
  iconClassName: string,
  label: string,
  onClick: func,
};
SideMenuButton.defaultProps = {
  isActive: false,
  iconClassName: null,
  label: null,
  onClick: undefined,
};
export default SideMenuButton;
