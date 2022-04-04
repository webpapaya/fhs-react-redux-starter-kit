import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTodos } from '../../action-creators/todos'

export const Todos = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  return (
        <ul>
            {todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
        </ul>
  )
}
