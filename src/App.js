import React from 'react'
import MoneyTransactionList from './containers/money-transaction-list'
import Total from './containers/total'

export default () => {
  return (
    <>
      <Total />
      <MoneyTransactionList minAmount={10} />
    </>
  )
}
