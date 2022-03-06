import React from 'react'
import styles from '../styles/Button.module.css'

export const Button = ({ onClick, children }) => {
  console.log(onClick)
  return (
    <button onClick={onClick} className={`${styles.button} ${styles.primary}`}>
      {children}
    </button>
  )
}
