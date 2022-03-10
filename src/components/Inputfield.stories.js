import React from 'react'
import { storiesOf } from '@storybook/react'
import { Inputfield } from './Inputfield'

storiesOf('Inputfield', module).add('default', () => (
    <Inputfield type="type" label="Label" />
))
