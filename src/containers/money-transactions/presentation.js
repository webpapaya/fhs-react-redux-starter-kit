import React, { useEffect, useState } from 'react'

export const MoneyTransaction = ({ moneyTransactions, users, onLoadData }) => {
  useEffect(() => { onLoadData() }, [])

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
