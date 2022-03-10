import React from 'react'
import { Button } from './Button'
import { Inputfield } from './Inputfield'
import { Link } from './Link'

export const UserSignUp = () => {
  return (
        <div>
            <Inputfield label="Username" type="text"></Inputfield>
            <Inputfield label="Password" type="password"></Inputfield>
            <Button>Sign Up</Button>
            <Link link="#" name="Sign In"></Link>
        </div>
  )
}
