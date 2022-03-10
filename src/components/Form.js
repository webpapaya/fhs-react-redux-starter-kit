import React from 'react'
import styles from './Form.module.css'
import { DecimalInput, DropdownInput, EmailInput, PasswordInput } from './InputField'
import { action } from '@storybook/addon-actions'
import { Button, InfoButton } from './Button'

export const SignIn = () => {
  return (
    <form className={`${styles.form}`}>
      <label htmlFor="email">Email:</label>
      <EmailInput id="email"></EmailInput>
      <label id="password">Password:</label>
      <PasswordInput id="password"></PasswordInput>
      <Button onClick={action('clicked')}>Sign up</Button>
      <InfoButton onClick={action('clicked')}>Sign in</InfoButton>
    </form>
  )
}

export const SignUp = () => {
  return (
    <form className={`${styles.form}`}>
      <label htmlFor="email">Email:</label>
      <EmailInput id="email"></EmailInput>
      <label id="password">Password:</label>
      <PasswordInput id="password"></PasswordInput>
      <Button onClick={action('clicked')}>Sign in</Button>
      <InfoButton onClick={action('clicked')}>Sign up</InfoButton>
    </form>
  )
}

export const CreateEntry = () => {
  return (
    <form className={`${styles.form}`}>
      <div className = "labelInput">
      <label htmlFor="user">User:</label>
      <DropdownInput id="user"></DropdownInput>
      </div>
      <div className = "labelInput">
      <label id="amount">Amount:</label>
      <DecimalInput id="amount"></DecimalInput>
      </div>
      <Button onClick={action('clicked')}>Create</Button>
    </form>
  )
}
