import React, { useEffect } from 'react'

const UserListOrganism = ({ users, onLoadUsers, onCreateUser }) => {
  useEffect(() => {
    onLoadUsers()
  }, [])

  return (
    <>
      <button
        onClick={() => onCreateUser({ id: 3, name: 'new user'})}
      >
        Create user
      </button>
      <ul>
        { users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UserListOrganism