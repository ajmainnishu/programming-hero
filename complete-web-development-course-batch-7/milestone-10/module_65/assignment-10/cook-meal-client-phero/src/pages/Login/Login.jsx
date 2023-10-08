import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const { logIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(() => {
                toast.success("Email login successful");
                navigate(from, {replace: true});
                form.reset();
            }).catch(error => {
                toast.warn(error.message);
            })

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Google login successful");
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => {
                toast.success("Github login successful");
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="py-6">
                            <button onClick={handleGoogleSignIn} className='btn btn-primary w-full mb-3'>Google</button>
                            <button onClick={handleGithubSignIn} className='btn btn-success w-full'>Github</button>
                        </div>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">Don't have an account? Please Register</Link>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;