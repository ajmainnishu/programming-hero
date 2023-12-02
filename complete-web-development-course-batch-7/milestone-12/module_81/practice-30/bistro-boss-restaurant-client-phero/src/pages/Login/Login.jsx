import { Link, useLocation, useNavigate } from 'react-router-dom';
import signImg from '../../assets/images/sign/sign.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';

const Login = () => {
    const { userLogIn } = useContext(AuthContext);
    // login button disable state
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // captcha reload
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    // captcha button
    const handleValidateCaptcha = e => {
        const user_captcha_value = e.target.value;
        if (e.target.value === 'Enter') {
            console.log('hello')
        }
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }
    // login button
    const onSubmit = data => {
        userLogIn(data.email, data.password)
            .then(() => {
                // sweet alert
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1000
                })
                reset();
                // redirect user
                navigate(from, { replace: true });
            })
            .catch(error => toast(error.message));
    }
    return (
        <div className='form-bg'>
            <div className='w-10/12 lg:w-9/12 mx-auto py-28'>
                <div className="hero min-h-screen form-bg pt-10 pb-7" style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}>
                    <div className="hero-content flex-col lg:flex-row">
                        {/* image */}
                        <div className="text-center">
                            <img src={signImg} alt="sign up image" className='lg:w-[600px] w-full' />
                        </div>
                        {/* form */}
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            {/* title */}
                            <h4 className='text-center text-[#151515] font-bold text-[40px]'>Login</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="lg:card-body">
                                {/* email */}
                                <div className="form-control">
                                    <label className="label ps-0">
                                        <span className="text-[#444444] text-xl font-semibold">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="Type here" className="input input-bordered rounded" />
                                    {errors.email && <span className='text-red-600 font-semibold'>Email field is required</span>}
                                </div>
                                {/* password */}
                                <div className="form-control">
                                    <label className="label ps-0">
                                        <span className="text-[#444444] text-xl font-semibold">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered rounded" />
                                    {errors.password && <span className='text-red-600 font-semibold'>Password field is required</span>}
                                </div>
                                {/* captcha */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            <LoadCanvasTemplate />
                                        </span>
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" placeholder="Type here" className="input input-bordered rounded" />
                                </div>
                                {/* button */}
                                <div className="form-control mt-6">
                                    <button disabled={false} className="btn bg-[#D1A054] border-0 capitalize text-white text-xl font-bold">Sign In</button>
                                </div>
                            </form>
                            {/* login page button */}
                            <p className='text-center text-[#D1A054] text-xl font-medium mt-8 lg:mt-0'>New here? <Link to={`/signup`} className='font-bold'>Create a New Account</Link></p>
                            <p className='text-center text-[444444] text-xl font-medium mt-6 mb-4'>Or sign in with</p>
                            {/* social media login */}
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;