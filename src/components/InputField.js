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
        <input type="number" id={idField} className={`${styles.inputField}`}></input>
  )
}

export const DropdownInput = (idField) => {
  return (
        <select name={idField} id={idField} className={`${styles.inputField}`}>
            <option value="">Select</option>
            <option value="lisa">Lisa</option>
            <option value="vanessa">Vanessa</option>
            <option value="thomas">Thomas</option>
        </select>
  )
}
