import React, { Component,Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class Userpage extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
  }

  render(){
    const {
      login,
      avatar_url,
      html_url,
      name,
      blog,
      location,
      email,
      bio,
      followers,
      following
    } = this.props.user
    return (
      <div className="single_user_info">
        <div className="single_user_general container">
          <img src={avatar_url} alt="profil picture"/>
          <h2>{name}</h2>
          <h3>@{login}</h3>
          <strong>followers: <span>{followers}</span> </strong>
          <strong>following: <span>{following}</span> </strong>
          {blog ? <a href={blog} target="blank" className="btn btn-secondary">My website</a> : <Fragment />}
        </div>
        <div className="single_user_description">
          <h2>Description</h2>
          <p>{bio}</p>
        </div>
        <div className="single_user_btns">
          <a href={html_url} target="blank" className="btn btn-secondary">Visit Github</a>
          <Link to="/" className="btn btn-primary" >Back to main page</Link>
        </div>
      </div>
    )
  }
}
