import logo from '../assets/logo/logo.png';
import { Link, Outlet } from 'react-router-dom';
import { FaUserFriends, FaPlus } from "react-icons/fa";

const Admin = () => {
    return (
        <div>
            <div className="grid grid-cols-8">
                <div className="col-span-8 lg:col-span-2 space-y-12 mx-auto">
                    {/* website logo */}
                    <Link to={`/`}>
                        <img src={logo} className="w-[197px] h-[60px] mt-6" alt="website logo" />
                    </Link>
                    {/* buttons */}
                    <div className='space-y-8'>
                        <Link to={`/admin/registerlist`} className='flex items-center gap-x-2 font-roboto font-normal text-[#111111] hover:text-[#207FEE] focus:text-[#207FEE]'><FaUserFriends /> Volunteer register list</Link>
                        <Link to={`/admin/addevent`} className='flex items-center gap-x-2 font-roboto font-normal text-[#111111] hover:text-[#207FEE] focus:text-[#207FEE]'><FaPlus /> Add event</Link>
                    </div>
                </div>
                <div className="col-span-8 lg:col-span-6 px-5 lg:px-0">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;