import loginPhoto from '../../assets/login/login.svg';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import googleIcon from '../../assets/social_media/google 1.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    // dynamic title
    useTitle('SignUp')
    const { createUser, userInfoUpdate, userFacebookSignIn, userGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    // user create email
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(() => {
                // user name update
                userInfoUpdate(name)
                    .then()
                    .catch()
                // sweet alert
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Sign Up',
                })
                form.reset();
                navigate(from, {replace: true})
            }).catch(error => {
                // react toastify
                toast(error.message);
            })
    }
    // facebook sign in button
    const handleFacebookSignUp = () => {
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
    // linkedin sign in button
    const handleLinkedinSignUp = () => {
        Swal.fire({
            icon: 'error',
            title: 'Coming Soon!!!',
        })
    }
    // google sign in button
    const handleGoogleSignUp = () => {
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
                    <h2 className='text-center text-[#444444] font-semibold text-4xl'>Sign Up</h2>
                    <div className='space-y-7'>
                        {/* form */}
                        <form onSubmit={handleSignUp} className="space-y-7">
                            {/* name */}
                            <div className="form-control space-y-3">
                                <label>
                                    <span className="text-[#444444] text-lg font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            {/* email */}
                            <div className="form-control space-y-3">
                                <label>
                                    <span className="text-[#444444] text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                            </div>
                            {/* password */}
                            <div className="form-control space-y-3">
                                <label>
                                    <span className="text-[#444444] text-lg font-semibold">Confirm Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                            </div>
                            {/* button */}
                            <div className="form-control">
                                <button className="btn border-none bg-[#FF3811] capitalize text-white font-semibold text-xl">Sign Up</button>
                            </div>
                        </form>
                        {/* others sign in button */}
                        <div className='text-center space-y-7'>
                            <p className='text-[#444444] font-medium text-lg'>Or Sign Up with</p>
                            <div className='space-x-4'>
                                {/* facebook button */}
                                <button onClick={handleFacebookSignUp} className="btn btn-circle bg-[#F5F5F8] border-none">
                                    <FaFacebookF className='text-xl text-[#3B5998]' />
                                </button>
                                {/* instagram button */}
                                <button onClick={handleLinkedinSignUp} className="btn btn-circle bg-[#F5F5F8] border-none">
                                    <FaInstagram className='text-xl text-[#0A66C2]' />
                                </button>
                                {/* google button */}
                                <button onClick={handleGoogleSignUp} className="btn btn-circle bg-[#F5F5F8] border-none">
                                    <img src={googleIcon} alt="Google Icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* sign up button */}
                    <p className='text-lg font-normal text-[#737373] text-center'>Have an account? <Link to={`/appointment/login`} className='text-[#FF3811] font-semibold'>Login</Link></p>
                </div>
            </div>
            {/* react toastify */}
            <ToastContainer />
        </div>
    );
};

export default SignUp;