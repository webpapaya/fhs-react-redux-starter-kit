import { connect } from 'react-redux'
import { Todos } from './Todos.component'
import { loadTodos } from '../../action-creators/todos'

const mapStateToProps = (state, props) => {
  return {
    todos: state.todos.filter((todo) => todo.id === props.id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loadTodos: () => dispatch(loadTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
