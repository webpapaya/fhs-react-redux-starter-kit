const initialState = []
export const moneyTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'moneyTransactions/fetched':
      return [...state, ...action.payload]
    default:
      return state;
  }
}