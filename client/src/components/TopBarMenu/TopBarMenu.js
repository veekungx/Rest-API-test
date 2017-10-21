import React from 'react';
import { number, string, func } from 'prop-types';
import classnames from 'classnames';

import './TopBarMenu.scss';

const TopBarMenu =
  ({
    // props
    iconClassName,
    badge,
    label,
    // events
    onClick,
  }) =>
    (
      <button className="TopBarMenu" onClick={onClick}>
        <i className={classnames('TopBarMenu__icon', iconClassName)} />
        {badge > 0 && <div className="TopBarMenu__badge">{badge}</div>}
        <div className="TopBarMenu__label">{label}</div>
      </button>
    );

TopBarMenu.propTypes = {
  iconClassName: string,
  badge: number,
  label: string,
  onClick: func,
};
TopBarMenu.defaultProps = {
  iconClassName: null,
  badge: 0,
  label: '',
  onClick: undefined,
};
export default TopBarMenu;
