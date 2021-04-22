import { combineReducers } from 'redux'
import { authReducer } from '../domain/auth/reducer'
import { moneyTransactionReducer } from '../domain/money-transactions/reducer'
import { userReducer } from '../domain/users/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  moneyTransaction: moneyTransactionReducer,
  auth: authReducer
})

export default rootReducer
