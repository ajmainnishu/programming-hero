import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import userPhoto from '../assets/navigation/userphoto.jpg';

const Navigation = () => {
    const { user, userLogOut } = useContext(AuthContext);
    // logout button
    const handleLogOut = () => {
        userLogOut();
    }
    return (
        <div className='bg-base-200'>
            <div className="navbar w-12/12 md:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* small device */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={`/`}>Home</Link></li>
                            <li><Link to={`all-toys`}>All Toys</Link></li>
                            <li><Link to={`/my-toys`}>My Toys</Link></li>
                            <li><Link to={`/add-toy`}>Add A Toy</Link></li>
                            <li><Link to={`/blogs`}>Blogs</Link></li>
                        </ul>
                    </div>
                    {/* website logo */}
                    <Link to={`/`} className="text-xl">
                        <img src={logo} alt="website logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* large device */}
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`all-toys`}>All Toys</Link></li>
                        <li><Link to={`/my-toys`}>My Toys</Link></li>
                        <li><Link to={`/add-toy`}>Add A Toy</Link></li>
                        <li><Link to={`/blogs`}>Blogs</Link></li>
                    </ul>
                </div>
                {/* button */}
                <div className="navbar-end">
                    {/* login button */}
                    {!user && <Link to={`/login`} className="btn btn-neutral">Login</Link>}
                    {/* user profile button */}
                    {user && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip capitalize tooltip-left" data-tip={user?.displayName}>
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL ? user.photoURL : userPhoto} className='border rounded-full' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Navigation;