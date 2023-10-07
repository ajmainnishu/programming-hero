import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import Nav from 'react-bootstrap/Nav';

const Contact = () => {
    const { createGoogleUser, createGithubUser } = useContext(AuthContext);
    const handleGoogle = () => {
        createGoogleUser()
            .then(() => {
                toast.success('Successful');
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    const handleGithub = () => {
        createGithubUser()
            .then(() => {
                toast.success('Successful');
            }).catch(error => {
                toast.warn(error.message);
            })
    }
    return (
        <div>
            <div>
                <h5>Login With</h5>
                <Link><button onClick={handleGoogle} className="btn btn-outline-primary w-100 mb-2 mt-2"><small><FaGoogle />&nbsp;Login with Google</small></button></Link>
                <Link><button onClick={handleGithub} className="btn btn-outline-secondary w-100"><small><FaGithub />&nbsp;Login with Github</small></button></Link>
            </div>
            <div>
                <h5 className="mb-3 mt-5">Find Us On</h5>
                <ListGroup>
                    <Nav.Link href="https://www.facebook.com/" target="_blank"><ListGroup.Item className="text-muted py-3"><FaFacebookF />&nbsp;Facebook</ListGroup.Item></Nav.Link>
                    <Nav.Link href="https://twitter.com/" target="_blank"><ListGroup.Item className="text-muted py-3"><FaTwitter />&nbsp;Twitter</ListGroup.Item></Nav.Link>
                    <Nav.Link href="https://www.instagram.com/" target="_blank"><ListGroup.Item className="text-muted py-3"><FaInstagram />&nbsp;Instagram</ListGroup.Item></Nav.Link>


                </ListGroup>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;