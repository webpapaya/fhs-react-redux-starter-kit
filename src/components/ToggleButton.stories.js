import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import SignUp from './SignUp'

class ToggleButtonClassComponent extends React.Component {
  state = { backgroundColor: 'red' }
  toggleBackgroundColor = () => {
    this.setState({ backgroundColor: this.state.backgroundColor === 'red'
      ? 'green'
      : 'red' })
  }
  render() {
    return (
      <button
        onClick={this.toggleBackgroundColor}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        click me
      </button>
    )
  }
}

const ToggleButtonHooks = () => {
  const [backgroundColor, setBackgroundColor] = useState('red')

  return (
    <button
      onClick={() => setBackgroundColor(backgroundColor === 'red'
        ? 'green'
        : 'red')
      }
      style={{ backgroundColor: backgroundColor }}
    >
        click me
      </button>
  )
}


storiesOf('ToggleButton', module)
  .add('ToggleButtonClassComponent', () => <ToggleButtonClassComponent />)
  .add('ToggleButtonHooks', () => <ToggleButtonHooks />)
