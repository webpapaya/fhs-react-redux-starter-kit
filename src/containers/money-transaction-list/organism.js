import React from 'react'

const Organism = ({ transactions, total }) => {
  return (
    <>
      <ul>
        { transactions.map((transaction)=> {
          return (
            <li>{JSON.stringify(transaction)}</li>
          )
        })}
      </ul>
    </>
  )
}

export default Organism