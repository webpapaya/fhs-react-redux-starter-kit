import { combineReducers } from 'redux'

const initialState = []
const rootReducer = combineReducers({
  moneyTransactions: (previousState = initialState, action) => {
    switch (action.type) {
      case 'createMoneyTransaction/success':
        return [...previousState, action.payload]
      case 'reset':
        return initialState
      default:
        return previousState
    };
  },
  user: () => []
})

export default rootReducer
