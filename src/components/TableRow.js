import React from 'react'
import styles from './TableRow.module.css'

export const TableRow = ({ userName }) => {
  return (
        <div className={styles.rowWrapper}>
            <p className={styles.lableText}>{userName}</p>
        </div>
  )
}
