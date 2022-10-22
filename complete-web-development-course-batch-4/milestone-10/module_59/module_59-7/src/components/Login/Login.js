import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'





const Login = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation()
    console.log('came from', location.state?.from)
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>
                <div>--------or--------</div>
                <button className="btn-regular" onClick={signInUsingGoogle}>Google Sign in</button>
            </div>
        </div>
    );
};





export default Login;