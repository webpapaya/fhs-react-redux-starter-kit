import React from 'react'
import styles from './Button.module.css'

const Button = ({ disabled }) => {
  return (
      <button disabled={disabled}>
        button
      </button>
  )
}

export default Button
