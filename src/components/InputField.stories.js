import React from 'react'
import { storiesOf } from '@storybook/react'
import { InputField } from './InputField'

storiesOf('InputField', module)
  .add('primary (default)', () => (
    <InputField />
  ))