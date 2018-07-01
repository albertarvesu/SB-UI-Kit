import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from './';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';


const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories
  .add('Default', () => (
    <Button>Default</Button>
  ))
  .add('Primary', () => (
    <Button primary={true}>Primary</Button>
  ))
  .add('Secondary', () => (
    <Button secondary={true}>Secondary</Button>
  ))
  .add('Small', () => (
    <Button small={true}>Small</Button>
  ))
  .add('Large', () => (
    <Button large={true}>Large</Button>
  ));