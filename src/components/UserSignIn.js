import React from 'react'
import { Button } from './Button'
import { Inputfield } from './Inputfield'
import { Link } from './Link'

export const UserSignIn = () => {
  return (
        <div>
            <Inputfield label="Username" type="text"></Inputfield>
            <Inputfield label="Password" type="password"></Inputfield>
            <Button>Sign In</Button>
            <Link link="#" name="Sign Up"></Link>
        </div>
  )
}
