import { useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth/useAuth';

const SocialLogin = () => {
    const { googleLogIn, facebookLogIn, githubLogIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // facebook login button
    const handleFacebook = () => {
        facebookLogIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const userInfo = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        // sweet alert
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        // redirect user
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => toast(error.message));
    }
    // google login button
    const handleGoogle = () => {
        googleLogIn()
            .then((result) => {
                const loggedUser = result.user;
                const userInfo = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        // sweet alert
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        // redirect user
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => toast(error.message));
    }
    // github login button
    const handleGithub = () => {
        githubLogIn()
            .then((result) => {
                const loggedUser = result.user;
                const userInfo = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        // sweet alert
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        // redirect user
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => toast(error.message));
    }
    return (
        <div className='flex gap-11 justify-center'>
            {/* facebook */}
            <button onClick={handleFacebook} className="btn btn-circle btn-outline text-[#444444] text-2xl">
                <FaFacebookF />
            </button>
            {/* google */}
            <button onClick={handleGoogle} className="btn btn-circle btn-outline text-[#444444] text-2xl">
                <FaGoogle />
            </button>
            {/* github */}
            <button onClick={handleGithub} className="btn btn-circle btn-outline text-[#444444] text-2xl">
                <FaGithub />
            </button>
        </div>
    );
};

export default SocialLogin;