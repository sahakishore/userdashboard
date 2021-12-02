import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Dashboard = ({user})=> {
    return (
        <>
           <div className="my-md-4 d-flex justify-content-center align-item-conter"><div>Enjoy your Dashboard</div></div> 
           
            <div className="border border-success rounded ">
            <div className="row p-md-1">
             {
               user&&
                    <div className="pl-md-4 col-md-4">
                        <div className="row-md-6">
                            Hello
                        </div>
                        <div className="row-md-6">
                          {`${user.name}`}

                        </div>
                    </div>
            }
            
            {user&&<div className="col-md-4"> Your unique Id: {user._id}</div>}
            
            {user&&<div className="col-md-4"> Your Email: {user.email}</div>}

            </div>
            </div>
        </>
    )
}

export default Dashboard