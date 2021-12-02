import React from 'react'
import Dashboard from './dashboard'

const Users = ({user}) => {
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