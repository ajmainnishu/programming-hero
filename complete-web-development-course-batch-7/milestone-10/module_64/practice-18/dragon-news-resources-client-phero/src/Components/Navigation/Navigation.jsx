import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Image from 'react-bootstrap/Image';

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    return (
        <Container>
            <Navbar expand="lg" className='pt-4 pb-5'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-3">
                        <Link to="/" className='text-decoration-none text-muted'>Home</Link>
                        <Link to="/about" className='text-decoration-none text-muted'>About</Link>
                        <Link to="/career" className='text-decoration-none text-muted'>Career</Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {user && <Image style={{height: '41px', width: '41px'}} src={user.photoURL} className='me-2' roundedCircle />}
                        {!user && <Link to='/login'><Button type="submit" className='btn btn-secondary fw-semibold px-4 rounded-0'>Login</Button></Link>}
                        {user && <Button onClick={handleLogOut} type="submit" className='btn btn-secondary fw-semibold px-4 rounded-0'>Log Out</Button>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navigation;