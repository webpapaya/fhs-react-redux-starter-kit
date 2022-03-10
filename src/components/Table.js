import React from 'react'
// import styles from "./Table.module.css";
import { Button } from './Button'

export const Table = (idField) => {
  return (
        <table id={idField}>
            <tr>
                <td>A user</td>
                <td>10€ </td>
                <td><Button>Paid</Button></td>
            </tr>
            <tr>
                <td>A user</td>
                <td>10€ </td>
                <td><Button>Paid</Button></td>
            </tr>
            <tr>
                <td>A user</td>
                <td>10€ </td>
                <td><Button>Paid</Button></td>
            </tr>
            <tr>
                <td>A user</td>
                <td>10€ </td>
                <td><Button>Paid</Button></td>
            </tr>
        </table>
  )
}
