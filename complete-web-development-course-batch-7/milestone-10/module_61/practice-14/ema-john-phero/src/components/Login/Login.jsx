import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/';
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('');
        setSuccess('');
        signIn(email, password)
        .then(() => {
            setSuccess('Success');
            form.reset();
            navigate(from, {replace: true});
        }) .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className='login-container'>
            <h4 className="login-heading">Login</h4>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p className='login-register-text'>New to Ema-john? <Link to='/signup'>Create New Account</Link></p>
            <div className='hr'>
                <div className='hr-left'><hr /></div>
                <div className='hr-text'>or</div>
                <div className='hr-right'><hr /></div>
            </div>
            <button className='btn-google'>Continue with Google</button>
            <p>{error}</p>
            <p>{success}</p>
        </div>
    );
};

export default Login;