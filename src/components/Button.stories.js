import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

storiesOf('Button', module)
  .add('primary disabled true', () => (
    <Button disabled={true}>Click me</Button>
  ))
  .add('primary disabled false', () => (
    <Button disabled={false}>Click me</Button>
  ))
  .add('primary disabled', () => (
    <Button onClick={action('clicked')} disabled>
      Click me
    </Button>
  ))
  .add('danger', () => (
    <Button variant='danger' onClick={action('clicked')}>
      Click me
    </Button>
  ))
  .add('danger disabled', () => (
    <Button variant='danger' onClick={action('clicked')} disabled>
      Click me
    </Button>
  ))
