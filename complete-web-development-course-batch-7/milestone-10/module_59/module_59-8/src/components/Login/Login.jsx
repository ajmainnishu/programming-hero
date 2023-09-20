import { useRef, useState } from "react";
import {getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth';
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";

const auth = getAuth(app)

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        setError('');
        setSuccess('');
        const password = form.password.value;
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Please add at least two uppercase');
            return;
        } else if (!/(?=.*[!@$&*])/.test(password)) {
            setError('Please add a special character');
            return;
        } else if (password.length < 6) {
            setError('Password must be 6 characters long');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            if (!loggedUser.emailVerified) {
                
            }
            setSuccess('User login successful');
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }
    const handleResetPassword = event => {
        const email =emailRef.current.value;
        if (!email) {
            alert('Please provide your email address to reset password');
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Please check your email');
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }
    return (
        <div className="w-25 mx-auto">
            <h2>Please Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" ref={emailRef} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p><small>Forget Password? Please <button className="btn btn-link" onClick={handleResetPassword}>Reset Password</button></small></p>
            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
            <p className="text-danger">{error}</p>
            <p className="text-success">{success}</p>
        </div>
    );
};

export default Login;