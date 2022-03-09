import React from 'react'
import { Button } from './Button'
import { SelectInput } from './SelectInput'
import { DecimalInput } from './DecimalInput'
import styles from './MoneyTransactionCreate.module.css'

export const MoneyTransactionCreate = () => {
  return (
    <form className={`${styles.transaction}`}>
      <SelectInput label='User' id='user'></SelectInput>
      <DecimalInput label='Amount' id='amount'></DecimalInput>
      <Button>Create</Button>
    </form>
  )
}
