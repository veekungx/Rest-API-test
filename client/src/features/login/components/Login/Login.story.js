import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LoginForm } from './Login';

const props = {};
const events = {
  onSubmit: action('onSubmit'),
};

storiesOf('LoginForm', module)
  .add('Default', () => <LoginForm {...props} {...events} />);
