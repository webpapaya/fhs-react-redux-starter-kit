import React, { useState } from 'react'
import { render, fireEvent, cleanup, queryByText } from '@testing-library/react'

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      { children }
    </button>
  )
}

beforeEach(cleanup)
describe('<Button />', () => {
  it('renders given text', () => {
    const givenText = "some text"
    const { container } = render(<Button>{givenText}</Button>)
    expect(queryByText(container, givenText)).toBeTruthy()
  })

  it('renders a button DOM element', () => {
    const givenText = "some text"
    const { container } = render(<Button>{givenText}</Button>)
    expect(container.querySelectorAll('button')).toHaveProperty('length', 1)
  })

  it('WHEN button is clicked, calls onClick handler', () => {
    const givenText = "some text"
    const onClick = jest.fn()

    const { container } = render(<Button onClick={onClick}>{givenText}</Button>)
    fireEvent.click(container.querySelector('button'))

    expect(onClick).toHaveBeenCalledTimes(1)

  })
})

const Assignees = ({ assignees }) => {
  const [displayAll, setDisplayAll] = useState(false)
  const assigneesToDisplay = displayAll
    ? assignees
    : assignees.slice(0, 3)

  return (
    <>
      <ul>
        { assigneesToDisplay.map((assignee) => {
          return (
            <li key={assignee}>{assignee}</li>
          )
        })}
      </ul>
      { assignees.length > 3 && (
        <button onClick={() => setDisplayAll(!displayAll)}>{ displayAll ? 'Show less' : 'Show more' }</button>
      )}
    </>
  )
}

describe('<Assignees />', () => {
  it('when more than 3 assignees given, shows only 3 assignees', () => {
    const assignees = ['Max', 'Sepp', 'David', 'test']
    const { container } = render(<Assignees assignees={assignees} />)
    expect(container.querySelectorAll('li')).toHaveProperty('length', 3)
  })

  it('when more than 3 assignees, display "Show more" button', () => {
    const assignees = ['Max', 'Sepp', 'David', 'test']
    const { container } = render(<Assignees assignees={assignees} />)
    expect(container.querySelector('button')).toHaveProperty('innerHTML', 'Show more')
  })

  it('when show more button is clicked, displays all assignees', () => {
    const assignees = ['Max', 'Sepp', 'David', 'test']
    const { container } = render(<Assignees assignees={assignees} />)
    fireEvent.click(container.querySelector('button'))
    expect(container.querySelectorAll('li')).toHaveProperty('length', assignees.length)
  })

  it('when show more button is clicked, "Show less" button is rendered', () => {
    const assignees = ['Max', 'Sepp', 'David', 'test']
    const { container } = render(<Assignees assignees={assignees} />)
    fireEvent.click(container.querySelector('button'))
    expect(container.querySelector('button')).toHaveProperty('innerHTML', "Show less")
  })

  it('when less than 3 assignees, do not display "Show more" button', () => {
    const assignees = ['Max', 'Sepp']
    const { container } = render(<Assignees assignees={assignees} />)
    expect(container.querySelector('button')).toEqual(null)
  })

  it('when show less button was clicked, shows only 3 assignees', () => {
    const assignees = ['Max', 'Sepp', 'David', 'test']
    const { container } = render(<Assignees assignees={assignees} />)
    fireEvent.click(container.querySelector('button'))
    fireEvent.click(container.querySelector('button'))
    expect(container.querySelectorAll('li')).toHaveProperty('length', 3)
  })

  it('renders given names', () => {
    const assignees = ['Max', 'Sepp', 'David']
    const { container } = render(<Assignees assignees={assignees} />)

    assignees.forEach((assignee) =>
      expect(queryByText(container, assignee)).toBeTruthy())
  })
})

