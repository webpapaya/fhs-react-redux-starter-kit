import React, { useState } from 'react'

export const Assignees = ({ assignees }) => {
  const [showAllAssignees, setShowAllAssignees] = useState(false)

  const assigneesToDisplay = showAllAssignees
    ? assignees
    : assignees.slice(0, 3)

  return (
      <>
        { assigneesToDisplay.map((name) => {
          return (<li key={name}>{name}</li>)
        })}
        { assignees.length > 3 && (
            <button onClick={() => setShowAllAssignees(true)}>
              Show more
            </button>
        ) }

        { showAllAssignees && (
          <button data-testid="showLessButton">
            Show less
          </button>
        ) }
      </>
  )
}
