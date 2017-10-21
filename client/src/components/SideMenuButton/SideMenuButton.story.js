import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideMenuButton from './SideMenuButton';

const props = {
  label: 'This is a button',
};
const events = {
  onClick: action('onClick'),
};

storiesOf('SideMenuButton', module)
  .add('Default', () => <SideMenuButton {...props} {...events} />)
  .add('With icon', () => <SideMenuButton {...props} {...events} iconClassName="fa fa-user" />)
  .add('Active', () => <SideMenuButton {...props} {...events} isActive />)
  .add('Active with icon', () => <SideMenuButton {...props} {...events} isActive iconClassName="fa fa-user" />);
