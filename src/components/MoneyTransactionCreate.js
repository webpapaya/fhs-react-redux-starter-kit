import React from 'react'
import { SelectInputField } from './SelectInputField'
import { Button } from './Button'
import styles from './MoneyTransactionCreate.module.css'
import { DecimalInput } from './DecimalInput'

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
            <div className={styles.buttonWrapper}>
                <SelectInputField name={'User'} options={users}/>
            </div>
            <div className={styles.buttonWrapper}>
                <DecimalInput name={'Amount'} />
            </div>
            <div className={styles.buttonWrapper}>
                <Button isPrimary={true} onClick={handleSubmit}>
                    Create
                </Button>
            </div>
        </form>
  )
}
