import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './Input'

storiesOf('Input', module).add('primary (default)', () => (
  <Input name="Input" id="input" value="name" onChange={action('onChange')} />
))
