import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // log out button
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className='header pb-5'>
            <Container>
                <div className='d-flex text-light pt-4'>
                    <div className='me-auto'>
                        <p><small>1250 WEST 6TH AVE, NEW YORK, NY 10036, UNITED STATES</small></p>
                    </div>
                    <div className='d-flex ms-auto gap-4'>
                        <p><small>TEL: +1 212 555 6688</small></p>
                        <p><small>FAX: +1 212 555 6699</small></p>
                        <p><small>BOOKING@GMAIL.COM</small></p>
                    </div>
                </div>
            </Container>
            <hr />
            <Navbar bg="bg-transparent" data-bs-theme="dark">
                <Container className='pt-1 pb-5'>
                    <Nav className="me-auto">
                        <Link className='btn' to="/">HOME</Link>
                        <Link className='btn' to="/rooms">ROOMS</Link>
                    </Nav>
                    <Navbar.Brand><img className='mt-4' src={logo} alt="website logo" /></Navbar.Brand>
                    <Nav className="ms-auto">
                        {!user && <Link className='btn' to="/signup">SIGN UP</Link>}
                        {!user && <Link className='btn' to="/login">LOG IN</Link>}
                        {user && <p className='btn btn-outline-light'>Name: {user.displayName ? user.displayName : 'No Name here'}</p>}
                        {user && <Link className='btn' onClick={handleLogOut}>LOG OUT</Link>}
                    </Nav>
                </Container>
            </Navbar>
            <div className='pb-5'>
                <p className='text-center text-light pt-5'>Welcome to CozyStay, a luxury apartment hotel in Times Square</p>
                <h1 className='text-center fw-semibold text-white display-1 pt-3 pb-5'>YOUR NEXT COZYSTAY <br /> HOTEL</h1>
            </div>
        </div>
    );
};

export default Header;