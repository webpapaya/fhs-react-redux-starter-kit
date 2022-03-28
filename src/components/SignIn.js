import React, { useState } from 'react'

export const SignIn = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  return (
      <form onSubmit={() => onSubmit({ username })}>
        <input
            name="username"
            onChange={(evt) => setUsername(evt.target.value)}
            value={username}
        />
        <button type="submit">Sign in</button>
      </form>
  )
}
