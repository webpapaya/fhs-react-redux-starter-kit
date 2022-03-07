/* eslint-disable */

import React from 'react'

const formatIsToday = (date) => {
    if (date === new Date()) {
        return "Today"
    } else {
        return "not today"
    }

}

const Button = ({ disabled = false, backgroundColor }) => {
    return (
        <button disabled={disabled}>{formatIsToday(new Date())}</button>
    )
}

function App () {
  return (
    <div>
        <Button disabled={true} backgroundColor="blue" />
    </div>
  )
}

export default App
