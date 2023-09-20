import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import app from "../../firebase/firebase.init";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const auth = getAuth(app)

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return;
        } else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                setSuccess('User has been created successfully');
                sendVerificationEmail(loggedUser);
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
        const sendVerificationEmail = user => {
            sendEmailVerification(auth, user)
            .then(result => {
                console.log(result);
                alert('Please verify your email address');
            })
        }
    }
    return (
        <div className="w-50 mx-auto">
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input className="w-50 mb-4 rounded ps-2" type="email" name="email666" id="email" placeholder="Your Email" required />
                <br />
                <input className="w-50 mb-4 rounded ps-2" type="password" name="password" id="password" placeholder="Your Password" required />
                <br />
                <input className="btn btn-primary" type="submit" value="Register" />
            </form>
            <p><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Register;