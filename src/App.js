import React, { useState, useCallback, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'



class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return <h1>An Error occurred</h1>
        }
        return this.props.children
    }
}

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

  const myInputRef = useRef(null)
  useEffect(() => {
    myInputRef.current?.focus()
  }, [myInputRef.current])

  throw new Error()

  return (
    <form onSubmit={onSubmit}>
        <Overlay />
        <input ref={myInputRef} />
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
      <ErrorBoundary>
        <div>
            <MoneyTransactionForm onMoneyTransactionAdd={onMoneyTransactionAdd} />
            <MoneyTransactionList moneyTransactions={moneyTransactions} />
        </div>
      </ErrorBoundary>
  )
}

export default App
