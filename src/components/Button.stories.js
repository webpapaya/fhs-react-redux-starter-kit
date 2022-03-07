import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

storiesOf('Button', module)
  .add('primary (default)', () => (
    <Button onClick={action('clicked')}>Click me</Button>
  ))
  .add('secondary', () => (
      <Button variant="secondary" onClick={action('clicked')}>Click me</Button>
  ))
