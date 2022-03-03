import React from 'react'
import styles from './Button.module.css'

export const Button = ({ onClick, children }) => (
  <button onClick={onClick} className={`${styles.button} ${styles.primary}`}>
    {children}
  </button>
)
