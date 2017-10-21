import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideMenu from './SideMenu';

const props = {};
const events = {};

storiesOf('SideMenu', module)
  .add('Default', () => <SideMenu {...props} {...events} />);
