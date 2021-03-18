import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

window.store = store
window.fetchUsersActionCreator = () => async (dispatch) => {
  const userResponse = await fetch('http://localhost:3001/user').then((response) => response.json())
  dispatch({
    type: 'users/fetched',
    payload: userResponse
  })
}

window.fetchMoneyTransactionsActionCreator = () => async (dispatch) => {
  const userResponse = await fetch('http://localhost:3001/money-transaction').then((response) => response.json())
  dispatch({
    type: 'moneyTransactions/fetched',
    payload: userResponse
  })
}


export default store