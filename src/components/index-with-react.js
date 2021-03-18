import React, { useEffect, useState } from 'react'

const useHTTP = (url) => {
  const [response, setResponse] = useState([])
  useEffect(() => {
    fetch(url)
      .then((httpResponse) => httpResponse.json())
      .then((httpResponse) => setResponse(httpResponse))
  }, [])

  return response;
}

export const MoneyTransaction = () => {
  const moneyTransactions = useHTTP("http://localhost:3001/money-transaction")
  const users = useHTTP("http://localhost:3001/user")

  return (
    <ul>
      { moneyTransactions.map((moneyTransaction) => {
        return (
          <li key={moneyTransaction.id}>
            <span>
              DebitorId:
              {users.find((user) => user.id === moneyTransaction.debitorId)?.name }
            </span>
            <span>
              CreditorId:
              {users.find((user) => user.id === moneyTransaction.creditorId)?.name }
            </span>
            <span>Amount: {moneyTransaction.amount}</span>
          </li>
        )
      })}
    </ul>
  )
}
