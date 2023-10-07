import { Card } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Registration = () => {
    const {createUser, emailNamePhotoUpdate} = useContext(AuthContext);
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(() => {
            // update email name and photo
            emailNamePhotoUpdate(name, photo);
            form.reset();
            toast.success('Email Successfully Registered')
        }) .catch(error => {
            toast.warn(error.message);
        })
    }
    return (
        <div className="bg-light pb-5">
            <Navigation></Navigation>
            <Card className="p-5 w-50 mx-auto mt-5 mb-5">
                <h2 className="text-center mb-4 text-muted">Register your account</h2>
                <hr />
                <Form onSubmit={handleRegistration} className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-semibold text-muted">Your Name</Form.Label>
                        <Form.Control className="bg-light py-2" type="text" name="name" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-semibold text-muted">Photo URL</Form.Label>
                        <Form.Control className="bg-light py-2" type="text" name="photo" placeholder="Enter your photo url" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-semibold text-muted">Email address</Form.Label>
                        <Form.Control className="bg-light py-2" type="email" name="email" placeholder="Enter your email address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-semibold text-muted">Password</Form.Label>
                        <Form.Control className="bg-light py-2" type="password" name="password" placeholder="Enter your password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Term & Conditions" className="text-muted" />
                    </Form.Group>
                    <Button variant="secondary w-100 py-2 mt-2" type="submit">
                        Register
                    </Button>
                </Form>
            </Card>
            <ToastContainer />
        </div>
    );
};

export default Registration;