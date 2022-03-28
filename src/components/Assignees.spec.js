import React from 'react'
import ReactDOM from 'react-dom'
import { Assignees } from './Assignees'
import { fireEvent, queryByText } from '@testing-library/react'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

const shortAssigneeList = ['Mike', 'Sepp', 'Maria']
const longAssigneeList = ['Mike', 'Sepp', 'Maria', 'Ford']

it('when a list is given, it should display all items', () => {
  ReactDOM.render(<Assignees assignees={shortAssigneeList}/>, container)

  expect(queryByText(container, shortAssigneeList[0])).toBeTruthy()
  expect(queryByText(container, shortAssigneeList[1])).toBeTruthy()
  expect(queryByText(container, shortAssigneeList[2])).toBeTruthy()
})

it('when a list with more than 3 assignees is given, it should only display 3', () => {
  ReactDOM.render(<Assignees assignees={longAssigneeList}/>, container)

  expect(container.querySelectorAll('li')).toHaveProperty('length', 3)
})

it('when list has more than 3 assignees, "show more" button should be shown', () => {
  ReactDOM.render(<Assignees assignees={longAssigneeList}/>, container)

  expect(queryByText(container, 'Show more')).toBeTruthy()
})

it('when the show more button is clicked, then all assignees should be displayed', () => {
  ReactDOM.render(<Assignees assignees={longAssigneeList}/>, container)

  fireEvent.click(queryByText(container, 'Show more'))

  expect(container.querySelectorAll('li'))
    .toHaveProperty('length', longAssigneeList.length)
})

it('when show more button was clicked, then show less button is displayed', () => {
  ReactDOM.render(<Assignees assignees={longAssigneeList}/>, container)

  fireEvent.click(queryByText(container, 'Show more'))

  expect(queryByText(container, 'Show less')).toBeTruthy()
})

it('when less than 4 assignees are given, then show less button is not shown', () => {
  ReactDOM.render(<Assignees assignees={shortAssigneeList}/>, container)

  expect(queryByText(container, 'Show less')).toBeFalsy()
})
