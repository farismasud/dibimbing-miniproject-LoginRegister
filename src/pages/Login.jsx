import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <h1>Login</h1>
                <div className="form-container">
                    <p>Username</p>
                    <input type="text" placeholder="Username"/>
                    <p>Password</p>
                    <input type="password" placeholder="Password"/>  
                    <button>Login</button>
                </div>
                <p>Dont have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login