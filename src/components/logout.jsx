import React, { useEffect } from 'react'
import auth from '../services/authService'

const Logout = ({user}) => {
    useEffect(() => {
        auth.logout()
        if(!user)
        window.location = "/login"
    },[auth])

    return(null)
}
 
export default Logout