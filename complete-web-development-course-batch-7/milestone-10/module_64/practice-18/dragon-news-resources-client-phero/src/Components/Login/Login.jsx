import { Card } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
        .then(() => {
            form.reset()
            toast.success('login Successfully')
            navigate(from, {replace: true})
        }) .catch(error => {
            toast.warn(error.message)
        })
    }
    return (
        <div className="bg-light pb-5">
            <Navigation></Navigation>
            <Card className="p-5 w-50 mx-auto mt-5 mb-5">
                <h2 className="text-center mb-4 text-muted">Login your account</h2>
                <hr />
                <Form onSubmit={handleLogIn} className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-semibold text-muted">Email address</Form.Label>
                        <Form.Control className="bg-light py-2" type="email" name="email" placeholder="Enter your email address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-semibold text-muted">Password</Form.Label>
                        <Form.Control className="bg-light py-2" type="password" name="password" placeholder="Enter your password" />
                    </Form.Group>
                    <Button variant="secondary w-100 py-2 mt-2" type="submit">
                        Login
                    </Button>
                </Form>
                <p className="text-center pt-4">Don't Have An Account ? <Link to='/registration' className="text-decoration-none" style={{color: "#FF8C47"}}>Register</Link></p>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default Login;