import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import SignUp from './SignUp'

const Button = ({ disabled }) => {
  return (
    <button disabled={disabled}>
      test
    </button>
  )
}



class ToggleButton extends React.Component {
  state = { backgroundColor: 'red' };

  toggleBackgroundColor = () => {
    const nextBackgroundColor = this.state.backgroundColor === 'red' ? 'blue' : 'red'
    this.setState({ backgroundColor: nextBackgroundColor })
    //   ^^^^^^^^^
    // setState calls render method with updated state
  }
  render() {
    return (
      <button
        onClick={() => this.toggleBackgroundColor()}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        {this.props.children}
      </button>);
  }
}

const useCounter = () => {
  const [count, setCount] = useState(0)
  const handleIncrement = () => setCount(count + 1)
  return { count, handleIncrement }
}

const useForm = (defaultValues) => {
  const [values, setValues] = useState(defaultValues)
  return {
    values,
    setValue: (name) => (evt) => {
      setValues({...values, [name]: evt.target.value })
    }
  }
}

const App = () => {
  const {values, setValue} = useForm({
    email: ''
  })

  return (
    <div>
      {values.email}
      <input onChange={setValue('email') } value={values.email} />
    </div>
  )
}

storiesOf('NewButton', module)
  .add('counter', () => (
    <div>
      <App />
    </div>
  ))
  .add('default', () => <ToggleButton>test</ToggleButton>)
  .add('disabled explicit', () => <Button disabled={true} />)
  .add('disabled implicit', () => <Button disabled />)
