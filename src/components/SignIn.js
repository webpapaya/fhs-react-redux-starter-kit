import React, { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'

import styles from '../styles/SignIn.module.css'

export const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form className={styles.signinContainer}>
      <Input
        name="Username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        name="Password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button type="submit">Sign In</Button>
    </form>
  )
}
