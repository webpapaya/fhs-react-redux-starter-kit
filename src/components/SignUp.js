import React from 'react'

const Input = ({ type, label }) => {
  return (
    <label>
      { label }
      <input type={type} />
    </label>
  )
}

const SignUp = () => {
  return (
    <div>
      <Input type="password" label="Password" />
    </div>
  )
}

export default SignUp
