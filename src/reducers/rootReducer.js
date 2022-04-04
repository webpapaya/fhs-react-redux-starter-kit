import { combineReducers } from 'redux'
import { dummyReducer } from './dummyReducer'

const INITIAL_STATE = []
const todoReducer = (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'todos/load/success':
      return action.payload.sort(() => Math.random())
    default:
      return previousState
  }
}

export default combineReducers({
  dummy: dummyReducer,
  todos: todoReducer
})
