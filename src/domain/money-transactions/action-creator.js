import { v4 as uuid } from 'uuid'

export const createMoneyTransaction = ({ creditorId, debitorId, amount }) => async (dispatch) => {
  const userResponse = await fetch('http://localhost:3001/money-transaction', {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id: uuid(), creditorId, debitorId, amount, paidAt: null })
  })
    .then((response) => response.json())

  dispatch({
    type: 'moneyTransactions/created',
    payload: userResponse
  })
}
window.createMoneyTransaction = createMoneyTransaction