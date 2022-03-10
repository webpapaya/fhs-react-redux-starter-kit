import React from 'react'

export const Inputfield = ({ label, type }) => {
  return (
    <label>
      {label}:
      <input type={type} name={label.toLowerCase()} />
    </label>
  )
}
