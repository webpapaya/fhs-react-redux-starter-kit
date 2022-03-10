import React from 'react'
import { Button } from './Button'
import { Inputfield } from './Inputfield'
import { Link } from './Link'
import styles from './Basics.module.css'

export const UserSignUp = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <form>
        <Inputfield label="Email" type="email"></Inputfield>
        <Inputfield label="Password" type="password"></Inputfield>
        <Button>Sign Up</Button>
        <Link link="#" name="Sign In"></Link>
      </form>
    </div>
  )
}
