import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import configStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configStore();
const store = mockStore();

addDecorator(story =>
  <Provider store={store}>
    {story()}
  </Provider>
);

const req = require.context("../src", true, /\.story\.js$/);
const loadStories = () => {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);