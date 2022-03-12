import React from 'react'
import styles from './InputField.module.css'

export const EmailInput = (idField) => {
  return (
        <input type="text" id={idField} className={`${styles.inputField}`}></input>
  )
}

export const PasswordInput = (idField) => {
  return (
        <input type="password" id={idField} className={`${styles.inputField}`}></input>
  )
}

export const TextInput = (idField) => {
  return (
        <input type="text" id={idField} className={`${styles.inputField}`}></input>
  )
}

export const DecimalInput = (idField) => {
  return (
        <input type="number" id={idField} className={`${styles.inputField} ${styles.decimal}`}></input>
  )
}

export const DropdownInput = (idField) => {
  const users = [
    {
      id: 1,
      name: 'Hansi',
      amount: 10.45,
      paid: true
    },
    {
      id: 2,
      name: 'Heidi',
      amount: 10.45,
      paid: false
    },
    {
      id: 3,
      name: 'Marianne',
      amount: 10.45,
      paid: false
    }
  ]
  return (
        <select name={idField} id={idField} className={`${styles.inputField}`}>
          <option value="">Select</option>
          {users.map((user) => {
            return (
              <option key = {user.id} value={`${user.name}`}>{user.name}</option>
            )
          })}
        </select>
  )
}
