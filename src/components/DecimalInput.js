import React from 'react'
import styles from './DecimalInput.module.css'

export const DecimalInput = ({ label }) => {
  return (
    <label className={`${styles.label}`}>
      {label}
      <input type="number" step=".01" name={label.toLowerCase()} className={`${styles.input}`} />
    </label>
  )
}
