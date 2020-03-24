import { combineReducers } from 'redux'

const initialState = []
const rootReducer = combineReducers({
  users: (state = initialState, action) => {
    switch(action.type) {
      case 'fetchUsers/success':
        return [...state, ...action.payload]
      case 'createUser/success':
        return [...state, action.payload]
      default:
        return state
    }
  },
  moneyTransactions: () => []
})

export default rootReducer
