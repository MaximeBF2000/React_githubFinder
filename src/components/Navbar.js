import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ input_value, search, clear, onChange, showClear }) {
  return (
    <nav className="container">
      <h1>Github Finder</h1>
      <input type="text" value={input_value} onChange={onChange} />
      <button className="btn btn-primary" onClick={search}>Search</button>
      {showClear 
      ? <button className="btn btn-secondary" onClick={clear}>Clear</button>
      : <Fragment />
      }
    </nav>
  )
}
