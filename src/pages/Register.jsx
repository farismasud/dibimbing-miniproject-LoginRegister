import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <h1>Register</h1>
                <div className="form-container">
                    <p>Username</p>
                    <input type="text" placeholder="Username" />
                    <p>Password</p>
                    <input type="password" placeholder="Password" />
                    <button>Register</button>
                </div>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;