import React, { useState, useMemo, useCallback } from 'react'


const UserList = React.memo(({users}) => {
    console.log('test')
    return (
        <ul>
            {users.map((user) => {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    )
})

function App() {
    const [count, setCount] = useState(0)
    const [users] = useState(Array.from({length: 10000}).flatMap((_, idx) => [
        { id: idx, name: 'a', inactive: true },
        { id: idx, name: 'b', inactive: false },
        { id: idx, name: 'c', inactive: true }
    ]))

    // Don't filter in component a new array will be returned on each
    // rerender
    // const activeUsers = users.filter((user) => !user.inactive)

    // Do: Memoize filtering of component
    const activeUsers = useMemo(() =>
        users.filter((user) => !user.inactive),
        [users]
    )


    const forceRerender = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={forceRerender}>Test</button>
            <UserList users={activeUsers} />

        </div>
    )
}

export default App
