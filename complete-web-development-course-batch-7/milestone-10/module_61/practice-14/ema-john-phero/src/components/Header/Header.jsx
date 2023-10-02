import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                {!user && <Link to="/login">Login</Link>}
                {!user && <Link to="/signup">Sign Up</Link>}
            </div>
            {user && <p>{user.email} <Link onClick={handleLogOut}>Log Out</Link></p>}
        </nav>
    );
};

export default Header;