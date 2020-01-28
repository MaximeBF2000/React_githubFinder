import React, { Fragment } from 'react'
import spinner from '../spinner.gif'

export default function Spinner() {
  return (
    <Fragment>
      <img 
      src={spinner} 
      alt="loading..."
      style={{ width: "200px", display: "block", margin: "auto" }}
      />
    </Fragment>
  )
}
