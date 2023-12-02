import { Link, useNavigate } from 'react-router-dom';
import signImg from '../../assets/images/sign/sign.png';
import './SignUp.css';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const { createUser, userProfileUpdate } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // fom submit
    const onSubmit = data => {
        // user create
        createUser(data.email, data.password)
            .then(() => {
                // user name update
                userProfileUpdate(data.name)
                    .then(() => {
                        const userInfo = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    // sweet alert
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Create Account Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    reset();
                                    // redirect to homepage
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => toast(error.message))
            })
            .catch(error => toast(error.message))
    };
    return (
        <div className='form-bg'>
            <div className='w-10/12 lg:w-9/12 mx-auto py-32'>
                <div className="hero min-h-screen form-bg pt-14 pb-24" style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)' }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        {/* image */}
                        <div className="text-center">
                            <img src={signImg} alt="sign up image" className='lg:w-[600px] w-full' />
                        </div>
                        {/* form */}
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            {/* title */}
                            <h4 className='text-center text-[#151515] font-bold text-[40px] md:mb-6'>Sign Up</h4>
                            <form onSubmit={handleSubmit(onSubmit)} className="lg:card-body">
                                {/* name */}
                                <div className="form-control">
                                    <label className="label ps-0">
                                        <span className="text-[#444444] text-xl font-semibold">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered rounded" />
                                    {errors.name && <span className='text-red-600 font-semibold'>Name field is required</span>}
                                </div>
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
                                {/* button */}
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn bg-[#D1A054] border-0 capitalize text-white text-xl font-bold" value="Sign Up" />
                                </div>
                            </form>
                            {/* login page button */}
                            <p className='text-center text-[#D1A054] text-xl font-medium mt-8 lg:mt-0'>Already registered? <Link to={`/login`} className='font-bold'>Go to log in</Link></p>
                            <p className='text-center text-[444444] text-xl font-medium mt-6 mb-8'>Or sign up with</p>
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

export default SignUp;