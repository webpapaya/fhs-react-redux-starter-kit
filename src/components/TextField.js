import React from 'react'
import styles from './TextField.module.css'

export const TextField = ({ label, type }) => {
  return (
    <label className={`${styles.label}`}>
      {label}
      <input type={type} name={label.toLowerCase()} className={`${styles.input}`} />
    </label>
  )
}
