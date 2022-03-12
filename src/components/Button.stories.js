import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, InfoButton, FormButton } from './Button'

storiesOf('Button', module).add('primary (default)', () => (
  <Button onClick={action('clicked')}>Click me</Button>
))
storiesOf('Button', module).add('InfoButton', () => (
  <InfoButton onClick={action('clicked')}>Click me</InfoButton>
))

storiesOf('Button', module).add('FormButton', () => (
  <FormButton onClick={action('submit')}>Submit</FormButton>
))
