import React from 'react'
import { Redirect } from 'react-router'
import Joi from 'joi-browser'
import Form from './common/form'
import auth from '../services/authService'

class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    
    doSubmit = async () => {

        try {
            const { data } = this.state
            await auth.login(data.username, data.password)

            const { state } = this.props.location
            window.location = state ? state.from.pathname : "/dashboard"
        } catch (ex) {
            if (ex.response && ex.response.status === 400){
                const errors = { ...this.state.errors }
                errors.username=ex.response.data
                this.setState({ errors })
            }
            
        }
 
    }
    
    
    render() {
        if (auth.getCurrentUser()) return <Redirect to="/dashboard" />

       return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>

                    {/* for username type is default , that is text */}

                    {this.renderInput('username', 'Email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton("Login")}
               </form>
            </div>
        )
    }
}

export default LoginForm