import React from 'react'
import styles from './Button.module.css'

export const Button = ({ onClick, children }) => {
  console.log(onClick)
  return (
  <button onClick={onClick} className={`${styles.button} ${styles.primary}`}>
    {children}
  </button>
  )
}

export const InfoButton = ({ page, children }) => {
  return (
  <a href={page} className={`${styles.button} ${styles.primary} ${styles.info}`}>
    {children}
  </a>
  )
}

export const FormButton = ({ onClick, children }) => {
  console.log(onClick)
  return (
  <button onClick={onClick} className={`${styles.button} ${styles.small}`}>
    {children}
  </button>
  )
}
