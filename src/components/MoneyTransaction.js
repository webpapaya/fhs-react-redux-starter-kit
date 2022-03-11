import React from 'react'
import { Button } from './Button'
import styles from './MoneyTransaction.module.css'

export const MoneyTransaction = ({ user, amount, paid = false }) => {
  return (
    <>
      <td className={`${paid ? `${styles.paid} ` : ''}`}>{user}</td>
      <td className={`${paid ? `${styles.paid}` : ''} ${styles.alignend}`}>{amount}</td>
      { !paid && <td className={`${styles.alignend} ${styles.button}`}><Button onClick="Paid">Paid</Button></td> }
      { paid && <td></td> }
    </>
  )
}
