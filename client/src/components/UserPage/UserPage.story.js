import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UserPage from './UserPage';

const props = {};
const events = {};

storiesOf('UserPage', module)
  .add('Default', () => <UserPage {...props} {...events} />);
