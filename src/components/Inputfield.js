import React from 'react'
import styles from './Inputfield.module.css'

export const Inputfield = ({ label, type }) => {
  return (
    <label className={`${styles.label}`}>
      {label}
      <input type={type} name={label.toLowerCase()} className={`${styles.input}`} />
    </label>
  )
}
