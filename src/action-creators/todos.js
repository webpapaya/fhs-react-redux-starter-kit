export const loadTodos = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'todos/load/initiated' })

      const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())

      dispatch({ type: 'todos/load/success', payload: todos })
    } catch (e) {
      dispatch({ type: 'todos/load/error' })
    }
  }
}

const signIn = ({ username, password }) => {
  return async (dispatch) => {
    console.log({ username, password }) // imagine an http call here
    dispatch({ type: 'user/signedIn', payload: {} })
  }
}

window.loadTodos = loadTodos
window.signIn = signIn
