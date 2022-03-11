import React from 'react'
import { Dropdown } from './Dropdown'
import { DecimalInput } from './DecimalInput'
import { Button } from './Button'
import styles from './MoneyTransactionCreate.module.css'

export const MoneyTransactionCreate = ({ users }) => {
  return (
        <form className={`${styles.wrapper}`}>
            <Dropdown options={users} label='User' className={`${styles.column1}`} />
            <DecimalInput label="Label" />
            <Button style='secondary' className={`${styles.column3}`}>Create</Button>
        </form>
  )
}
