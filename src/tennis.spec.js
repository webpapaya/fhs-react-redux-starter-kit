import { render, queryByText, cleanup, fireEvent } from '@testing-library/react'
import { useState } from 'react'

const Button = ({ children, onClick, disabled }) => {
  return (
    <button onClick={() => {
      if (!disabled) { onClick() }
    }}
    >
      {children}
    </button>
  )
}

afterEach(cleanup)
describe('button', () => {
  it('renders given text', () => {
    const text = 'hallo'
    const { container } = render(<Button>{text}</Button>)
    expect(queryByText(container, text)).toBeTruthy()
  })

  it('renders as button', () => {
    const text = 'hallo'
    const { container } = render(<Button>{text}</Button>)
    expect(container.querySelector('button')).toBeTruthy()
  })

  it('when button was clicked, onClick handler was called', () => {
    const onClick = jest.fn()
    const { container } = render(<Button onClick={onClick}>hallo</Button>)
    fireEvent.click(container.querySelector('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('when button was disabled and clicked, onClick handler was not called', () => {
    const onClick = jest.fn()
    const { container } = render(<Button onClick={onClick} disabled>hallo</Button>)
    fireEvent.click(container.querySelector('button'))
    expect(onClick).toHaveBeenCalledTimes(0)
  })
})

it('renders given text', () => {
  const text = 'hallo'
  const { container } = render(<Button>{text}</Button>)
  expect(queryByText(container, text)).toBeTruthy()
})

const Assignees = ({ assignees }) => {
  const [showAll, setShowAll] = useState(false)
  const assigneesToDisplay = showAll
    ? assignees
    : assignees.slice(0, 3)

  return (
    <>
      <ul>
        {assigneesToDisplay.map((assignee) => {
          return (
            <li key={assignee}>
              {assignee}
            </li>
          )
        })}
      </ul>
      {assignees.length > 3 && (
        <Button onClick={() => setShowAll(true)}>
          {showAll ? 'Show less' : 'Show more'}
        </Button>
      )}
    </>
  )
}

it('all given names are displayed', () => {
  const assignees = ['Mike', 'Sepp', 'Dave']
  const { container } = render(<Assignees assignees={assignees} />)

  expect(queryByText(container, assignees[0])).toBeTruthy()
  expect(queryByText(container, assignees[1])).toBeTruthy()
  expect(queryByText(container, assignees[2])).toBeTruthy()
})

it('with more than 3 assignees, display `show more` button', () => {
  const assignees = ['Mike', 'Sepp', 'Dave', 'Alex', 'Lucy']
  const { container } = render(<Assignees assignees={assignees} />)
  const text = 'Show more'
  expect(queryByText(container, text)).toBeTruthy()
})

it('with more than 3 assignees, only show 3 names', () => {
  const assignees = ['Mike', 'Sepp', 'Dave', 'Alex', 'Lucy']
  const { container } = render(<Assignees assignees={assignees} />)
  expect(container.querySelectorAll('li')).toHaveProperty('length', 3)
})

it('with more than 3 assignees and the show more button was clicked, display all assignees', () => {
  const assignees = ['Mike', 'Sepp', 'Dave', 'Alex', 'Lucy']
  const { container } = render(<Assignees assignees={assignees} />)
  fireEvent.click(queryByText(container, 'Show more'))
  expect(container.querySelectorAll('li')).toHaveProperty('length', assignees.length)
})

it('with more than 3 assignees and the show more button was clicked, display `show less` button', () => {
  const assignees = ['Mike', 'Sepp', 'Dave', 'Alex', 'Lucy']
  const { container } = render(<Assignees assignees={assignees} />)
  fireEvent.click(queryByText(container, 'Show more'))
  expect(queryByText(container, 'Show less')).toBeTruthy()
})
