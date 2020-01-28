import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar"
import Users from "./components/Users"
import Userpage from "./components/Userpage"
import Spinner from './components/Spinner'

export default class App extends Component {
  state = {
    loading: false,
    input_value: "",
    users: [],
    user: {},
    clearBtn: false
  }

  onChange = e => this.setState({ input_value: e.target.value }) 

  search = async () => {
    this.setState({ loading: true })
    let response = await fetch(`https://api.github.com/search/users?q=${this.state.input_value}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    response = await response.json()
    response = response.items
    if(response !== undefined){
      this.setState({ users: response, loading: false, clearBtn: true, input_value: "" })
    } else {
      this.setState({ loading: false, input_value: "" })
    }
  }

  getSingleUser = async (username) => {
    this.setState({ loading: true })
    let response = await fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    response = await response.json()
    if(response !== undefined){
      this.setState({ user: response, loading: false })
    } else {
      this.setState({ loading: false })
    }
  }

  clear = () => this.setState({ clearBtn: false, users: [] })

  render(){
    let { input_value, clearBtn, users, user, loading } = this.state
    return (
      <Router>
        <Switch>
        <Route exact path="/" render={props => (
          <Fragment>
            <Navbar
              input_value={input_value}
              search={this.search} 
              onChange={this.onChange}
              showClear={clearBtn}
              clear={this.clear}
            />
            {loading 
              ? <Spinner />
              : <Users users={users} />
            }
          </Fragment>
          )} 
        />
        <Route exact path="/user/:login" render={props => (
          <Userpage  
            { ...props }
            getUser={this.getSingleUser}
            user={user}
            loading={loading}
          />
        )} />
        </Switch>
        
      </Router>
    )
  }
}
