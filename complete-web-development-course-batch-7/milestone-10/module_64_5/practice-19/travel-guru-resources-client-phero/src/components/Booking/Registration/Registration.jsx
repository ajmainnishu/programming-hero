import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Registration = () => {
    const { createUser, userName, googleSignIn, facebookSignIn } = useContext(AuthContext);
    // email form
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const fName = form.firstName.value;
        const lName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const cPassword = form.confirmPassword.value;
        const fullName = fName + ' ' + lName;
        // password check
        if (password !== cPassword) {
            toast.warn('Password and Confirm Password Not Similar');
            return
        }
        // email name update
        createUser(email, password)
            .then(() => {
                userName(fullName);
                toast.success('Email Successfully Registered');
                form.reset();
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    // facebook button
    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(() => {
                toast.success('Facebook Successfully SignIn')
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    // google button
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success('Google Login Successfully');
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    return (
        <div className="py-24">
            <div className="w-5/12 border-2 mx-auto py-9 px-14 rounded-sm">
                <h2 className="text-2xl font-bold mb-10">Create an account</h2>
                {/* email form */}
                <form onSubmit={handleRegistration}>
                    <input className="input form-control input-bordered mb-8 w-full" type="text" name="firstName" id="" placeholder="First Name" required />
                    <input className="input form-control input-bordered mb-8 w-full" type="text" name="lastName" id="" placeholder="Last Name" required />
                    <input className="input form-control input-bordered mb-8 w-full" type="email" name="email" id="" placeholder="Email" required />
                    <input className="input form-control input-bordered w-full mb-8" type="password" name="password" id="" placeholder="Password" required />
                    <input className="input form-control input-bordered w-full" type="password" name="confirmPassword" id="" placeholder="Confirm Password" required />
                    <button style={{ backgroundColor: '#F9A51A' }} className='btn text-base px-7 py-3 border-0 rounded-md font-medium w-full mt-7 capitalize'>Create an account</button>
                </form>
                <p className="pt-4 text-center font-medium">Already have an account ? <Link to='/booking/login' className="text-yellow-400 underline">Login</Link></p>
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

export default Registration;