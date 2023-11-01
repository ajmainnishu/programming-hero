import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { userLogIn, userGoogleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // email login button
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogIn(email, password)
            .then(() => {
                // toast notification
                toast('Successfully Login');
                // redirect page
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                toast(error.message);
            })
    }
    // google log in button
    const handleGoogleLogIn = () => {
        userGoogleLogIn()
            .then(() => {
                toast('Successfully Login');
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast(error.message);
            })
    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            {/* form button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {/* google button */}
                        <button onClick={handleGoogleLogIn} className="btn rounded-full mx-auto mb-5">Google</button>
                        {/* registration page redirect */}
                        <button className="pb-5">Don&apos;t have an account? <Link to={`/registration`} className="text-blue-600 font-semibold">Registration</Link></button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;