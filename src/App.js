import React, { useState } from 'react'

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.state = { backgroundColor: 'red', test: 1 }
  }

  toggleBackground () {
    const nextColour = this.state.backgroundColor === 'red' ? 'blue' : 'red'
    this.setState({ backgroundColor: nextColour })
  }

  render () {
    return (
            <button
                onClick={() => this.toggleBackground()}
                style={{ backgroundColor: this.state.backgroundColor }}
            >
                {this.props.children}
            </button>
    )
  }
}

const InnerButton = ({ backgroundColor, onClick }) => {
  return (
        <span onClick={onClick}>{backgroundColor}</span>
  )
}

const FunctionalButton = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('red')
  const onClick = () => setBackgroundColor(backgroundColor === 'red' ? 'blue' : 'red')
  return (
        <div
            style={{ backgroundColor }}
        >
            <InnerButton backgroundColor={backgroundColor} onClick={onClick} />
            { children}
        </div>
  )
}

const InputField = () => {
  const [username, setUsername] = useState('')

  return (
        <>
            <input
                onChange={(evt) => setUsername(evt.target.value)}
                value={ username.slice(0, 5) }
            />
        </>
  )
}

// const Button = ({ children, disabled = false }) => {
//   return <button disabled={disabled}>{children}</button>
// }

const App = () => (
    <div>
        <InputField />
        <Button disabled={false}>
            A button
        </Button>

        <FunctionalButton disabled={false}>
            {(new Date()).toLocaleDateString()}
        </FunctionalButton>
    </div>
)

export default App
