import { Link } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import app from "../../firebase/firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // sign up email button
    const handleSignUpEmail = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
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
        // email registration
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                // email verification
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    toast.success("Please Check your Email", {
                        autoClose: 1000,
                    })
                })
                .catch(error => {
                    toast.warning(error.message, {
                        autoClose: 3000,
                    })
                })
                // email person name update
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch(error => {
                        toast.warning(error.message, {
                            autoClose: 3000,
                        })
                    })
                // form field empty
                event.target.reset();
                toast.success("Email Registered", {
                    autoClose: 1000,
                })
            })
            .catch(error => {
                toast.warning(error.message, {
                    autoClose: 3000,
                })
            })

    }
    // google sign up button
    const handleSignUpGoogle = () => {
        // sign up by google using localhost
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
    // github sign up button
    const handleSignUpGithub = () => {
        // sign up by github using localhost
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
    return (
        <div className="w-50 mx-auto border p-4 rounded-3 mt-5 mb-3 bg-light">
            <form onSubmit={handleSignUpEmail}>
                {/* name field */}
                <div className="mb-3">
                    <label htmlFor="exampleInputText1" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" id="exampleInputText1" aria-describedby="textHelp" required />
                </div>
                {/* email field */}
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                {/* password field */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <button type="submit" className="btn btn-primary me-3">Sign Up Email</button>
            </form>
            <div className="mt-3">
                <button onClick={handleSignUpGoogle} type="submit" className="btn btn-primary me-3">Sign Up Google</button>
                <button onClick={handleSignUpGithub} type="submit" className="btn btn-primary">Sign Up Github</button>
            </div>
            <p className="pt-3 text-center"><small>Already have an account ? Please <Link to='/'>Login</Link></small></p>
            <ToastContainer />
        </div>
    );
};

export default Register;