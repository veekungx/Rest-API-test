import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SignUpForm } from './SignUp';

const props = {};
const events = {
  onSubmit: action('onSubmit'),
};

storiesOf('SignUpForm', module)
  .add('Default', () => <SignUpForm {...props} {...events} />);
