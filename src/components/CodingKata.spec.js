import React, { useState } from 'react'
import { render, cleanup, queryByText, fireEvent } from '@testing-library/react'

// - You're building an issue tracking system
// - Build a component which displays the names of assignees
//   - eg. `<Assignees assignees={['Mike', 'Sepp', 'David']} />`
//   - build a simple ul
// - WITH more than 3 assigness,
//   - only display 3 assignees
//   - display a show more button
// - WHEN the show more button was clicked
//   - display all assignees
//   - a show less button is displayed instead of a show more button
//   - AND the show less button was clicked, only displays 3 assignees
// - WITH less than 4 assignees,
//   - don't display a "show more" button





const Assignees = ({ assignees, assigneesToDisplay = (assignees) => assignees  }) => {
  const [showAll, setShowAll] = useState(false)
  const assigneesDisplayed = showAll
    ? assignees
    : assigneesToDisplay(assignees)

  return (
    <>
      <ul>
        {assigneesDisplayed.map((assignee) => (
          <li key={assignee} data-test="assignee">
              {assignee}
          </li>
        ))}
      </ul>
      <button onClick={() => setShowAll(true)}>Show more</button>
    </>
  )
}

afterEach(cleanup)
describe('Assignees', () => {
  it('WHEN 3 assigness given, renders all', () => {
    const { container } = render(<Assignees 
      assignees={['Mike', 'Sepp', 'David']} 
    />)

    expect(queryByText(container, 'Mike')).toBeTruthy()
    expect(queryByText(container, 'Sepp')).toBeTruthy()
    expect(queryByText(container, 'David')).toBeTruthy()
  })

  it('uses assigneesToDisplay', () => {
    const { container } = render(<Assignees 
      assignees={['Mike', 'Sepp', 'David', 'Max']} 
      assigneesToDisplay={() => ['MIKE', 'SEPP', 'DAVID']} 
      />
    )

    expect(queryByText(container, 'MIKE')).toBeTruthy()
    expect(queryByText(container, 'SEPP')).toBeTruthy()
    expect(queryByText(container, 'DAVID')).toBeTruthy()
  })

  it('WHEN more button was clicked, renders all', () => {
    const assigneesDisplayed = jest.fn(() => ['test'])
    

    const { container } = render(<Assignees 
        assignees={['Mike', 'Sepp', 'David', 'Max']} 
        assigneesToDisplay={assigneesDisplayed} 
      />
    )
    fireEvent.click(queryByText(container, 'Show more'))

    expect(assigneesToDisplay).wasCalledWith([true])

    expect(queryByText(container, 'Mike')).toBeTruthy()
    expect(queryByText(container, 'Sepp')).toBeTruthy()
    expect(queryByText(container, 'David')).toBeTruthy()
    expect(queryByText(container, 'Max')).toBeTruthy()
  })
})


