import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Home from './Home';

const props = {};
const events = {};

storiesOf('Home',module)
  .add('Default',()=> <Home {...props} {...events}/>);
