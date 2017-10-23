import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import configStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import StoryRouter from 'storybook-router';

const mockStore = configStore();
const store = mockStore({
  preference: {
    preference: {
    }
  }
});

addDecorator(story =>
  <Provider store={store}>
    {story()}
  </Provider>
);
addDecorator(StoryRouter());

const req = require.context("../src", true, /\.story\.js$/);
const loadStories = () => {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);