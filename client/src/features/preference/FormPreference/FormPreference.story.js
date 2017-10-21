import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FormPreference from './FormPreference';

const props = {};
const events = {
  handleSubmit: action('handleSubmit'),
};

storiesOf('FormPreference', module)
  .add('Default', () => <FormPreference {...props} {...events} />);
