import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PreferenceForm } from './Preference';

const props = {};
const events = {
  handleSubmit: action('handleSubmit'),
};

storiesOf('PreferenceForm', module)
  .add('Default', () => <PreferenceForm {...props} {...events} />);
