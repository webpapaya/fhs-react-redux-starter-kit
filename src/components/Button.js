import React, { useEffect, useState } from 'react'
import styles from './Button.module.css'

const useHTTPEndpoint = input => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(input)
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [])

  return todos
}

export const FetchCustomHook = ({ onClick, children }) => {
  const todos = useHTTPEndpoint('https://jsonplaceholder.typicode.com/todos')

  console.log(todos)

  return null
}

export const Button = ({ onClick, children }) => {
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
    //     .then(response => response.json())
    //     .then(json => console.log(json))

    const onScroll = (evt) => console.log('eventlistener', counter)
    document.addEventListener('click', onScroll)

    return () => {
      document.removeEventListener('click', onScroll)
    }
  })

  console.log('state', counter)

  return (
  <button onClick={() => setCounter(counter + 1)} className={`${styles.button} ${styles.primary}`}>
    {children}
  </button>
  )
}
