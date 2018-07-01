import React from 'react';

import { storiesOf } from '@storybook/react';
import { Icon } from './';

storiesOf('Icon', module)
  .add('with settings', () => (
    <Icon glyph="settings" size={64} className="icon" color="blue" />
  ))
  .add('with Twitter icon', () => (
    <Icon glyph="twitter" size={100} className="icon" color="lightblue" />
  ))