import React, { useState } from 'react'

const useCounter = () => {
  const [state, setState] = useState(0)
  const handleIncrement = () => setState(state + 1)

  return { state, handleIncrement }
}

const Button2 = () => {
  const { handleIncrement, state } = useCounter()

  return <a onClick={handleIncrement}>test + {state}</a>
}

const Button = () => {
  const { handleIncrement, state } = useCounter()

  return <button onClick={handleIncrement}>test + {state}</button>
}

function App () {
  return (
    <div>
        <Button></Button>
        <Button2></Button2>
    </div>
  )
}

export default App
