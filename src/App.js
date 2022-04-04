import React, { useState, useCallback } from 'react'

const MoneyTransactionForm = ({ onMoneyTransactionAdd }) => {
  const onSubmit = useCallback((evt) => {
    evt.preventDefault()
    onMoneyTransactionAdd({ id: Math.random(), amount: 10 })
  }, [onMoneyTransactionAdd])

  return (
        <form onSubmit={onSubmit}>
            <input />
            <button>Add</button>
        </form>
  )
}

const MoneyTransactionList = ({ moneyTransactions }) => {
  return <>{moneyTransactions.length}</>
}

const App = () => {
  const [moneyTransactions, setMoneyTransactions] = useState([])
  const onMoneyTransactionAdd = useCallback((moneyTransaction) => {
    setMoneyTransactions([...moneyTransactions, moneyTransaction])
  }, [moneyTransactions, setMoneyTransactions])

  return (
        <div>
            <MoneyTransactionForm onMoneyTransactionAdd={onMoneyTransactionAdd} />
            <MoneyTransactionList moneyTransactions={moneyTransactions} />
        </div>
  )
}

export default App
