import { Link } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState } from "react";

const Login = () => {
    // display user info
    const [user, setUser] = useState('');
    const auth = getAuth(app);
    // email field info
    const emailRef = useRef();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // sign in email button
    const handleSignInEmail = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // password checking
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.warning("Please add at least one uppercase in your password", {
                autoClose: 3000,
            })
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            toast.warning("Please add at least one number in your password", {
                autoClose: 3000,
            })
            return;
        } else if (password.length < 6) {
            toast.warning("Please add at least 6 characters in your password", {
                autoClose: 3000,
            })
            return;
        }
        // sign in email
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            toast.success("Sign In Successful", {
                autoClose: 1000,
            })
            setUser(result.user)
            event.target.reset();
        })
        .catch(error => {
            toast.warning(error.message, {
                autoClose: 3000,
            })
        })
    }
    // email password reset button
    const handleResetPasswordEmail = () => {
        const email = emailRef.current.value;
        if(!email) {
            toast.warning("Please provide your email address to reset password", {
                autoClose: 3000,
            })
        }
        // send email to reset password
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success("Please Check your Email", {
                autoClose: 1000,
            })
        })
        .catch(error => {
        })
    }
    // sign in by google using localhost
    const handleSignUpGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success("Registered", {
                    autoClose: 1000,
                })
            })
            .catch(error => {
                toast.warning(error.message, {
                    autoClose: 3000,
                })
            })
    }
    // sign in by github using localhost
    const handleSignUpGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                toast.success("Registered", {
                    autoClose: 1000,
                })
            })
            .catch(error => {
                toast.warning(error.message, {
                    autoClose: 3000,
                })
            })
    }
    // email sign out button
    const handleSignOutEmail = () => {
        signOut(auth)
        .then(() => {
            toast.success("Sign Out Successful", {
                autoClose: 1000,
            })
            setUser('');
        })
        .catch(error => {
            toast.warning(error.message, {
                autoClose: 3000,
            })
        })
    }
    return (
        <div className="w-50 mx-auto border p-4 rounded-3 mt-5 mb-3 bg-light">
            <form onSubmit={handleSignInEmail}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                {/* emain sing in button and sign out button */}
                {
                    user ? <button onClick={handleSignOutEmail} type="submit" className="btn btn-primary me-3">Sign Out Email</button> : 
                    <button type="submit" className="btn btn-primary me-3">Sign In Email</button>
                }
            </form>
            <div className="mt-3">
                <button onClick={handleSignUpGoogle} type="submit" className="btn btn-primary me-3">Sign Up Google</button>
                <button onClick={handleSignUpGithub} type="submit" className="btn btn-primary">Sign Up Github</button>
            </div>
            <p className="pt-4 text-center"><small>Forgot Password ? Please <Link onClick={handleResetPasswordEmail}>Reset</Link></small></p>
            <p className="pt-1 text-center"><small>Already haven't an account ? Please <Link to='/register'>Register</Link></small></p>
            <ToastContainer />
            {/* display person info */}
            {
                user && <div className="text-center border p-3 rounded-5">
                    <h4>Name: {user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;