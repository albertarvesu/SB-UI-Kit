import React from 'react';

import { storiesOf } from '@storybook/react';
import { Icon } from './';

storiesOf('Icon', module)
  .add('Cog', () => (
    <Icon glyph="settings" color="blue" />
  ))
  .add('Twitter', () => (
    <Icon glyph="twitter" size={64} color="lightblue" />
  ));