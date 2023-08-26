import './Header.css'
import Logo from '../../assets/Logo.svg'

const Header = () => {
    return (
        <div className='header-container'>
           <img src={Logo} alt="" />
           <nav>
                <a href="/order">Order</a>
                <a href="/revive">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Login</a>
           </nav>
        </div>
    );
};

export default Header;