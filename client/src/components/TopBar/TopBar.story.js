import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TopBar from './TopBar';

const props = {};
const events = {
  onSearch: action('onSearch'),
};

storiesOf('TopBar', module)
  .add('Default', () => <TopBar {...props} {...events} />);
