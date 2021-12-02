import React, { useEffect } from 'react'
import auth from '../services/authService'

const Logout = () => {
    useEffect(() => {
        auth.logout()
        window.location = "/users"
    },[auth])

    return(null)
}
 
export default Logout