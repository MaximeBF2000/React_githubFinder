import React from 'react'
import { Link } from 'react-router-dom'

export default function User({ user }) {
  return (
    <div className="user container">
      <img src={user.avatar_url} alt={`${user.login}'s profil picture`} />
      <h2>{user.login}</h2>
      <Link to={`/user/${user.login}`} className="btn btn-primary">More infos</Link>
      <a href={user.html_url} className="btn btn-secondary" target="blank">Visit Github</a>
    </div>
  )
}
