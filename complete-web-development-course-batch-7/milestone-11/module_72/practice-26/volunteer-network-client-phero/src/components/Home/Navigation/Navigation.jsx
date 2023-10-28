import { Link } from "react-router-dom";
import logo from '../../../assets/logo/logo.png';
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from 'sweetalert2';

const Navigation = () => {
    // authprovider hook
    const { user, logOut } = useContext(AuthContext);
    // logout button
    const handleLogOut = () => {
        // sweetalert
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Done!',
                    'Logout Successfully',
                    'success'
                )
                // logout function
                logOut()
                    .then()
                    .catch()
            }
        })
    }
    return (
        <div className="">
            <div className="navbar w-11/12 md:w-10/12 mx-auto p-6 md:pt-11 pb-16 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* small device */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={`/`}>Home</Link></li>
                            <li><Link to={`/donation`}>Donation</Link></li>
                            <li><Link to={`/events`}>Events</Link></li>
                            <li><Link to={`/blog`}>Blog</Link></li>
                        </ul>
                    </div>
                    {/* website logo */}
                    <Link className="w-[197px] h-[60px]">
                        <img src={logo} className="w-full h-full" alt="website logo" />
                    </Link>
                </div>
                {/* desktop nav */}
                <div className="navbar-end space-x-8">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-base text-[#0B0B0B] font-medium px-1">
                            <li><Link to={`/`}>Home</Link></li>
                            <li><Link to={`/donation`}>Donation</Link></li>
                            <li><Link to={`/events`}>Events</Link></li>
                            <li><Link to={`/blog`}>Blog</Link></li>
                        </ul>
                    </div>
                    {/* buttons */}
                    {!user && <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                        <Link to={`/registration`} className="btn capitalize bg-[#3F90FC] text-white text-base font-avenir md:px-11 font-medium rounded-md border-none">Register</Link>
                        <Link to={`/admin/registerlist`} className="btn capitalize bg-[#434141] text-white text-base font-avenir md:px-11 font-medium rounded-md border-none">Admin</Link>
                    </div>}
                    {/* email name */}
                    {user && <div className="dropdown dropdown-end hover:cursor-pointer">
                        <label tabIndex={0} className="avatar p-2 hover:cursor-pointer hover:bg-slate-100 hover:p-2 hover:rounded">
                            <p className="font-bold text-black">{user?.displayName}</p>
                        </label>
                        {/* buttons */}
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><Link to={`/registration`}>Register</Link></li>
                            <li><Link to={`/admin/registerlist`}>Admin</Link></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Navigation;