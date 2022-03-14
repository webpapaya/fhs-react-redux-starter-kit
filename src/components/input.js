import React from 'react'
import style from '../styles/input.module.css'

export const Input = ({
  className = '',
  name,
  id,
  isError,
  value,
  onChange,
  ...rest
}) => {
  return (
    <label
      className={`${style.container} ${className} ${
        isError ? style.error : ''
      }`}
      htmlFor={id}
    >
      {name}
      <input {...rest} id={id} name={name} value={value} onChange={onChange} />
      {isError && (
        <span className={style.errorMessage}>{name} cannot be blank</span>
      )}
    </label>
  )
}
