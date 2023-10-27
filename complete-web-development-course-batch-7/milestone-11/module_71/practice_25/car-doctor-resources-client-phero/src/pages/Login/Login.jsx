import loginPhoto from '../../assets/login/login.svg';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import googleIcon from '../../assets/social_media/google 1.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const { userSignIn, userFacebookSignIn, userGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    // user sign in
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then(() => {
                // sweet alert
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Sign In',
                })
                // location redirect
                navigate(from, {replace: true})
                form.reset();
            }).catch(error => {
                // react toastify
                toast(error.message);
            })
    }
    // user facebook sign in
    const handleFacebookSignIn = () => {
        userFacebookSignIn()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Sign Up',
                })
            })
            .catch(error => {
                toast(error.message);
            })
    }
    // user linkedin sign in
    const handleLinkedinSignIn = () => {
        Swal.fire({
            icon: 'error',
            title: 'Coming Soon!!!',
        })
    }
    // user google sign in
    const handleGoogleSignIn = () => {
        userGoogleSignIn()
            .then(() => {
                // sweet alert
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Sign Up',
                })
            })
            .catch(error => {
                // react toastify
                toast(error.message);
            })
    }
    return (
        <div className="lg:w-9/12 mx-auto px-5 lg:px-0">
            <div className="hero-content justify-between flex-col lg:flex-row gap-y-20 gap-x-10">
                {/* photo */}
                <div className="lg:w-1/2">
                    <img src={loginPhoto} alt="login photo" />
                </div>
                {/* login form */}
                <div className="card w-full lg:w-1/2 border border-[#D0D0D0] rounded-lg p-10 md:p-20 space-y-12">
                    {/* title */}
                    <h2 className='text-center text-[#444444] font-semibold text-4xl'>Login</h2>
                    <div className='space-y-7'>
                        {/* form */}
                        <form onSubmit={handleLogIn} className="space-y-7">
                            {/* email */}
                            <div className="form-control space-y-3">
                                <label>
                                    <span className="text-[#444444] text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered" />
                            </div>
                            {/* password */}
                            <div className="form-control space-y-3">
                                <label>
                                    <span className="text-[#444444] text-lg font-semibold">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your password" className="input input-bordered" />
                            </div>
                            {/* button */}
                            <div className="form-control">
                                <button className="btn border-none bg-[#FF3811] capitalize text-white font-semibold text-xl">Sign In</button>
                            </div>
                        </form>
                        {/* others sign in button */}
                        <div className='text-center space-y-7'>
                            <p className='text-[#444444] font-medium text-lg'>Or Sign In with</p>
                            <div className='space-x-4'>
                                {/* facebook button */}
                                <button onClick={handleFacebookSignIn} className="btn btn-circle bg-[#F5F5F8] border-none">
                                    <FaFacebookF className='text-xl text-[#3B5998]' />
                                </button>
                                {/* instagram button */}
                                <button onClick={handleLinkedinSignIn} className="btn btn-circle bg-[#F5F5F8] border-none">
                                    <FaInstagram className='text-xl text-[#0A66C2]' />
                                </button>
                                {/* google button */}
                                <button onClick={handleGoogleSignIn} className="btn btn-circle bg-[#F5F5F8] border-none">
                                    <img src={googleIcon} alt="Google Icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* sign up button */}
                    <p className='text-lg font-normal text-[#737373] text-center'>Have an account? <Link to={`/appointment/signUp`} className='text-[#FF3811] font-semibold'>Sign Up</Link></p>
                </div>
            </div>
            {/* react toastify */}
            <ToastContainer />
        </div>
    );
};

export default Login;