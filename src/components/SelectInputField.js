
import React from 'react'
import Select from 'react-select'
import styles from './SelectInputField.module.css'

export const SelectInputField = ({ name, options }) => {
  const optionStyles = {
    option: () => ({
      height: '50px'
    }),
    control: () => ({
      color: 'black',
      border: 'black',
      background: 'none'
    })
  }

  return (
        <label>
            <p className={styles.lableText}>{name}</p>
            <Select styles={optionStyles} options={options}/>
        </label>
  )
}
