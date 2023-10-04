import { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    // Auth Context
    const { logIn, passwordReset } = useContext(AuthContext);
    // show and hide button state
    const [showPassword, setShowPassword] = useState(false);
    // get email input field value
    const emailRef = useRef();
    // use go another page hook
    const navigate = useNavigate();
    const location = useLocation();
    // location path
    const redirect = location.state?.from?.pathname || '/'
    // log in button
    const handleLogIn = event => {
        // form refresh
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(() => {
                // input value blank
                form.reset();
                // page redirect
                navigate(redirect, { replace: true });
                // toastify
                toast("Login Successful");
            }).catch(error => {
                toast(error.message)
            })
    }
    // password reset button
    const handlePasswordReset = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (!email) {
            toast("Please Enter Email");
            return;
        }
        // password reset function
        passwordReset(email)
            .then(() => {
                toast("Password Reset Successful, Please Check Email")
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className='bg-dark py-5'>
            <div className='w-50 border rounded mx-auto my-5 bg-light'>
                <h2 className='text-center pt-4'>Log In</h2>
                <Form onSubmit={handleLogIn} className='py-4 px-5'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" ref={emailRef} name="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={showPassword ? "text" : "password"} name="password" placeholder="Password" required />
                        <Form.Text className="text-muted">
                            <p onClick={() => setShowPassword(!showPassword)}><small>{showPassword ? <span>Hide Password</span> : <span>Show Password</span>}</small></p>
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
                <p className='text-center'><small>Forget Password? <Link onClick={handlePasswordReset}>Reset</Link></small></p>
                <p className='text-center pb-4'><small>New to this website? Please <Link to='/signup'>Sign Up</Link></small></p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;