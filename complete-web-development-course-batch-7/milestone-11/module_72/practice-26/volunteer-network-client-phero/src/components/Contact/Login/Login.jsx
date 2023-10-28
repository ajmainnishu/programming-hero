import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../../assets/logo/logo.png';
import googleLogo from '../../../assets/images/login/google_logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useTitle from "../../../hooks/useTitle";

const Login = () => {
    // website title dynamic
    useTitle('Login -');
    const { googleLogIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    // google log in button
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(() => {
                // sweetalert
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully LogIn',
                    showConfirmButton: false,
                    timer: 1500
                })
                // redirect after login
                navigate(from, { replace: true })
            }).catch(error => {
                // toastify
                toast(error.message);
            })
    }
    return (
        <div className='pt-11 pb-64 space-y-16 bg-[#F8FAFC]'>
            <Link to={`/`} className=''>
                <img src={logo} className="w-[197px] h-[60px] mx-auto" alt="website logo" />
            </Link>
            <div className='space-y-8 py-36 px-10 md:px-14 border border-[#ABABAB] rounded md:w-[570px] md:mx-auto mx-5 bg-white'>
                <h2 className='text-2xl font-bold text-center text-black'>Login With</h2>
                <div className="space-y-4">
                    {/* google login button */}
                    <Link onClick={handleGoogleLogIn} className="flex btn bg-white rounded-full px-1.5">
                        <img src={googleLogo} alt="" />
                        <button className="font-medium mx-auto text-black text-base">Continue with Google</button>
                    </Link>
                    {/* redirect to register page */}
                    <p className="text-center font-medium text-black">Don’t have an account? <Link to={`/registration`} className="underline text-[#3F90FC]">Create an account</Link></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;