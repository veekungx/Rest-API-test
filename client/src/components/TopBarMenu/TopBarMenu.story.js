import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TopBarMenu from './TopBarMenu';

const buildStory = (attrs) => {
  const props = {
    iconClassName: 'fa fa-shopping-cart',
    ...attrs,
  };
  const events = {
    onClick: action('onClick'),
  };

  return <TopBarMenu {...props} {...events} />;
};

storiesOf('TopBarMenu', module)
  .add('icon', () => buildStory())
  .add('icon with label', () => buildStory({ label: 'Shopping Cart' }))
  .add('icon with badge', () => buildStory({ badge: 4 }))
  .add('icon with badge and label', () => buildStory({ label: 'cart', badge: 4 }));
