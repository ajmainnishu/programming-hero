import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const { createUser, googleSignIn, githubSignIn, updateUserinfo } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoURL.value;
        if (password < 6) {
            toast.warn('Password should at least 6 characters');
            return;
        }
        createUser(email, password)
            .then(() => {
                updateUserinfo(name, photoUrl)
                    .then()
                    .catch()
                toast.success("Email Registration successful");
                form.reset();
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Google Registration successful");
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(() => {
                toast.success("Github Registration successful");
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <div className="py-6">
                            <button onClick={handleGoogleSignIn} className='btn btn-primary w-full mb-3'>Google</button>
                            <button onClick={handleGithubSignIn} className='btn btn-success w-full'>Github</button>
                        </div>
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photo url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;