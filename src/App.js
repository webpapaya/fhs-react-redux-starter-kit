import React, { useState, useCallback } from 'react'
import { createPortal } from 'react-dom'

const Overlay = () => {
  return createPortal(
        <div>My Overlay</div>,
        document.getElementById('overlay')
  )
}

const MoneyTransactionForm = ({ onMoneyTransactionAdd }) => {
  const onSubmit = useCallback((evt) => {
    evt.preventDefault()
    onMoneyTransactionAdd({ id: Math.random(), amount: 10 })
  }, [onMoneyTransactionAdd])

  return (
        <form onSubmit={onSubmit}>
            <Overlay />
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
