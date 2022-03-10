import React from 'react'
import { Button } from './Button'
import { Inputfield } from './Inputfield'
import { Link } from './Link'
import styles from './Basics.module.css'

export const UserSignIn = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <form>
        <Inputfield label="Email" type="email"></Inputfield>
        <Inputfield label="Password" type="password"></Inputfield>
        <Button>Sign In</Button>
        <Link link="#" name="Sign Up"></Link>
      </form>
    </div>
  )
}
