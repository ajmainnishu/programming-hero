import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navigation = () => {
    const { user, userLogOut } = useContext(AuthContext);
    // logout button
    const handleLogOut = () => {
        userLogOut()
    }
    return (
        <div className="bg-base-100">
            <div className="navbar lg:w-9/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={`/`}>Home</Link></li>
                            <li><Link to={`/doctors`}>Doctors</Link></li>
                            {user && <li><Link to={`/client`}>Client</Link></li>}
                        </ul>
                    </div>
                    <Link to={`/`} className="btn btn-ghost normal-case text-xl">Mediva</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/doctors`}>Doctors</Link></li>
                        {user && <li><Link to={`/client`}>Client</Link></li>}
                    </ul>
                </div>
                <div className="navbar-end">
                    {!user && <Link to={`/login`} className="btn">Login</Link>}
                    {user && <Link onClick={handleLogOut} className="btn">Log Out</Link>}
                </div>
            </div>
        </div>
    );
};

export default Navigation;