import React from 'react'
import { SelectInputField } from './SelectInputField'
import { Button } from './Button'
import styles from './MoneyTransactionCreate.module.css'

export const MoneyTransactionCreate = () => {
  const users = [
    { value: '1', label: 'Claudia' },
    { value: '2', label: 'Juliane' },
    { value: '3', label: 'Kerstin' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(users)
  }

  return (
        <form onSubmit={handleSubmit} className={styles.transactionForm}>
            <SelectInputField name={'User'} options={users}/>
            <div className={styles.buttonWrapper}>
                <Button isPrimary={true} onClick={handleSubmit}>
                    Create
                </Button>
            </div>
        </form>
  )
}
