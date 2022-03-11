import React from 'react'
import { Button } from './Button'
import { TextField } from './TextField'
import { Link } from './Link'
import styles from './Basics.module.css'

export const UserSignUp = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <form>
        <TextField label="Email" type="email"></TextField>
        <TextField label="Password" type="password"></TextField>
        <Button>Sign Up</Button>
        <Link link="#" name="Sign In"></Link>
      </form>
    </div>
  )
}
