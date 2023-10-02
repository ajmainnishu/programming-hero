import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        setError('');
        setSuccess('');
        if (password !== confirmPassword) {
           setError('Not match');
            return;
        } else if (password.length < 6) {
            setError('please at least 6 characters');
            return;
        }
        createUser(email, password)
        .then(() => {
            setSuccess('Success');
            form.reset();
        }) .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className='login-container'>
            <h4 className="login-heading">Sign Up</h4>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password1" />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" />
                </div>
                <input className='btn-login' type="submit" value="Sign Up" />
            </form>
            <p className='login-register-text'>Already have an account? <Link to='/login'>Login</Link></p>
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

export default SignUp;