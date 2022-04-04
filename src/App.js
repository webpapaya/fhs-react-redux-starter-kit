import React, { useState } from 'react'


const UserList = React.memo(({users}) => {
    return (
        <ul>
            {users.map((user) => {
                return <li>{user}</li>
            })}
        </ul>
    )
})

function App() {
    const [state, setState] = useState({ users: ['a', 'b', 'c'] })
    const onUpdateUser = () => {
        // Don't push to state.users
        state.users.push('d')

        // Do spread users and create new array
        setState({ ...state, users: [...state.users, 'd'] })
    }

    return (
        <div>
            <UserList users={state.users} />
            <button onClick={onUpdateUser}>Test</button>
        </div>
    )
}

export default App
