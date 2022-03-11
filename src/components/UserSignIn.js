import React from 'react'
import { Button } from './Button'
import { TextField } from './TextField'
import { Link } from './Link'
import styles from './Basics.module.css'

export const UserSignIn = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <form>
        <TextField label="Email" type="email"></TextField>
        <TextField label="Password" type="password"></TextField>
        <Button>Sign In</Button>
        <Link link="#" name="Sign Up"></Link>
      </form>
    </div>
  )
}
