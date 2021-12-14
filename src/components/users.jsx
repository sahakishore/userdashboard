import React from 'react'
import { useHistory } from 'react-router-dom'
import Dashboard from './dashboard'

const Users = ({ user }) => {

  let history = useHistory()

  if (!user)
    return (
     history.push("/login")
    )


    return (
        <div className="row">
          {
           !user&&<div>
              Please Login to See your Dashboard
           </div>     
           } 
         <div className="col">
         {user && (
            <Dashboard user={user}/>
         )}
       </div>
     </div> 
    )
}
export default Users