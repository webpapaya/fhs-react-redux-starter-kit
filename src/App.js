import React from 'react'
import { Button } from './components/Button'
import Todos from './components/todos/Todos.container'

function App () {
  return (
    <div>
        <Button>test</Button>
        <Todos id={1} />
    </div>
  )
}

export default App
