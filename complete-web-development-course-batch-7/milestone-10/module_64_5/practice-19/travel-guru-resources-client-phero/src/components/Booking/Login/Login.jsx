import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useContext, useRef } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { logIn, passwordReset, googleSignIn, facebookSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const emailRef = useRef('');
    // email login button
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(() => {
                toast.success('Email Login Successfully');
                form.reset();
                navigate(from, { replace: true })
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    // facebook log in button
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(() => {
                toast.success('Facebook Successfully SignIn')
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    // google log in button
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success('Google Login Successfully');
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    // email password reset
    const handleResetPassword = () => {
        passwordReset(emailRef.current.value)
            .then(() => {
                toast.success('Please Check Email');
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    return (
        <div className="py-24">
            <div className="w-5/12 border-2 mx-auto py-9 px-14 rounded-sm">
                <h2 className="text-2xl font-bold mb-10">Login</h2>
                {/* email form */}
                <form onSubmit={handleLogIn}>
                    <input ref={emailRef} className="input form-control input-bordered mb-8 w-full" type="email" name="email" id="" placeholder="Email" required />
                    <input className="input form-control input-bordered w-full" type="password" name="password" id="" placeholder="Password" required />
                    <div className="flex justify-between items-center pt-6 pb-12 font-medium">
                        <p><input type="checkbox" name="" id="" />&nbsp;Remember Me</p>
                        <p onClick={handleResetPassword} className="text-yellow-400 underline cursor-pointer">Forgot Password</p>
                    </div>
                    <button style={{ backgroundColor: '#F9A51A' }} className='btn text-base px-7 py-3 border-0 rounded-md font-medium w-full capitalize'>Login</button>
                </form>
                <p className="pt-4 text-center font-medium">Don't have an account ? <Link to='/booking/registration' className="text-yellow-400 underline">Create an account</Link></p>
            </div>
            <div className="flex items-center justify-center py-9">
                <hr className="w-52 mr-3" />
                Or
                <hr className="w-52 ml-3" />
            </div>
            {/* facebook button */}
            <div onClick={handleFacebookSignIn} className="flex items-center border w-4/12 mx-auto py-1 px-1 bg-white font-medium rounded-full cursor-pointer mb-2.5">
                <FaFacebook className="text-4xl text-blue-500" />
                <button className="mx-auto">Continue with Facebook</button>
            </div>
            {/* google button */}
            <div onClick={handleGoogleSignIn} className="flex items-center border w-4/12 mx-auto py-1 px-1 bg-white font-medium rounded-full cursor-pointer">
                <FaGoogle className="text-4xl text-black" />
                <button className="mx-auto">Continue with Google</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;