import React, { Fragment } from 'react'
import User from './User'

export default function Users({ users, clearable }) {
  if(users !== undefined){
    return (
      <div className="containerBlock">
        { users.map( user => <User user={user} key={user.id}/> ) }
      </div>
    )
  } else {
    return <Fragment />
  }
}
