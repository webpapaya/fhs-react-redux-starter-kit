import React from 'react'
import styles from './Form.module.css'
import { DecimalInput, DropdownInput, EmailInput, PasswordInput } from './InputField'
import { action } from '@storybook/addon-actions'
import { FormButton, InfoButton } from './Button'

export const SignIn = () => {
  return (
    <form className={`${styles.form}`}>
      <label htmlFor="email">Email:</label>
      <EmailInput id="email"></EmailInput>
      <label id="password">Password:</label>
      <PasswordInput id="password"></PasswordInput>
      <FormButton onClick={action('clicked')}>Sign in</FormButton>
      <InfoButton href="/SignUp">Sign up</InfoButton>
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
      <FormButton onClick={action('clicked')}>Sign up</FormButton>
      <InfoButton href="/SignIn">Sign in</InfoButton>
    </form>
  )
}

export const CreateEntry = () => {
  return (
    <form className={`${styles.formHorizontal}`}>
      <div className = {`${styles.labelInput}`}>
      <label htmlFor="user">User:</label>
      <DropdownInput id="user"></DropdownInput>
      </div>
      <div className = {`${styles.labelInput}`}>
      <label htmlFor="amount">Amount:</label>
      <DecimalInput id="amount"></DecimalInput>
      </div>
      <button type="submit" className = {`${styles.button}`}>Create</button>
    </form>
  )
}

// const handleSubmit = () => {
//   alert('Create entry');
// }
