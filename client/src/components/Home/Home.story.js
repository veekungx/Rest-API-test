import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import { action } from '@storybook/addon-actions';

import Home from './Home';

const props = {};
const events = {};

storiesOf('Home', module)
  .addDecorator(StoryRouter())
  .add('Default', () => <Home {...props} {...events} />);
