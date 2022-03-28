const loadTodos = () => async (dispatch) => {
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())

  dispatch({ type: 'todos/loaded', payload: todos })
}

window.loadTodos = loadTodos
