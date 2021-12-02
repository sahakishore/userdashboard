import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NotFound from './components/notFound'
import NavBar from './components/navBar'
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'
import Logout from './components/logout'
import auth from './services/authService'
import './App.css'
import Users from './components/users'

const App = () => {
  
  const [user, setUser] = useState({})

  useEffect(() => {
    let user = auth.getCurrentUser()

    setUser(user)
    return user
  },[user])

    return (
      <React.Fragment>
        <NavBar user={user} />

        <div className="container">
          <Switch>
            
            <Route path="/register" component={RegisterForm} />

            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />

            <Route
              path="/users"
              render={props => <Users {...props} user={ user }/>}
            />

            <Route
              path="/dashboard"
              render={props => <Users {...props} user={ user }/>}
            />
  
            <Route path="/not-found" component={NotFound} />

            <Redirect from="/" exact to="/users" />

            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    )
  }


export default App
