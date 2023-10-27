import { Link } from "react-router-dom";
import logo from '../../assets/logo/logo.svg';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AppointmentNav = () => {
    const { user, logOut } = useContext(AuthContext);
    // log out button
    const handleLogOut = () => {
        logOut()
    }
    // nav links
    const navLink = <>
        <li className='text-xl font-semibold text-[#444444]'><Link to={`/`}>Order</Link></li>
        <li className='text-xl font-semibold text-[#444444]'><Link to={`/appointment/order-review`}>Order Review</Link></li>
        <li className='text-xl font-semibold text-[#444444]'><Link to={`/appointment/manage-inventory`}>Manage Inventory</Link></li>
        {/* user state check */}
        {!user && <li className='text-xl font-semibold text-[#444444]'><Link to={`/appointment/login`}>Login</Link></li>}
        {user && <li className='text-xl font-semibold text-[#444444]'><Link onClick={handleLogOut}>Log Out</Link></li>}
    </>
    return (
        <div className='lg:w-9/12 mx-auto my-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    {/* small device dropdown navlinks */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    {/* website logo */}
                    <Link to={`/`} className="w-28">
                        <img src={logo} alt="website logo" />
                    </Link>
                </div>
                {/* big screen navlinks */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default AppointmentNav;