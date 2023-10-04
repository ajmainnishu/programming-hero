import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const { createUserEmail, updateName, emailVerification } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        // password check
        if (!/(?=.*?[A-Z])/.test(password)) {
            toast("Please at least one uppercase letter");
            return;
        } else if (!/(?=.*?[a-z])/.test(password)) {
            toast("Please at least one lowercase letter");
            return;
        } else if (!/(?=.*?[0-9])/.test(password)) {
            toast("Please at least one number");
            return;
        } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            toast("Please at least one special character");
            return;
        } else if (password.length < 8) {
            toast('Please at least 8 characters');
            return
        } else if (password !== confirmPassword) {
            toast('Password Not Match');
            return;
        }
        // register email function
        createUserEmail(email, password)
            .then((result) => {
                // email name update
                updateName(name);
                // email verification
                emailVerification();
                // input field blank
                form.reset();
                toast("Registration Successful")
            }).catch(error => {
                toast(error.message);
            })
    }



    return (
        <div className='bg-dark py-5'>
            <div className='w-50 border rounded mx-auto my-5 bg-light'>
                <h2 className='text-center pt-4'>Sign Up</h2>
                <Form onSubmit={handleSignUp} className='py-4 px-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" required />
                        <Form.Text className="text-muted">
                            {/* Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character. */}
                            {/* Minimum eight characters, one uppercase, one lowercase, one number, one special character. */}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type={showPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" required />
                        <Form.Text className="text-muted">
                            <p onClick={() => setShowPassword(!showPassword)}><small>{showPassword ? 'Hide Password' : 'Show Password'}</small></p>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p className='text-center pb-4'><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SignUp;