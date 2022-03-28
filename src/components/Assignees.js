import React, { useState } from 'react'

const LIMIT = 3

export const Assignees = ({ assignees }) => {
  const [allShown, setAllShown] = useState(false)
  const displayedAssignees = allShown
    ? assignees
    : assignees.slice(0, LIMIT)

  const shouldDisplayButton = assignees.length > LIMIT

  return (
      <>
        <ul>
          { displayedAssignees.map((assignee) => {
            return <li key={assignee}>{assignee}</li>
          })}
        </ul>
        { shouldDisplayButton && !allShown && (
            <button onClick={() => setAllShown(true)}>
              Show more
            </button>
        ) }
        { shouldDisplayButton && allShown && (
            <button onClick={() => setAllShown(false)}>
              Show less
            </button>
        ) }
      </>
  )
}
