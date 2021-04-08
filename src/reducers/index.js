import { combineReducers } from 'redux'
import { moneyTransactionReducer } from '../domain/money-transactions/reducer'
import { userReducer } from '../domain/users/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  moneyTransaction: moneyTransactionReducer
})

export default rootReducer
