import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = ({ user }) => {

  // console.log("User from Nav: ", user)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="Login">
        Logo
    </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
    
      
      {!user.name && 
      <React.Fragment>
      <NavLink className="nav-item nav-link" to="/login">
          Login
      </NavLink>
         
      <NavLink className="nav-item nav-link" to="/register">
          Register
      </NavLink>
      </React.Fragment>
      }

          
      {user.name && 
      <React.Fragment>
      <div className="nav-item nav-link">
              {"Hello "+user.name}
      </div>
         
      <NavLink className="nav-item nav-link" to="/logout">
          Logout
      </NavLink>
      </React.Fragment>
      }
      
          
        </div>
      </div>
    </nav>
  )
}
 
export default NavBar